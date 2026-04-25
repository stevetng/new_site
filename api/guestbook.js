import { Redis } from '@upstash/redis';

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
});

const ENTRIES_KEY = 'guestbook:entries';
const ENTRIES_CAP = 500;       // server-side hard cap on stored entries
const RATE_WINDOW_S = 60;      // per-IP write window
const RATE_LIMIT = 3;          // max signs per window
const MAX_MSG_LENGTH = 200;

function clientIp(req) {
    const xff = req.headers['x-forwarded-for'];
    if (typeof xff === 'string') return xff.split(',')[0].trim();
    if (Array.isArray(xff)) return xff[0];
    return req.socket?.remoteAddress || 'unknown';
}

function parseEntry(raw) {
    if (!raw) return null;
    if (typeof raw === 'object') return raw;
    try { return JSON.parse(raw); } catch (e) { return null; }
}

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store');

    if (req.method === 'GET') {
        try {
            const raw = await redis.lrange(ENTRIES_KEY, 0, -1);
            const entries = raw.map(parseEntry).filter(Boolean);
            return res.status(200).json({ entries });
        } catch (err) {
            return res.status(500).json({ error: 'failed to read guestbook.' });
        }
    }

    if (req.method === 'POST') {
        const ip = clientIp(req);
        const rateKey = `guestbook:rate:${ip}`;

        try {
            const count = await redis.incr(rateKey);
            if (count === 1) await redis.expire(rateKey, RATE_WINDOW_S);
            if (count > RATE_LIMIT) {
                return res.status(429).json({ error: 'too many signs in a minute. take a breath.' });
            }
        } catch (err) {
            // if rate-limit store is down, fail open but log
            console.error('rate-limit error', err);
        }

        let body = req.body;
        if (typeof body === 'string') {
            try { body = JSON.parse(body); } catch (e) { body = {}; }
        }
        const msg = (body && typeof body.msg === 'string' ? body.msg : '').trim();
        if (!msg) return res.status(400).json({ error: 'message required.' });
        if (msg.length > MAX_MSG_LENGTH) {
            return res.status(400).json({ error: `keep it under ${MAX_MSG_LENGTH} chars.` });
        }

        const entry = { msg, at: Date.now() };
        try {
            await redis.lpush(ENTRIES_KEY, JSON.stringify(entry));
            await redis.ltrim(ENTRIES_KEY, 0, ENTRIES_CAP - 1);
            return res.status(201).json({ ok: true, entry });
        } catch (err) {
            return res.status(500).json({ error: 'failed to save signature.' });
        }
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'method not allowed' });
}
