gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Global Variables
let loadingBar = null;
let preloaderTl = null;
// Utility Functions
const utils = {
    isElementVisible: (el) => {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return (
            style.display !== 'none' &&
            style.visibility !== 'hidden' &&
            rect.width > 50 &&
            rect.height > 50
        );
    },
    
    debounce: (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }
};

// Preloader Animation
function initPreloader() {
    try {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            gsap.set(navbar, { opacity: 0, visibility: 'hidden' });
        }

        loadingBar = document.createElement('div');
        Object.assign(loadingBar.style, {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '0%',
            height: '3px',
            backgroundColor: '#3498db',
            zIndex: 9999,
            transition: 'width 0.5s ease, opacity 0.3s ease'
        });
        document.body.appendChild(loadingBar);

        const preloaderLines = document.querySelectorAll('.line-scale-pulse-out > div');
        if (preloaderLines.length) {
            preloaderTl = gsap.timeline({ repeat: -1, yoyo: true });
            preloaderLines.forEach((line, i) => {
                preloaderTl.to(line, {
                    scaleY: 0.4,
                    opacity: 0.7,
                    duration: 0.45,
                    ease: "power1.inOut",
                    delay: i * 0.1
                }, 0);
            });
        }

        const loadingProgress = { width: 0 };
        gsap.to(loadingProgress, {
            width: 100,
            duration: 3,
            ease: "power1.inOut",
            onUpdate: () => {
                loadingBar.style.width = `${loadingProgress.width}%`;
            },
            onComplete: handlePageLoad
        });
    } catch (error) {
        console.error('Preloader initialization failed:', error);
    }
}

// Handle Page Load
function handlePageLoad() {
    const loader = document.getElementById('loader');
    const preloader = document.getElementById('preloader');
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');

    if (navbar) {
        gsap.to(navbar, { opacity: 1, visibility: 'visible', duration: 0.5, delay: 1 });
    }

    if (heroSection) {
        gsap.to(heroSection, { opacity: 1, visibility: 'visible', duration: 0.5, delay: 1 });
    }
    
    if (!loader || !preloader) return;

    gsap.timeline({
        onComplete: initScrollAnimations
    })
    .to(loader, { opacity: 0, duration: 0.5, display: 'none' })
    .to(preloader, { opacity: 0, duration: 0.5, delay: 0.3, display: 'none' })
    .to(loadingBar, { opacity: 0, duration: 0.3 }, "-=0.3")
    .add(() => {
        if (loadingBar && loadingBar.parentNode) {
            loadingBar.parentNode.removeChild(loadingBar);
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animatableSelectors = [
        '.feature-card', '.about-text', '.about-image', '.features-grid',
        '.testimonial-section', '.stats-section'
    ];

    const elements = new Set();
    animatableSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            if (utils.isElementVisible(el) && 
                !el.classList.contains('no-animate') && 
                !el.dataset.animated) {
                elements.add(el);
            }
        });
    });

    elements.forEach(el => {
        ScrollTrigger.create({
            trigger: el,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                el.dataset.animated = 'true';
                gsap.fromTo(el, {
                    y: 50,
                    opacity: 0,
                    scale: 0.95,
                    rotation: 10,
                    skewX: 10,
                }, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    rotation: 0,
                    skewX: 0,
                    ease: 'power2.out',
                    stagger: 0.1,
                });
            }
        });
    });

    // Navbar scroll effect
    ScrollTrigger.create({
        trigger: 'body',
        start: 'top -100px',
        toggleClass: { targets: '.navbar', className: 'navbar-scrolled' },
        scrub: true,
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('.smoothscroll').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    scrollTo: { y: target, offsetY: 50 },
                    duration: 1,
                    ease: 'power1.inOut'
                });
            }
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isActive = toggle.classList.toggle('is-active');
        gsap.to(menu, {
            display: isActive ? 'block' : 'none',
            opacity: isActive ? 1 : 0,
            duration: 0.3,
            ease: 'power1.inOut'
        });
    });
}

function clearOnReload() {
    window.addEventListener('beforeunload', function() {
        // Remove dynamically created elements, like the loading bar or preloader
        const loadingBar = document.querySelector('.loading-bar');
        const preloader = document.querySelector('#preloader');
        const loader = document.querySelector('#loader');
        const navbar = document.querySelector('.navbar');
        
        if (loadingBar) {
            loadingBar.remove();  
        }
        
        if (preloader) {
            preloader.remove();  
        }

        if (loader) {
            loader.remove();  
        }

        if (navbar) {
            navbar.style.visibility = 'hidden';
            navbar.style.opacity = 0;
        }

    });
}


// Initialize All Functions
function init() {
    initPreloader();
    initSmoothScroll();
    initMobileMenu();
    clearOnReload();
    
    // Debounced resize handler
    window.addEventListener('resize', utils.debounce(() => {
        ScrollTrigger.refresh();
    }, 250));
}

try {
    init();
} catch (error) {
    console.error('Animation initialization failed:', error);
}
