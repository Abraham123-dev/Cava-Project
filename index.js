document.querySelectorAll('.menu-nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const menuNavHeight = document.querySelector('.menu-nav-container').offsetHeight;
      const totalOffset = headerHeight + menuNavHeight;
      window.scrollTo({
        top: targetElement.offsetTop - totalOffset,
        behavior: 'smooth'
      });
    }
  });
});

// Responsive menu toggle functionality
window.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const menuContainer = document.getElementById('menuContainer');
    if (menuIcon && menuContainer) {
        menuIcon.addEventListener('click', function() {
            menuContainer.classList.toggle('active');
        });
    }

  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      // Optionally toggle icon
      const icon = darkModeToggle.querySelector('i');
      if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
      } else {
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
      }
    });
  }
});

document.getElementById('current-year').textContent = new Date().getFullYear();
// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } 
  else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll for menu navigation links
document.querySelectorAll('.menu-nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const menuNavHeight = document.querySelector('.menu-nav-container').offsetHeight;
      const totalOffset = headerHeight + menuNavHeight;
      window.scrollTo({
        top: targetElement.offsetTop - totalOffset,
        behavior: 'smooth'
      });
    }
  });
});