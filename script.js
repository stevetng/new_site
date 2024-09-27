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
                <div style='text-align: center;'>
                    <h3 style='color: #4a4a4a; margin-bottom: 0px;'>Program Manager</h3>
                    <p style='font-size: 14px; line-height: 1.4;'>
                        Experienced in Agile methodologies<br>
                        Skilled in stakeholder management<br>
                        Passionate about user-centric design
                    </p>
                    <a href='#' style='color: #0066cc; text-decoration: none;'>Learn more about my PM work</a>
                </div>
            ">PM</span> who loves to <span class="underline" data-popup="
                <div>
                    <h3>Coding Knowledge</h3>
                    <ul>
                        <li>Python: Mainly for <a href='https://colab.research.google.com/drive/1rLh0Tvb6NxC00bFpWTpmH5SAbwOvSI8D?usp=sharing' target='_blank'>Stock Trading</a></li>
                        <li>JavaScript: React, Node.js</li>
                        <li>Ruby: Rails</li>
                        <li>SQL & NoSQL databases</li>
                    </ul>
                    <a href='https://github.com/yourusername' target='_blank'>Check out my GitHub</a>
                </div>
            "
            ">code</span>, an iPhone
            <span class="underline" data-popup="
                <div>
                    <img src='/api/placeholder/200/150' alt='Video equipment' style='width: 100%; height: auto; margin-bottom: 10px;'>
                    <p style='font-size: 14px; line-height: 1.4; margin: 0;'>
                        Experienced in both digital and film videography.<br>
                        Specialties: Documentary, Corporate, Event
                    </p>
                    <a href='#' style='color: #0066cc; text-decoration: none;'>View my videography portfolio</a>
                </div>
            ">videographer</span>, and a <span class="underline" data-popup="
                <div>
                    <h3 style='color: #4a4a4a; margin-bottom: 10px;'>Writing Portfolio</h3>
                    <p style='font-size: 14px; line-height: 1.4;'>
                        Published author of short stories and technical articles.<br>
                        Topics include tech trends, creative fiction, and product reviews.
                    </p>
                    <ul style='padding-left: 20px; margin: 10px 0;'>
                        <li>Featured in TechCrunch</li>
                        <li>Regular contributor to Medium</li>
                        <li>2x winner of local short story contest</li>
                    </ul>
                    <a href='#' style='color: #0066cc; text-decoration: none;'>Read my latest articles</a>
                </div>
            ">writer</span> 
            who never enjoyed English class.</p>
            <p id="silly-software">I like making <a href="https://www.techbropuritytest.com/" target="_blank">silly software</a> and <a href="#" target="_blank">marketing videos</a> for startups.</p>
            <p id="home-contact-me"><a href="#">Contact me</a> for front-end/marketing work on a contract basis.</p>
            <div class="location">Currently: Boston, MA</div>
        `,
        about: `
            <h2>About Me</h2>
            <p id="silly-software">This is the About page content.</p>
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
