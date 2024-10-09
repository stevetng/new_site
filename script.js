document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content');
    const navLinks = document.querySelectorAll('.sidebar nav a');
    const pages = ['home', 'about', 'silly', 'making', 'consuming', 'sparkly', 'hosting', 'page8', 'page9'];

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
                    <p>📝 I made a <a href="https://www.techbropuritytest.com/" target="_blank">tech bro purity test</a> that Primeagen, Theo.gg and 50,000+ other people thought was funny.</p>
                </div>
                <div id="about-section-two">
                    <img src="polaroid.png" alt="Description of image" />
                </div>
            </div>
        `,
        silly: `
            <h2>silly</h2>
            <p id="silly-software">This is the Silly Software page content.</p>
        `,
        making: `
            <h2>Making</h2>
            <p id="silly-software">This is the Making page content.</p>
        `,
        consuming: `
            <h2>Consuming</h2>
            <p id="silly-software">This is the Consuming page content.</p>
        `,
        sparkly:  `
            <h2>Sparkly</h2>
            <p id="silly-software">This is the Sparkly page content.</p>
         `,
        hosting: `
            <h2>Hosting</h2>
            <p id="silly-software">This is the Hosting page content.</p>
        `,
        page8: `
            <h2>Page 8</h2>
            <p id="silly-software">This is the content for Page 8.</p>
        `,
        page9: `
            <h2>Page 9</h2>
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

    // Initial page load
    const initialPage = window.location.hash.slice(1) || 'home';
    navigateToPage(initialPage);
});
