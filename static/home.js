document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('header');
    const navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > navbarHeight * 2) { // Scroll Down
            navbar.classList.remove('nav-up');
            navbar.classList.add('nav-down');
        } else { // Scroll Up
            if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
                navbar.classList.remove('nav-down');
                navbar.classList.add('nav-up');
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }, false);


    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
            const isExpanded = navUl.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            menuToggle.innerHTML = isExpanded ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // --- Typewriter Effect for Adjectives ---
    const adjectiveElement = document.getElementById('typewriter-adjectives');
    if (adjectiveElement) {
        const adjectives = ["fun 😄", "interactive 👍", "accessible 🖼️", "creative 💡", "visual 🤩"];
        let wordIndex = 0;
        let charIndex = 0;
        let currentAdjective = "";
        let isDeleting = false;

        function typeAdjectives() {
            currentAdjective = adjectives[wordIndex];
            let typeSpeed = isDeleting ? 60 : 120;

            adjectiveElement.textContent = currentAdjective.substring(0, charIndex);
            
            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            if (!isDeleting && charIndex === currentAdjective.length + 1) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end of word
            } else if (isDeleting && charIndex === -1) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % adjectives.length;
                typeSpeed = 500; // Pause before typing next word
            }
            setTimeout(typeAdjectives, typeSpeed);
        }
        setTimeout(typeAdjectives, 500); // Initial delay
    }

    // --- Scroll Animations (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: unobserve after animation
                    // observerInstance.unobserve(entry.target);
                } else {
                    // Optional: remove class if you want animation to re-trigger
                    // entry.target.classList.remove('is-visible');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible (adjust as needed)
        });
        animatedElements.forEach(el => observer.observe(el));
    }

    // --- Active Nav Link Highlight based on Scroll ---



    // Make sure these are accessible in the scope of setActiveNavLink
// const sections = document.querySelectorAll('main section[id]'); // Query for sections ON THE CURRENT PAGE
// const navLinks = document.querySelectorAll('nav ul li a');
// const header = document.querySelector('header');
// const navbarHeight = header ? header.offsetHeight : 0;

function setActiveNavLink() {
    // Query for elements on the current page each time function is called for accuracy
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header'); // Assuming header is always present
    const navbarHeight = header ? header.offsetHeight : 0;

    const currentPath = window.location.pathname.split("/").pop(); // Gets 'tutorial.html', 'index.html', etc.
                                                               // If at root (e.g. 127.0.0.1:5000/), currentPath will be ""

    let activeLinkSetByPage = false;

    // 1. Prioritize setting active link based on the current HTML page
    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove from all first
        const linkHref = link.getAttribute('href');
        const linkPath = linkHref.split("/").pop();

        // Check for direct match or if current path is root and link is to index/home
        if (linkPath === currentPath || (currentPath === '' && (linkPath === 'index.html' || linkPath === 'home.html'))) {
            link.classList.add('active');
            activeLinkSetByPage = true;
        }
    });


    // 2. If an active link was set by page, and the page is NOT index.html (or your main scroll-spy page), stop.
    //    This prevents scroll logic on, say, tutorial.html from overriding the "Tutorial" active link.
    //    Assuming 'index.html' or 'home.html' (if root path) is your main page with scrollable #sections.
    const mainScrollSpyPageNames = ['index.html', 'home.html'];
    if (activeLinkSetByPage && !mainScrollSpyPageNames.includes(currentPath) && currentPath !== '') {
        return;
    }

    // 3. If on a page designed for scroll-spying (like index.html) OR if no link was activated by page (e.g. on index.html with a #hash in URL)
    //    Then, apply scroll-based logic.
    if (sections.length > 0 && (mainScrollSpyPageNames.includes(currentPath) || currentPath === '')) {
        let currentSectionIdFromScroll = '';
        const scrollPosition = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 50; // Buffer
            if (scrollPosition >= sectionTop) {
                currentSectionIdFromScroll = section.getAttribute('id');
            }
        });

        if (currentSectionIdFromScroll) {
            // If a section is identified by scroll, make its corresponding nav link active
            // This might override the page-based one if it's more specific (e.g. index.html#why-emojilang)
            let sectionSpecificLinkActivated = false;
            navLinks.forEach(link => {
                link.classList.remove('active'); // Clear all again for scroll specificity
                const href = link.getAttribute('href');
                if (href.includes('#') && href.substring(href.lastIndexOf('#') + 1) === currentSectionIdFromScroll) {
                    link.classList.add('active');
                    sectionSpecificLinkActivated = true;
                }
            });
            // If after checking #hash links, none were activated but we are on a scroll page,
            // and a page-level link (like index.html) was previously set active, keep it.
            // This handles index.html when scrolled, but no specific #section matches an #anchor in nav
            if(!sectionSpecificLinkActivated && activeLinkSetByPage && (mainScrollSpyPageNames.includes(currentPath) || currentPath === '')) {
                const pageLink = document.querySelector(`nav ul li a[href$="${currentPath}"]`) || document.querySelector('nav ul li a[href="index.html"]');
                 if (pageLink) pageLink.classList.add('active');
            }

        } else if (scrollPosition < (sections[0]?.offsetTop - navbarHeight - 50 || 200) && (mainScrollSpyPageNames.includes(currentPath) || currentPath === '')) {
            // If scrolled to the very top of a main scroll-spy page
            navLinks.forEach(link => link.classList.remove('active'));
            // Prioritize index.html for "Home", or home.html if index.html isn't there
            const homeLink = document.querySelector('nav ul li a[href="index.html"]') ||
                             document.querySelector('nav ul li a[href="home.html"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    } else if (!activeLinkSetByPage && (mainScrollSpyPageNames.includes(currentPath) || currentPath === '')) {
        // Fallback if on a main page, no sections found/matched, and no page link was set
        // (e.g. URL is just 'mysite.com/' and index.html link is 'index.html')
        navLinks.forEach(link => link.classList.remove('active'));
        const homeLink = document.querySelector('nav ul li a[href="index.html"]') ||
                         document.querySelector('nav ul li a[href="home.html"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }
}

// Ensure these listeners call the corrected function
window.addEventListener('scroll', setActiveNavLink);
window.addEventListener('load', setActiveNavLink);

    // --- Dynamic Background Emojis for Hero ---
    const heroBg = document.querySelector('.hero-background-emojis');
    if (heroBg) {
        const bgEmojis = ['💻', '💡', '🚀', '✨', '😊', '🤔', '🎉', '👍', '🌟', '💯', '🧩', '🎨'];
        const numEmojis = 30; // Adjust for density

        for (let i = 0; i < numEmojis; i++) {
            let emojiSpan = document.createElement('span');
            emojiSpan.classList.add('emoji-particle');
            emojiSpan.textContent = bgEmojis[Math.floor(Math.random() * bgEmojis.length)];
            emojiSpan.style.left = `${Math.random() * 100}%`;
            emojiSpan.style.top = `${Math.random() * 100}%`; // Start at random vertical positions too
            emojiSpan.style.animationDelay = `${Math.random() * 15}s`; // Stagger start times
            emojiSpan.style.fontSize = `${0.8 + Math.random() * 1.5}rem`; // Vary sizes
            heroBg.appendChild(emojiSpan);
        }
    }

    // --- Set current year in footer ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});