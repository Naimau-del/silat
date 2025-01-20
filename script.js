 // Disable right-click on videos
 document.querySelectorAll('video').forEach(video => {
    video.addEventListener('contextmenu', event => event.preventDefault());
});
document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar-container');
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
            const dropdown = document.querySelector('.dropdown');
            const dropbtn = document.getElementById('eventsBtn');
            const menuIcon = document.getElementById('menu-icon');
            const navLinks = document.getElementById('nav-links');

            dropbtn.addEventListener('click', function(event) {
                event.preventDefault();
                dropdown.classList.toggle('open');
            });

            document.addEventListener('click', function(event) {
                if (!dropdown.contains(event.target) && event.target !== dropbtn) {
                    dropdown.classList.remove('open');
                }
            });

            menuIcon.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                menuIcon.classList.toggle('rotate'); // Add rotation class
            });
        });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            accordionItem.classList.toggle('open');
        });
    });

    // Animation for overlay text
    const overlays = document.querySelectorAll('.overlay');
    let currentOverlay = 0;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        overlays.forEach((overlay, index) => {
            if (index === currentOverlay && scrollPosition > index * window.innerHeight) {
                overlay.classList.add('show');
                overlay.classList.remove('hide');
            } else if (index < currentOverlay) {
                overlay.classList.add('hide');
                overlay.classList.remove('show');
            } else {
                overlay.classList.remove('show');
                overlay.classList.remove('hide');
            }
        });

        if (scrollPosition > (currentOverlay + 1) * window.innerHeight) {
            currentOverlay++;
        } else if (scrollPosition < currentOverlay * window.innerHeight) {
            currentOverlay--;
        }
    });

    // Adjust video position
    const videoContainer = document.querySelector('.video-container');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        videoContainer.style.top = `${scrollPosition}px`;
    });
    // Handle content switching
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');
    const animation = document.querySelector('.sub-navbar .animation');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            const target = this.getAttribute('data-target');

            contentSections.forEach(section => {
                if (section.id === target) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});