document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content');
    const navLinks = document.querySelectorAll('.sidebar nav a');
    const pages = ['home', 'about', 'silly', 'making', 'consuming', 'sparkly', 'hosting', 'writing', 'video'];
    
    // Content for each page
    const pageContent = {
        home: `
            <div class="intro">
                <p class="steve-intro">Steve Nguyen</p>
                <p>A <span class="underline">PM</span> who loves to <span class="underline">code</span>.</p>
                <p>An iPhone <span class="underline">videographer</span>.</p>
                <p>A <span class="underline">writer</span> who never enjoyed English class.</p>
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
                    <a href='https://steviesteve.bearblog.dev/people-dont-need-to-be-in-your-life-forever/' target='_blank'>Recent piece</a> on how people don’t need to be in your life forever.
                    </p>
                </div>
            ">writer</span> 
            who never enjoyed English class.</p>
            <p id="silly-software">I like making <a href="https://www.techbropuritytest.com/" target="_blank">silly software</a> and <a href="https://x.com/helicone_ai/status/1686840508658876419" target="_blank">marketing videos</a> for startups.</p>
            <p id="home-contact-me"><a href="mailto:stevetn123@gmail.com">Contact me</a> for front-end/marketing work on a contract basis.</p>
            <div class="location">Currently: Brooklyn, NY</div>
        `,
        about: `
            <div class="about-section">
                <div id="about-section-one">
                    <h2>“You can just do things.”</h2>
                    <p>Taking this to heart, here’s a taste of what I’ve done:</p>
                    <br></br>
                    <p>♟️ I was cast in a <a href="https://www.youtube.com/watch?v=YhvVftrGogk&t=19s&pp=ygUQYm90ZXpsaXZlIDUgdnMgMQ%3D%3D" target="_blank">Botez Sisters</a> video for the chance to win $1,000.</p>
                    <br></br>
                    <p>🥳 I threw a Steve-themed 21st birthday party where 200 people dressed up as a <a href="https://www.instagram.com/p/CdMqGEdlbJr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">historic Steve</a>.</p>
                    <br></br>
                    <p>🫂 I DM'd strangers I admired on the internet and started <a href="https://lu.ma/beans" target="_blank">Friendly Beans</a>, a friendly community of tinkerers who meet every Sunday in Cambridge, MA.</p>
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
                    I believe technology can benefit from more play and whimsy. <a href="https://www.techbropuritytest.com/" target="_blank">This</a> is my latest attempt to add silliness to the world.
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
                    I like to make things like silly software, blog posts exploring the meaning of life and videos that capture what my life was like. The image previews on the page are a little buggy, so currently reworking it.
                </p>
            </div>
            <div class="project-card-container">
                <a href="https://github.com/stevetng/sports_narrator" class="project-card" target="_blank">
                    <img id="preview1" src="" alt="Preview Image" width="100%">
                    <h2>News, but make it sports.</h2>
                    <p> I used the the EXA and Open AI APIs to fetch and then summarize the latest political news in the tone of a sports narrator so they'd be more interesting to read.</p>
                </a>
                <a href="https://www.instagram.com/reel/Cu4rNy0A6U0/?utm_source=ig_web_copy_link" class="project-card" target="_blank">
                    <img id="preview2" src="" alt="Preview Image" width="100%">
                    <h2>A Walk to Class</h2>
                    <p>A video I worked on with my friend from USC, William Higbie exploring how we can capture the serendipity of a walk to class.</p>
                </a>
                <a href="https://github.com/stevetng/web-crawler" class="project-card" target="_blank">
                    <img id="preview3" src="" alt="Preview Image" width="100%">
                    <h2>Web Crawling Visualization</h2>
                    <p>Inspired by how Google uses web crawlers to index trillions of URLs, I built a website crawler that takes in a URL and creates a graph of URLs mentioned on the site.</p>
                </a>
                <a href="https://www.techbropuritytest.com/" class="project-card" target="_blank">
                    <img id="preview4" src="" alt="Preview Image" width="100%">
                    <h2>Tech Bro Purity Test</h2>
                    <p>Inspired by some VERY prototypical experiences with tech bros, I decided to make this. (My score's 67)</p>
                </a>
            </div>
        `,
        consuming: `
            <div class="feed-content">
                <h2>Consuming</h2>
                <p>
                    
                </p>
                <img src="yt_rec.png" width="100%">
            </div>
        `,
        sparkly:  `
            <h2>Sparkly</h2>
            <p id="silly-software">This is the Sparkly page content.</p>
         `,
        hosting: `
            <h2>Hosting</h2>
            <p id="silly-software">This is the Hosting page content.</p>
        `,
        writing: `
            <h2>Writing</h2>
            <p id="silly-software">This is the content for Page 8.</p>
        `,
        video: `
            <h2>Video</h2>
            <p id="silly-software">This is the content for Page 9.</p>
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
                    top = rect.top + window.scrollY - popupRect.height - 10;
                    left = Math.max(10, Math.min(left, window.innerWidth - popupRect.width - 10));
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
        });
    }

    function navigateToPage(pageName) {
        contentArea.innerHTML = pageContent[pageName];
        updateActiveLink(pageName);
        createPopups(); // Create popups after content is loaded
        links.forEach(link => {
            fetchLinkPreview(link.url, link.imgId);
        });
        window.history.pushState({page: pageName}, pageName, `#${pageName}`);
    }

    function updateActiveLink(pageName) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
    }

    // Handle click navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.getAttribute('data-page');
            navigateToPage(pageName);
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
    
    const links = [
        {
            url: 'https://github.com/stevetng/sports_narrator',
            imgId: 'preview1'
        },
        {
            url: 'https://www.instagram.com/reel/Cu4rNy0A6U0/?utm_source=ig_web_copy_link',
            imgId: 'preview2'
        },
        {
            url: 'https://github.com/stevetng/web-crawler',
            imgId: 'preview3'
        },
        {
            url: 'https://www.techbropuritytest.com/',
            imgId: 'preview4'
        }
    ];

    async function fetchLinkPreview(url, imgId) {
            try {
                const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
                const data = await response.json();

                const parser = new DOMParser();
                const doc = parser.parseFromString(data.contents, 'text/html');
                const ogImage = doc.querySelector('meta[property="og:image"]');
                const imageUrl = ogImage ? ogImage.content : '';

                const img = document.getElementById(imgId);
                if (imageUrl) {
                    img.src = imageUrl;
                } else {
                    img.src = 'oopsies.png'; // Set your placeholder image path here
                    img.alt = 'No preview image found';
                }
            } catch (error) {
                console.error(`Error fetching preview for ${url}:`, error);
                const img = document.getElementById(imgId);
                img.src = 'oopsies.png'; // Set your placeholder image path here
                img.alt = 'Failed to load preview';
            }
        }

        // Loop through each link and fetch its preview
        links.forEach(link => {
            fetchLinkPreview(link.url, link.imgId);
        });

    // Initial page load
    const initialPage = window.location.hash.slice(1) || 'home';
    navigateToPage(initialPage);
    
});
