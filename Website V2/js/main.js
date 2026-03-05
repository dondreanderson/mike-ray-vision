/**
 * Premier Design & Media - Main JavaScript
 * Handles all interactive features and animations
 */

// ==========================================
// MOBILE NAVIGATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-wrapper')) {
            if (navMenu) navMenu.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
        }
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
        });
    });

    // ==========================================
    // PORTFOLIO FILTERING
    // ==========================================

    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        const category = item.getAttribute('data-category');
                        if (category === filterValue) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, 10);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(20px)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }

    // ==========================================
    // CONTACT FORM HANDLING
    // ==========================================

    const contactForm = document.getElementById('contactForm');
    const inquiryType = document.getElementById('inquiryType');
    const serviceTypeGroup = document.getElementById('serviceTypeGroup');
    const positionGroup = document.getElementById('positionGroup');
    const successMessage = document.getElementById('successMessage');

    // Show/hide conditional fields based on inquiry type
    if (inquiryType) {
        inquiryType.addEventListener('change', function() {
            const value = this.value;
            
            // Hide all conditional groups first
            if (serviceTypeGroup) serviceTypeGroup.style.display = 'none';
            if (positionGroup) positionGroup.style.display = 'none';

            // Show relevant group
            if (value === 'project' && serviceTypeGroup) {
                serviceTypeGroup.style.display = 'block';
            } else if (value === 'career' && positionGroup) {
                positionGroup.style.display = 'block';
            }
        });
    }

    // Handle form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            // Log form data (in production, this would be sent to a server)
            console.log('Form submitted with data:', data);

            // Show success message
            if (successMessage) {
                successMessage.classList.add('show');
            }

            // Reset form
            this.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                if (successMessage) {
                    successMessage.classList.remove('show');
                }
            }, 5000);

            // Hide conditional groups
            if (serviceTypeGroup) serviceTypeGroup.style.display = 'none';
            if (positionGroup) positionGroup.style.display = 'none';
        });
    }

    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ==========================================
    // SCROLL ANIMATIONS (INTERSECTION OBSERVER)
    // ==========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll(
        '.service-card, .feature-item, .testimonial-card, ' +
        '.value-card, .team-member, .culture-card, ' +
        '.benefit-card, .job-card, .portfolio-item'
    );

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // ==========================================
    // NAVBAR BACKGROUND ON SCROLL
    // ==========================================

    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
        }

        lastScroll = currentScroll;
    });

    // ==========================================
    // VIDEO PLAYBACK HANDLING
    // ==========================================

    const heroVideo = document.querySelector('.hero-video-bg');
    
    if (heroVideo) {
        // Ensure video plays on load
        heroVideo.play().catch(error => {
            console.log('Video autoplay prevented:', error);
        });

        // Handle video loading
        heroVideo.addEventListener('loadeddata', function() {
            this.style.opacity = '1';
        });

        // Pause video when page is not visible (performance optimization)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden && heroVideo) {
                heroVideo.pause();
            } else if (heroVideo) {
                heroVideo.play().catch(error => {
                    console.log('Video play prevented:', error);
                });
            }
        });
    }

    // ==========================================
    // FORM VALIDATION
    // ==========================================

    const formInputs = document.querySelectorAll('input[required], textarea[required], select[required]');
    
    formInputs.forEach(input => {
        input.addEventListener('invalid', function(e) {
            e.preventDefault();
            this.classList.add('error');
        });

        input.addEventListener('input', function() {
            if (this.validity.valid) {
                this.classList.remove('error');
            }
        });
    });

    // ==========================================
    // LAZY LOADING OPTIMIZATION
    // ==========================================

    // Add loading attribute to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });

    // ==========================================
    // PERFORMANCE MONITORING
    // ==========================================

    // Log page load time
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime + 'ms');
    });

    // ==========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ==========================================

    // Add keyboard navigation for dropdown menus
    const dropdownToggles = document.querySelectorAll('.nav-dropdown > a');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const dropdown = this.nextElementSibling;
                if (dropdown) {
                    dropdown.style.opacity = dropdown.style.opacity === '1' ? '0' : '1';
                    dropdown.style.visibility = dropdown.style.visibility === 'visible' ? 'hidden' : 'visible';
                }
            }
        });
    });

    // ==========================================
    // DYNAMIC COPYRIGHT YEAR
    // ==========================================

    const copyrightYear = document.querySelector('.footer-bottom p');
    if (copyrightYear) {
        const currentYear = new Date().getFullYear();
        copyrightYear.innerHTML = copyrightYear.innerHTML.replace('2024', currentYear);
    }
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for scroll events
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// ERROR HANDLING
// ==========================================

window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// ==========================================
// CONSOLE WELCOME MESSAGE
// ==========================================

console.log(
    '%cPremier Design & Media',
    'font-size: 24px; font-weight: bold; color: #E31E24;'
);
console.log(
    '%cWebsite by Premier Design & Media | premierdesignmedia.com',
    'font-size: 12px; color: #546E7A;'
);