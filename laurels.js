document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  // Ensure mobile menu toggle works
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('is-active');
    });

    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('is-active');
      });
    });
  } else {
    console.error('Mobile menu elements not found');
  }
});

// Preloader
// const clPreloader = () => {
//   document.documentElement.classList.add('cl-preload');

//   window.addEventListener('load', () => {
//     document.getElementById('loader').fadeOut('slow', () => {
//       document.getElementById('preloader').delay(300).fadeOut('slow');
//     });

//     document.documentElement.classList.remove('cl-preload');
//     document.documentElement.classList.add('cl-loaded');
//   });
// };

// // Menu on Scrolldown
// const clMenuOnScrolldown = () => {
//   const menuTrigger = document.querySelector('.header-menu-toggle');

//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 150) {
//       menuTrigger.classList.add('opaque');
//     } else {
//       menuTrigger.classList.remove('opaque');
//     }
//   });
// };

// // Stat Counter
// const clStatCount = () => {
//   const statSection = document.querySelector('.about-stats');
//   const stats = document.querySelectorAll('.stats__count');

//   if (statSection) {
//     const waypoint = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           stats.forEach(stat => {
//             const counter = { Counter: 0 };
//             const target = parseInt(stat.textContent, 10);
//             const duration = 4000;
//             const easing = 'swing';
//             const step = curValue => {
//               stat.textContent = Math.ceil(curValue);
//             };

//             // Animation logic
//             let startTime;
//             const animate = (timestamp) => {
//               if (!startTime) startTime = timestamp;
//               const progress = Math.min((timestamp - startTime) / duration, 1);
//               const currentValue = counter.Counter + progress * (target - counter.Counter);
//               step(currentValue);

//               if (progress < 1) {
//                 requestAnimationFrame(animate);
//               }
//             };

//             requestAnimationFrame(animate);
//           });

//           waypoint.unobserve(statSection); // Trigger once only
//         }
//       });
//     });

//     waypoint.observe(statSection);
//   }
// };

// // Smooth Scrolling
// const clSmoothScroll = () => {
//   document.querySelectorAll('.smoothscroll').forEach(anchor => {
//     anchor.addEventListener('click', (e) => {
//       e.preventDefault();
//       const target = document.querySelector(anchor.getAttribute('href'));

//       window.scrollTo({
//         top: target.offsetTop,
//         behavior: 'smooth'
//       });

//       // Check if menu is open
//       if (document.body.classList.contains('menu-is-open')) {
//         document.querySelector('.header-menu-toggle').click();
//       }

//       window.location.hash = target.id;
//     });
//   });
// };

// // Animate On Scroll (AOS)
// const clAOS = () => {
//   AOS.init({
//     offset: 200,
//     duration: 600,
//     easing: 'ease-in-sine',
//     delay: 300,
//     once: true,
//     disable: 'mobile',
//   });
// };

// // Back to Top
// const clBackToTop = () => {
//   const goTopButton = document.querySelector('.go-top');
//   const pxShow = 500;
//   const fadeInTime = 400;
//   const fadeOutTime = 400;

//   window.addEventListener('scroll', () => {
//     if (window.scrollY >= pxShow) {
//       goTopButton.style.display = 'block';
//       goTopButton.style.opacity = 1;
//       goTopButton.style.transition = `opacity ${fadeInTime}ms`;
//     } else {
//       goTopButton.style.display = 'none';
//       goTopButton.style.opacity = 0;
//       goTopButton.style.transition = `opacity ${fadeOutTime}ms`;
//     }
//   });

//   goTopButton.addEventListener('click', () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   });
// };

// // Initialize
// (() => {
//   clPreloader();
//   clMenuOnScrolldown();
//   clStatCount();
//   clSmoothScroll();
//   clAOS();
//   clBackToTop();
// })();
