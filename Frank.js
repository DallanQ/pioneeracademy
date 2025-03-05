// // Select elements
//     const navbar = document.getElementById('navbar');
//     const navLinks = document.getElementById('nav-links');
//     const menuIcon = document.getElementById('menu-icon');
//     const links = navLinks.querySelectorAll('a[data-target]');

//     // Toggle navbar background based on scroll position
//     window.addEventListener('scroll', function() {
//       if (window.scrollY > 500) {
//         navbar.classList.add('white-nav');
//       } else {
//         navbar.classList.remove('white-nav');
//       }
//     });

//     // Toggle mobile menu visibility when menu icon is clicked
//     menuIcon.addEventListener('click', function() {
//       navLinks.classList.toggle('hide-mobile-menu');
//     });

//     // Smooth scrolling functionality for nav links
//     links.forEach(link => {
//       link.addEventListener('click', function(event) {
//         event.preventDefault();
//         const targetId = this.getAttribute('data-target');
//         const offset = parseInt(this.getAttribute('data-offset'), 10) || 0;
//         const targetElement = document.getElementById(targetId);
//         if (targetElement) {
//           // Calculate the scroll target position with the given offset
//           const targetPosition = targetElement.offsetTop + offset;
//           window.scrollTo({
//             top: targetPosition,
//             behavior: 'smooth'
//           });
//         }
//       });
//     });

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('nav-menu');
  const menuIcon = document.getElementById('menu-icon');

  // Sticky Navbar
  window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
          navbar.classList.add('white-nav');
      } else {
          navbar.classList.remove('white-nav');
      }
  });

  // Mobile Menu Toggle
  menuIcon.addEventListener('click', function() {
      if (navMenu.classList.contains('hide-mobile-menu')) {
          navMenu.classList.remove('hide-mobile-menu');
          navMenu.style.right = '0';
      } else {
          navMenu.classList.add('hide-mobile-menu');
          navMenu.style.right = '-380px';
      }
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  });
});


document.querySelector('.hero-cta').addEventListener('click', function() {
    console.log('Get Started button clicked!');
    // Insert any additional logic here, for example scrolling to a specific section.
    });

// Grab references to the container and buttons
const trackRecordContainer = document.getElementById('trackRecordContainer');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

// Scroll left by 250px
scrollLeftBtn.addEventListener('click', () => {
  trackRecordContainer.scrollBy({
    left: -250,
    behavior: 'smooth',
  });
});

// Scroll right by 250px
scrollRightBtn.addEventListener('click', () => {
  trackRecordContainer.scrollBy({
    left: 250,
    behavior: 'smooth',
  });
});

// SLIDER SECTION
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
  // Loop around if out of bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Manual navigation
prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});
nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// Auto-slide every 5 seconds
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);