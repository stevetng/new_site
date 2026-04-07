document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content');
    const navLinks = document.querySelectorAll('.sidebar nav a');
    const pages = ['home', 'about', 'writing', 'making', 'consuming', 'sparkly', 'hosting', 'silly', 'bonus'];
    
    // Content for each page
    const pageContent = {
        home: `
            <div class="intro">
                <p class="steve-intro">Steve Nguyen</p>
                <p>A <span class="underline" data-popup="
                <div style='padding: 4px'>
                    <h3>ServiceNow</h3>
                    <span style='position: absolute; top: 20px; right: 24px; font-size: 10px'>‘23 - ‘24</span>
                    <p style='font-size: 12px; margin-top: 12px;'>
                        I’m a Technical Program Manager for our Automations team and previously for the AI Search team. <br></br>
                        I learned how process can be necessary at a large company and how to drive delivery of large scale software.
                    </p>
                </div>
            ">PM</span> who loves to <span class="underline" data-popup="
                <div style='padding: 4px';>
                    <h3>Software</h3>
                    <p style='font-size: 12px; margin-top: 12px; margin-bottom:12px;'>
                        I like when software intersects with delight, play and silliness. <br></br>
                        I’m decent with JS frameworks like React + Next.js and by decent I mean I can prompt until something mostly works.
                    </p>
                    <a href='https://github.com/stevetng' target='_blank'>Check out my GitHub</a>
                </div>
            "
            ">code</span>. (Tap the underlined words!)</p>
                <p>An iPhone <span class="underline" data-popup="
                <div style='padding: 4px'>
                    <h3>Videography</h3>
                    <p style='font-size: 12px; margin-top: 12px;'>
                        I like to document my life in videos so my future kids can see how I was <a href='https://www.instagram.com/reel/Cu4rNy0A6U0/?utm_source=ig_web_copy_link' target='_blank'>a cool guy</a>.
                        <br></br>
                        I also like how unbounded creativity can be in videos so making videos for a purpose like <a href='https://x.com/WoahIsThatSteve/status/1805030499049513338' target='_blank'>marketing's</a> cool too.
                    </p>
                </div>
            ">videographer</span>.</p>
                <p>A <span class="underline" data-popup="
                <div style='padding: 4px'>
                    <h3>Writing</h3>
                    <p style='font-size: 12px; margin-top: 12px;'>
                    I like to journal intensely, live life intensely without writing, and then journal intensely again.
                    <br></br>
                    When I feel like people can benefit from a unique perspective I have, I write to change their mind.
                    <br></br>
                    <a href='https://steviesteveee.substack.com/p/are-these-my-people' target='_blank'>Recent piece</a> on how to find the right people for you.
                    </p>
                </div>
            ">writer</span> who never enjoyed English class.</p>
            </div>
            <p class="intro-web">I'm Steve, a <span class="underline" data-popup="
                <div style='padding: 4px'>
                    <h3>ServiceNow</h3>
                    <span style='position: absolute; top: 20px; right: 24px; font-size: 10px'>‘23 - ‘24</span>
                    <p style='font-size: 12px; margin-top: 12px;'>
                        I’m a Technical Program Manager for our Automations team and previously for the AI Search team. <br></br>
                        I learned how process can be necessary at a large company and how to drive delivery of large scale software.
                    </p>
                </div>
            ">PM</span> who loves to <span class="underline" data-popup="
                <div style='padding: 4px';>
                    <h3>Software</h3>
                    <p style='font-size: 12px; margin-top: 12px; margin-bottom:12px;'>
                        I like when software intersects with delight, play and silliness. <br></br>
                        I’m decent with JS frameworks like React + Next.js and by decent I mean I can prompt until something mostly works.
                    </p>
                    <a href='https://github.com/stevetng' target='_blank'>Check out my GitHub</a>
                </div>
            "
            ">code</span>, an iPhone
            <span class="underline" data-popup="
                <div style='padding: 4px'>
                    <h3>Videography</h3>
                    <p style='font-size: 12px; margin-top: 12px;'>
                        I like to document my life in videos so my future kids can see how I was <a href='https://www.instagram.com/reel/Cu4rNy0A6U0/?utm_source=ig_web_copy_link' target='_blank'>a cool guy</a>.
                        <br></br>
                        I also like how unbounded creativity can be in videos so making videos for a purpose like <a href='https://x.com/WoahIsThatSteve/status/1805030499049513338' target='_blank'>marketing's</a> cool too.
                    </p>
                </div>
            ">videographer</span>, and a <span class="underline" data-popup="
                <div style='padding: 4px'>
                    <h3>Writing</h3>
                    <p style='font-size: 12px; margin-top: 12px;'>
                    I like to journal intensely, live life intensely without writing, and then journal intensely again.
                    <br></br>
                    When I feel like people can benefit from a unique perspective I have, I write to change their mind.
                    <br></br>
                    <a href='https://steviesteveee.substack.com/p/are-these-my-people' target='_blank'>Recent piece</a> on how to find the right people for you.
                    </p>
                </div>
            ">writer</span> 
            who never enjoyed English class.</p>
            <p id="silly-software">I like making <a href="https://www.techbropuritytest.com/" target="_blank">silly software</a> and <a href="https://x.com/helicone_ai/status/1686840508658876419" target="_blank">marketing videos</a> for startups.</p>
            <p id="home-contact-me"><a href="mailto:stevetn123@gmail.com">Contact me</a> for front-end/marketing work on a contract basis.</p>
            <div class="location"><p id="fun-msg" style="font-size:10px; text-align:center">(I left some easter eggs on this page!)</p>Currently: Brooklyn, NY</div>
        `,
        about: `
            <div class="about-section">
                <div id="about-section-one">
                    <h2>You can just do things.</h2>
                    <p>Taking this to heart, here’s a taste of what I’ve done:</p>
                    <br></br>
                    <p>♟️ I was cast in a <a href="https://www.youtube.com/watch?v=YhvVftrGogk&t=19s&pp=ygUQYm90ZXpsaXZlIDUgdnMgMQ%3D%3D" target="_blank">Botez Sisters</a> video for the chance to win $1,000. I hit a peak rating of 1800 on chess.com by watching a ton of Youtube.</p>
                    <br></br>
                    <p>🥳 I threw a Steve-themed 21st birthday party where 200 people dressed up as a <a href="https://www.instagram.com/p/CdMqGEdlbJr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">historic Steve</a>.</p>
                    <br></br>
                    <p>🫂 I DM'd strangers I admired on the internet and started <a href="https://lu.ma/beans" target="_blank">Friendly Beans</a>, a friendly community of tinkerers who meet every Sunday in Cambridge, MA.</p> <br></br>
                    <p>💻 I spent a stupid amount of time making this site a Single Page Application in pure HTML/CSS/JS because I wanted control over every microinteraction. </p>
                </div>
                <div id="about-section-two">
                    <img src="polaroid.png" alt="Description of image" />
                </div>
            </div>
        `,
        silly: `
            <div class="feed-content">
                <h2>Silly Software</h2>
                <p>
                    We need sillier tech in the world so people remember that tech can be human. 
                    <a href="https://www.techbropuritytest.com/" target="_blank">This</a> is my latest attempt to add silliness to the world.
                </p>
                <div id="tech-test" style="position: relative; overflow: hidden; width: 100%; padding-top: 56.25%;">
                    <iframe 
                        src="https://www.techbropuritytest.com/" 
                        style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%;"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        `,
        making: `
            <div class="making-content">
                <h2>Making</h2>
                <p>
                    I don't know if I love trying new things or if I'm just in my 20's. For the meantime, I love making silly software, blog posts and videos.
                </p>
            </div>
            <div class="project-card-container">
                <a href="https://github.com/stevetng/sports_narrator" class="project-card" target="_blank">
                    <img id="preview1" src="sports.png" alt="Preview Image" width="100%">
                    <h2>News, but make it sports.</h2>
                    <p> I used the EXA and Open AI APIs to fetch and then summarize the latest political news in the tone of a sports broadcaster.</p>
                </a>
                <a href="https://www.instagram.com/reel/Cu4rNy0A6U0/?utm_source=ig_web_copy_link" class="project-card" target="_blank">
                    <img id="preview2" src="walk.jpg" alt="Preview Image" width="100%">
                    <h2>A Walk to Class</h2>
                    <p>A video I worked on with my friend from USC, William Higbie exploring how we can capture the serendipity of a walk to class.</p>
                </a>
                <a href="https://github.com/stevetng/web-crawler" class="project-card" target="_blank">
                    <img id="preview3" src="web_crawler.png" alt="Preview Image" width="100%">
                    <h2>Web Crawling Visualization</h2>
                    <p>Inspired by how Google uses web crawlers to index trillions of URLs, I built a website crawler that takes in a URL and creates a graph of URLs mentioned on the site.</p>
                </a>
                <a href="https://www.techbropuritytest.com/" class="project-card" target="_blank">
                    <img id="preview4" src="tech_bro 1.png" alt="Preview Image" width="100%">
                    <h2>Tech Bro Purity Test</h2>
                    <p>Inspired by some VERY stereotypical experiences with tech bros, I decided to make this. (My score's 67)</p>
                </a>
            </div>
        `,
        consuming: `
            <div class="feed-content">
                <h2>Consuming</h2>
                <p>
                    These are my favorite blogs and media that have shaped how I view the world.
                </p>
                <p>
                My favorite blogs:
                    <li><a href="paulgraham.com"target="_blank">Paul Graham</a> - specifically his writing on <a href="https://paulgraham.com/cities.html"target="_blank">cities</a>. This post kick-started my brain on how to describe cities beyong the generic descriptors like food quality + public transporation people usually cite. </li>
                    <li><a href="https://worksinprogress.co/"target="_blank">Works in Progress</a> - specifically the piece on <a href="https://worksinprogress.co/issue/why-prediction-markets-arent-popular/"target="_blank">prediction markets</a>. This blog opened my eyes to what makes writing truly persuasive. The writers for works in progress are exceptional at presenting an argument and addressing counter arguments the moment you begin to think of them.</li>
                    <li><a href="https://www.avabear.xyz/about"target="_blank">Ava Bookbear</a> - specifically the piece on <a href="https://www.avabear.xyz/p/the-true-shape-of-a-thing"target="_blank">the true shape of a thing</a>. If something feels good, you can just do it and continue doing it, sharing it with the world and seeing where it takes you. Ava consistently puts the complex into digestible, impactful writing.</li>
                </p>
                <p>
                Media that fundamentally changed me.
                    <li><a href="https://www.amazon.com/Shantaram-Novel-Gregory-David-Roberts/dp/0312330537"target="_blank">Shantaram - Gregory David Roberts </a> - My favorite use of the English language I've ever read. This book convinced me to romanticize life and to always choose adventure. </li>
                    <li>Season 2, Episode 7 of <a href="https://en.wikipedia.org/wiki/The_Bear_(TV_series)"target="_blank">The Bear</a> – “Forks”. It's never and I mean never too late to redefine yourself. You can just do things.</li>
                    <li><a href="https://www.imdb.com/title/tt2194499/"target="_blank">About Time</a> - About Time is like a warm hug that will comfort you at all the different phases of life. Love is not about being perfect. Stop living life like you wanted a second chance at everyday. Take whatever life throws at you and face it with grace. </li>
                    <li><a href="https://www.amazon.com/When-Breath-Becomes-Paul-Kalanithi/dp/081298840X"target="_blank">When Breath Becomes Air - Paul Kalanithi</a> - There’s no one better to talk about life than those who are closest to death. This book conviced me that I can pursue a "higher calling" while not getting lost that pursuit. That I can also find meaning in the mundane. </li>
                    <li><a href="https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0061122416"target="_blank">The Alchemist - Paulo Coelho</a> - When you vocalize your goals + dreams into the world, the whole world conspires to help you get there. If love is meant to be, letting go will not mean it's gone.</li>
                    <li><a href="https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501"target="_blank">Educated - Tara Westover</a> - I've never felt closer to understanding why my immigrant parents so badly wished for me to go to college than after reading this book. Exceptional storytelling, the first time in a long time I read 100+ pages in one session. </li>
                </p>
            </div>
        `,
        sparkly:  `
            <div class="feed-content">
                <h2>Sparkly People</h2>
                <p>
                    Sparkly people are the ones who give me energy. The ones where I leave interactions with them saying... wow. 
                </p>
                <p>
                    These people have been either incredibly consistent with the delight they bring to my life or I've had a high concentration of magic in my limited interactions with them.
                </p>
                <ul style="margin-top:0">
                    <li><a href="https://avonarnim.github.io/" target="_blank">Adam Von Arnim</a> - an endless sense of humor + wonder for the world.</li>
                    <li><a href="https://mariofigueroa.space" target="_blank">Mario Figueroa</a> - a relentless pursuit of craft + polish. Never met someone with better taste in memes, but also style.</li>
                    <li><a href="https://jwang.work" target="_blank">Jess Wang</a> - a rare combination of wisdom and silliness with a heavy dose of creativity.</li>
                    <li><a href="https://ariellelok.com/about.html" target="_blank">Arielle Lok</a> - living embodiment of "you can just do things".</li>
                    <li><a href="https://www.clairebookworm.com/" target="_blank">Claire Wang</a> - a wonderful co-host. Silly, thoughtful, friendliest bean.</li>
                    <li><a href="https://ansonyu.me" target="_blank">Anson Yu</a> - a good friend once described her as the rare case of energetic irl and online.</li>
                    <li><a href="https://www.hudzah.com/" target="_blank">HudZah</a> - I walked into his room once and he was building a nuclear fusor. Curiosity could never kill the cat.</li>
                    <li><a href="https://x.com/abigaillafrica?lang=en" target="_blank">Beez</a> - a force of nature. A fiercely loyal friend and a properly critical editor.</li>
                    <li><a href="https://www.linkedin.com/in/gitikapahwa/" target="_blank">Gitika Pahwa</a> - clever, witty and resilient. Really good at call backs.</li>
                    <li><a href="https://www.instagram.com/tobi.og/" target="_blank">Tobi Ogunyankin</a> - silly. Coolest sense of style, killer dance moves and INCREDIBLE storytelling.</li>
                    <li><a href="https://joelyoon.com/" target="_blank">Joel Yoon</a> - he's wired differently but in this case, he was the electrician doing the rewiring.</li>
                    <li><a href="https://www.samvictoria.co/" target="_blank">Samuel Victoria</a> - an immensely loyal friend. Creative, thoughtful and a hustler.</li>
                    <li><a href="https://www.instagram.com/amiyoshimura_/" target="_blank">Ami Yoshimura</a> - the king of community building. Thoughtful and dedicated super connector.</li>
                    <li><a href="https://www.rishi.cx/" target="_blank">Rishi Kothari</a> - the best person to stroll around Harvard campus with. Curious, kind and delightful.</li>
                    <li><a href="https://substack.com/@alexanderao" target="_blank">Alex Chueh</a> - meets a new person every single day. Living example of seeking discomfort.</li>
                    <li><a href="https://malted.dev/" target="_blank">Ben Dixon</a> - brings a child-like wonder and delight to every interaction you have with him. </li>
                    <li><a href="mailto:stevetn123@gmail.com" target="_blank">Maybe you?</a> - if you're someone who lets curiosity + serendipity guide you, reach out, I'd love to figure out some oddly specific hang out.</li>
                </ul>
            </div>
         `,
        hosting: `
            <div class="feed-content">
                <h2>Hosting (Pseudo Blog Post)</h2>
                <p>
                    I host events as an excuse to hang out with my friends. By hosting, I (selfishly) can put in some upfront work to set a time and place that works for me and then simply send messages en masse to my friends. The best part? They bring their friends and I get to make new homies :)
                </p>
                <div class="hosting-container" style="display:flex; gap:16px">
                    <div id="hosting-div">
                        <p>
                            If you feel like you're missing doing creative work/passion projects with other people, this is my pitch for you to come to <a href="https://lu.ma/beans" target="_blank">Friendly Beans.</a> 
                        </p>
                        <p>
                            We follow the same format every week, I bring Munchkins, we do intros with a fun question, 2 hours~ deep work, we eat Munchkins and then we show each other what we worked on. Food and a purpose for meeting is all you really need to have a good event/hang.
                        </p>
                        <p>
                        It’s also my way of fighting back against the loneliness epidemic. I’ve been able to see others in our community find the friends that make them feel creative and comfortable in their curiosity. 
                        We've met a ton of really fun friends by making things we care about—and want to find other caring tinkerers!
                        </p>
                    </div>
                    <iframe
                        src="https://lu.ma/embed/calendar/cal-yDZTDnxoCpg2xwE/events?"
                        width="50%"
                        height="400"
                        frameborder="0"
                        style="border: 1px solid #bfcbda88; border-radius: 8px; min-width:50%"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        >
                    </iframe>
            </div>
        `,
        writing: `
            <div class="feed-content">
                <h2>Writing</h2>
                <p>
                    I explore the answers to life's biggest questions in my writing. Questions like how we can have it all: a career we care about, friendships, family and love. I want to improve my persuasive writing, so if you have favorites please send :)
                </p>
                <div id="writing-container">
                    <div id="substack-feed-embed"></div>
                </div>
            </div>
        `,
        portfolio: `
            <div class="portfolio">
                <div class="portfolio-hero">
                    <h2>I'm <span class="hero-accent">Steve</span>, currently operations @ServiceNow</h2>
                    <p class="portfolio-location">📍 Based in New York</p>
                    <p class="portfolio-subtitle">Software enthusiast. Poker player. Community Host. Video game enthusiast.</p>
                    <ul class="portfolio-intro-list">
                        <li><span>Top 1% TFT player worldwide</span></li>
                        <li><span>1,000+ event attendees across Tea Haus NYC & Friendly Beans</span></li>
                        <li><span>Made a <a href="https://x.com/helicone_ai/status/1686840508658876419" target="_blank">launch video</a> for Helicone — 50K+ views</span></li>
                        <li><span>$10K+ from live low stakes poker</span></li>
                        <li><span>Cast in a <a href="https://www.youtube.com/watch?v=YhvVftrGogk&t=19s" target="_blank">Botez Sisters</a> video — 2M+ views</span></li>
                        <li><span>Created <a href="https://www.instagram.com/reel/CsB2FaQsch3/" target="_blank">reels</a> and short films</span></li>
                    </ul>
                </div>

                <div class="portfolio-filters">
                    <a href="#" class="portfolio-filter active-filter" data-filter="all">All</a>
                    <a href="#" class="portfolio-filter" data-filter="software">Software</a>
                    <a href="#" class="portfolio-filter" data-filter="community">Community</a>
                    <a href="https://steviesteveee.substack.com/" target="_blank">Writing ↗</a>
                    <a href="https://www.instagram.com/reel/CsB2FaQsch3/" target="_blank">Videos ↗</a>
                </div>

                <div class="portfolio-feed">
                    <a href="https://x.com/WoahIsThatSteve/status/1988292171901137091" target="_blank" class="portfolio-card" data-type="software">
                        <div class="portfolio-card-image">
                            <div class="preview-browser-bar preview-bar-overlay"><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-url">prediction-market-dashboard-pi.vercel.app</span></div>
                            <img src="preview_kalshi.png" alt="Prediction Market Terminal" class="portfolio-card-img" />
                            <span class="portfolio-card-badge">Featured on Twitter</span>
                        </div>
                        <div class="portfolio-card-body">
                            <div class="portfolio-card-date">2025</div>
                            <h3>Prediction Market Trading Terminal</h3>
                            <p>A Kalshi trading dashboard that sparked conversations on Twitter about the future of prediction markets.</p>
                            <div class="portfolio-tags">
                                <span class="portfolio-tag">Next.js</span>
                                <span class="portfolio-tag">TypeScript</span>
                                <span class="portfolio-tag">Tailwind CSS</span>
                                <span class="portfolio-tag">Radix UI</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/stevetng/poker_bankroll" target="_blank" class="portfolio-card" data-type="software">
                        <div class="portfolio-card-image">
                            <div class="preview-browser-bar preview-bar-overlay"><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-url">localhost:5173</span></div>
                            <img src="poker_preview.png" alt="Poker Bankroll Tracker" class="portfolio-card-img" />
                        </div>
                        <div class="portfolio-card-body">
                            <div class="portfolio-card-date">2025</div>
                            <h3>Poker Bankroll Tracker</h3>
                            <p>Track poker sessions, visualize bankroll trends, and analyze performance over time.</p>
                            <div class="portfolio-tags">
                                <span class="portfolio-tag">React</span>
                                <span class="portfolio-tag">Vite</span>
                                <span class="portfolio-tag">Recharts</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://koala-sheet.vercel.app/" target="_blank" class="portfolio-card" data-type="software">
                        <div class="portfolio-card-image">
                            <div class="preview-browser-bar preview-bar-overlay"><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-url">koala-sheet.vercel.app</span></div>
                            <img src="preview_koalasheet.png" alt="KoalaSheet" class="portfolio-card-img" />
                        </div>
                        <div class="portfolio-card-body">
                            <div class="portfolio-card-date">2025</div>
                            <h3>KoalaSheet</h3>
                            <p>Convert PDFs and Excel worksheets into any format you need.</p>
                            <div class="portfolio-tags">
                                <span class="portfolio-tag">Next.js</span>
                                <span class="portfolio-tag">React</span>
                                <span class="portfolio-tag">Tailwind CSS</span>
                                <span class="portfolio-tag">Radix UI</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/stevetng" target="_blank" class="portfolio-card" data-type="software">
                        <div class="portfolio-card-image">
                            <div class="portfolio-card-preview" style="background: linear-gradient(135deg, #f7971e, #ffd200);">
                                <div class="preview-browser-bar">
                                    <span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span>
                                    <span class="preview-url">cron: 0 9 * * 1-5</span>
                                </div>
                                <div class="preview-content">
                                    <div class="preview-code-lines">
                                        <div class="preview-code-line" style="width: 75%; background: rgba(0,0,0,0.2)"></div>
                                        <div class="preview-code-line" style="width: 50%; background: rgba(0,0,0,0.15)"></div>
                                        <div class="preview-code-line" style="width: 85%; background: rgba(0,0,0,0.2)"></div>
                                        <div class="preview-code-line" style="width: 40%; background: rgba(0,0,0,0.1)"></div>
                                    </div>
                                    <span class="preview-icon">📊</span>
                                </div>
                            </div>
                            <span class="portfolio-card-badge">Automated</span>
                        </div>
                        <div class="portfolio-card-body">
                            <div class="portfolio-card-date">2025</div>
                            <h3>Stock Signals Screener</h3>
                            <p>Automated stock screener with RSI, moving averages, and email alerts on a cron schedule.</p>
                            <div class="portfolio-tags">
                                <span class="portfolio-tag">Python</span>
                                <span class="portfolio-tag">yfinance</span>
                                <span class="portfolio-tag">pandas</span>
                                <span class="portfolio-tag">Cron</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.techbropuritytest.com/" target="_blank" class="portfolio-card" data-type="software">
                        <div class="portfolio-card-image">
                            <div class="preview-browser-bar preview-bar-overlay"><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-url">techbropuritytest.com</span></div>
                            <img src="preview_techbro.png" alt="Tech Bro Purity Test" class="portfolio-card-img" />
                            <span class="portfolio-card-badge">Viral</span>
                        </div>
                        <div class="portfolio-card-body">
                            <div class="portfolio-card-date">2024</div>
                            <h3>Tech Bro Purity Test</h3>
                            <p>A silly quiz that went viral — 200K+ views, 50K+ users. How much of a tech bro are you?</p>
                            <div class="portfolio-tags">
                                <span class="portfolio-tag">HTML</span>
                                <span class="portfolio-tag">CSS</span>
                                <span class="portfolio-tag">JavaScript</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://hater-jet.vercel.app/" target="_blank" class="portfolio-card" data-type="software">
                        <div class="portfolio-card-image">
                            <div class="preview-browser-bar preview-bar-overlay"><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-url">hater-jet.vercel.app</span></div>
                            <img src="preview_hater.png" alt="Daily Hater" class="portfolio-card-img" />
                        </div>
                        <div class="portfolio-card-body">
                            <div class="portfolio-card-date">2024</div>
                            <h3>Hater</h3>
                            <p>Full-stack social app deployed on Google Cloud Run and Vercel with auth and user profiles.</p>
                            <div class="portfolio-tags">
                                <span class="portfolio-tag">MongoDB</span>
                                <span class="portfolio-tag">Express</span>
                                <span class="portfolio-tag">React</span>
                                <span class="portfolio-tag">Docker</span>
                                <span class="portfolio-tag">GCP</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/stevetng/sports_narrator" target="_blank" class="portfolio-card" data-type="software">
                        <div class="portfolio-card-image">
                            <div class="portfolio-card-preview" style="background: linear-gradient(135deg, #f093fb, #f5576c);">
                                <div class="preview-browser-bar">
                                    <span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span>
                                    <span class="preview-url">sports-narrator.py</span>
                                </div>
                                <div class="preview-content">
                                    <div class="preview-code-lines">
                                        <div class="preview-code-line" style="width: 65%"></div>
                                        <div class="preview-code-line" style="width: 40%"></div>
                                        <div class="preview-code-line" style="width: 80%"></div>
                                    </div>
                                    <span class="preview-icon">🏈</span>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-card-body">
                            <div class="portfolio-card-date">2024</div>
                            <h3>News, but make it sports</h3>
                            <p>Fetches and summarizes political news in the tone of a sports broadcaster using EXA + OpenAI APIs.</p>
                            <div class="portfolio-tags">
                                <span class="portfolio-tag">Python</span>
                                <span class="portfolio-tag">OpenAI API</span>
                                <span class="portfolio-tag">EXA API</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.stevee.me/" target="_blank" class="portfolio-card" data-type="software">
                        <div class="portfolio-card-image">
                            <div class="preview-browser-bar preview-bar-overlay"><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-url">stevee.me</span></div>
                            <img src="preview_personalsite.png" alt="stevee.me" class="portfolio-card-img" />
                        </div>
                        <div class="portfolio-card-body">
                            <div class="portfolio-card-date">2024</div>
                            <h3>Personal Site</h3>
                            <p>Hand-built SPA in pure HTML/CSS/JS with custom microinteractions, keyboard navigation, and easter eggs.</p>
                            <div class="portfolio-tags">
                                <span class="portfolio-tag">HTML</span>
                                <span class="portfolio-tag">CSS</span>
                                <span class="portfolio-tag">JavaScript</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://web-production-a8de0.up.railway.app/" target="_blank" class="portfolio-card" data-type="software">
                        <div class="portfolio-card-image">
                            <div class="preview-browser-bar preview-bar-overlay"><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-url">web-production-a8de0.up.railway.app</span></div>
                            <img src="flashcard_preview.png" alt="AI Flashcard Generator" class="portfolio-card-img" />
                        </div>
                        <div class="portfolio-card-body">
                            <div class="portfolio-card-date">2024</div>
                            <h3>AI Flashcard Generator</h3>
                            <p>Generate study flashcards from PowerPoint presentations using Claude AI.</p>
                            <div class="portfolio-tags">
                                <span class="portfolio-tag">Python</span>
                                <span class="portfolio-tag">Flask</span>
                                <span class="portfolio-tag">Claude API</span>
                            </div>
                        </div>
                    </a>
                    <div class="portfolio-card portfolio-community-card" data-type="community">
                        <div class="portfolio-card-body">
                            <div class="portfolio-card-date">2024 — 2025</div>
                            <h3>🫘 <a href="https://lu.ma/beans" target="_blank">Friendly Beans</a></h3>
                            <p>A weekly community of tinkerers in Cambridge, MA spun off of Socratica. Hosted weekly from 2024-2025.</p>
                            <span class="stat-highlight">Weekly</span>
                        </div>
                    </div>
                    <div class="portfolio-card portfolio-community-card" data-type="community">
                        <div class="portfolio-card-body">
                            <div class="portfolio-card-date">2023 — 2024</div>
                            <h3>🍵 Tea Haus NYC</h3>
                            <p>Co-hosted a recurring community event in New York for half a year. Built sponsor relationships and grew a real community.</p>
                            <span class="stat-highlight">1,000+ attendees</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-cta">
                    <h3>Let's talk</h3>
                    <div class="portfolio-cta-links">
                        <a href="mailto:stevetn123@gmail.com">Email me</a>
                        <a href="https://x.com/WoahIsThatSteve" target="_blank">Twitter</a>
                    </div>
                </div>
            </div>
        `,
        bonus: `
            <div class="feed-content">
                <h2>Bonus</h2>
                <p>
                    Welcome to my old site (circa 2023)
                </p>
                <iframe 
                width="100%"
                height="600"
                style="border: 1px solid #bfcbda88; border-radius: 4px;"
                src="https://stevetng.com/">
            </iframe>
            </div>
        `,
    };

    function createPopups() {
        document.querySelectorAll('.underline[data-popup]').forEach(el => {
            const popup = document.createElement('div');
            popup.className = 'popup';
            popup.innerHTML = el.getAttribute('data-popup');
            el.appendChild(popup);
    
            el.addEventListener('mouseenter', () => {
                const rect = el.getBoundingClientRect();
                const popupRect = popup.getBoundingClientRect();
                
                let top = rect.bottom + window.scrollY;
                let left = rect.left + window.scrollX;
    
                // Adjust position for mobile
                if (window.innerWidth <= 768) {
                    top = rect.top + window.scrollY + (rect.height / 2) - (popupRect.height / 2);
                    left = (window.innerWidth - popupRect.width) / 2;
                } else {
                    // Existing desktop positioning logic
                    if (left + popupRect.width > window.innerWidth) {
                        left = window.innerWidth - popupRect.width - 10;
                    }
                    left = Math.max(10, left);
                }
                
                popup.style.top = `${top}px`;
                popup.style.left = `${left}px`;
            });
            el.addEventListener('touchstart', () => {
                // Trigger the same logic as mouseenter
                const rect = el.getBoundingClientRect();
                const popupRect = popup.getBoundingClientRect();
                
                let top = rect.bottom + window.scrollY;
                let left = rect.left + window.scrollX;
            
                // Adjust position for mobile
                top = rect.top + window.scrollY + (rect.height / 2) - (popupRect.height / 2);
                left = (window.innerWidth - popupRect.width) / 2;
            
                popup.style.top = `${top}px`;
                popup.style.left = `${left}px`;
            });
            // el.addEventListener('click', () => {
            //     // Trigger the same logic as mouseenter
            //     const rect = el.getBoundingClientRect();
            //     const popupRect = popup.getBoundingClientRect();
                
            //     let top = rect.bottom + window.scrollY;
            //     let left = rect.left + window.scrollX;
            
            //     // Adjust position for mobile
            //     top = rect.top + window.scrollY + (rect.height / 2) - (popupRect.height / 2);
            //     left = (window.innerWidth - popupRect.width) / 2;
            
            //     popup.style.top = `${top}px`;
            //     popup.style.left = `${left}px`;
            // });
        });
    }

    function initPortfolio() {
        // Add dark mode class and hide sidebar
        contentArea.classList.add('portfolio-mode');
        document.querySelector('.container').classList.add('portfolio-active');

        // Cursor glow follower
        const glow = document.createElement('div');
        glow.className = 'portfolio-glow';
        contentArea.appendChild(glow);
        contentArea.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });

        // GSAP animations
        if (typeof gsap !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            const scroller = contentArea;

            // Hero entrance
            gsap.from('.portfolio-hero h2', {
                y: 40, opacity: 0, duration: 0.8,
                ease: 'power3.out'
            });
            gsap.from('.portfolio-stats .portfolio-stat', {
                y: 30, opacity: 0, duration: 0.6,
                stagger: 0.1, ease: 'power3.out', delay: 0.3
            });
            gsap.from('.portfolio-filters', {
                y: 20, opacity: 0, duration: 0.5,
                ease: 'power3.out', delay: 0.5
            });

            // Stagger feed cards
            const feedCards = document.querySelectorAll('.portfolio-feed .portfolio-card');
            if (feedCards.length) {
                gsap.fromTo(feedCards,
                    { opacity: 0 },
                    {
                        opacity: 1, duration: 0.4,
                        stagger: 0.06, ease: 'power2.out', delay: 0.4,
                        clearProps: 'all'
                    }
                );
            }

            // CTA
            gsap.from('.portfolio-cta', {
                scrollTrigger: {
                    trigger: '.portfolio-cta',
                    scroller: scroller,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                y: 30, opacity: 0, duration: 0.6,
                ease: 'power3.out'
            });
        }

        // Filter buttons
        document.querySelectorAll('.portfolio-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = btn.getAttribute('data-filter');
                document.querySelectorAll('.portfolio-filter').forEach(b => b.classList.remove('active-filter'));
                btn.classList.add('active-filter');
                document.querySelectorAll('.portfolio-feed .portfolio-card').forEach(card => {
                    const type = card.getAttribute('data-type');
                    if (filter === 'all' || type === filter) {
                        card.style.display = '';
                        gsap.fromTo(card, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // 3D tilt on cards
        document.querySelectorAll('.portfolio-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    function cleanupPortfolio() {
        contentArea.classList.remove('portfolio-mode');
        document.querySelector('.container').classList.remove('portfolio-active');
        const glow = contentArea.querySelector('.portfolio-glow');
        if (glow) glow.remove();
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.getAll().forEach(t => t.kill());
        }
    }

    function navigateToPage(pageName) {
        cleanupPortfolio();
        contentArea.innerHTML = pageContent[pageName];
        updateActiveLink(pageName);
        createPopups(); // Create popups after content is loaded
        if (pageName === 'portfolio') initPortfolio();
        window.history.pushState({page: pageName}, pageName, `#${pageName}`);

        const substackScript = document.createElement('script');
        substackScript.src = "https://substackapi.com/embeds/feed.js";
        substackScript.async = true;
        document.body.appendChild(substackScript);
    }

    function updateActiveLink(pageName) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`[data-page="${pageName}"]`);
        if (activeLink) activeLink.classList.add('active');
    }

    // Handle click navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const pageName = this.getAttribute('data-page');
            if (pageName) {
                e.preventDefault();
                navigateToPage(pageName);
            }
        });
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key >= '1' && e.key <= '9') {
            const index = parseInt(e.key) - 1;
            navigateToPage(pages[index]);
        }
    });

    // Handle browser back/forward navigation
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.page) {
            navigateToPage(e.state.page);
        }
    });

    // adding link previews for the making page
    
    // const links = [
    //     {
    //         url: 'https://github.com/stevetng/sports_narrator',
    //         imgId: 'preview1'
    //     },
    //     {
    //         url: 'https://www.instagram.com/reel/Cu4rNy0A6U0/?utm_source=ig_web_copy_link',
    //         imgId: 'preview2'
    //     },
    //     {
    //         url: 'https://github.com/stevetng/web-crawler',
    //         imgId: 'preview3'
    //     },
    //     {
    //         url: 'https://www.techbropuritytest.com/',
    //         imgId: 'preview4'
    //     }
    // ];

    // async function fetchLinkPreview(url, imgId) {
    //         try {
    //             const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
    //             const data = await response.json();

    //             const parser = new DOMParser();
    //             const doc = parser.parseFromString(data.contents, 'text/html');
    //             const ogImage = doc.querySelector('meta[property="og:image"]');
    //             const imageUrl = ogImage ? ogImage.content : '';

    //             const img = document.getElementById(imgId);
    //             if (img) { // Check if the image element exists
    //                 if (imageUrl) {
    //                     img.src = imageUrl;
    //                 } else {
    //                     img.src = 'oopsies.png'; // Set your placeholder image path here
    //                     img.alt = 'No preview image found';
    //                 }
    //             } else {
    //                 console.warn(`Image element with ID ${imgId} not found.`);
    //             }
    //         } catch (error) {
    //             console.error(`Error fetching preview for ${url}:`, error);
    //             const img = document.getElementById(imgId);
    //             if (img) { // Check if the image element exists
    //                 img.src = 'oopsies.png'; // Set your placeholder image path here
    //                 img.alt = 'Failed to load preview';
    //             }
    //         }
    //     }

    //     // Loop through each link and fetch its preview
    //     links.forEach(link => {
    //         fetchLinkPreview(link.url, link.imgId);
    //     });

    // Initial page load
    const initialPage = window.location.hash.slice(1) || 'home';
    navigateToPage(initialPage);
    
});
