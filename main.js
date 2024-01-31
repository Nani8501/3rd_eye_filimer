document.addEventListener('DOMContentLoaded', function () {
  initThemeToggle();
  initAOS();
  initScrollAnimations();
  initOfflineStatus();
  initNavToggle();
  initPreloader();
});

function initThemeToggle() {
  const switchToggle = document.querySelector('#switch-toggle');
  let isDarkmode = localStorage.getItem('isDarkmode') === 'true';

  const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>`;

  const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>`;

  function toggleTheme() {
    isDarkmode = !isDarkmode;
    localStorage.setItem('isDarkmode', isDarkmode);
    switchTheme();
  }

  function switchTheme() {
    document.body.classList.toggle('dark-mode', isDarkmode);
    switchToggle.innerHTML = isDarkmode ? darkIcon : lightIcon;
  }

  switchTheme();

  switchToggle.addEventListener('click', toggleTheme);
}

function initAOS() {
  AOS.init({
    offset: 100,
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });
}

function initScrollAnimations() {
  window.addEventListener('scroll', handleScrollAnimations);

  function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animated');
    animatedElements.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('active');
      }
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}

function initOfflineStatus() {
  const offlineImageContainer = document.getElementById('customOfflineImage');

  function updateOfflineStatus() {
    offlineImageContainer.style.display = navigator.onLine ? 'none' : 'block';
  }

  updateOfflineStatus();

  window.addEventListener('online', updateOfflineStatus);
  window.addEventListener('offline', updateOfflineStatus);
}

function initNavToggle() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  function toggleNav() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  }

  hamburger.addEventListener('click', toggleNav);
}

function initPreloader() {
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });
}