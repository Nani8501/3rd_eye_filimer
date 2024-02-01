document.addEventListener('DOMContentLoaded', function () {
  initThemeToggle();
  initAOS();
  initScrollAnimations();
  initOfflineStatus();
  initNavToggle();
  initPreloader();
});

function initThemeToggle() {
  const switchToggle = document.querySelector('#theme-switch');
  let isDarkmode = localStorage.getItem('isDarkmode') === 'false';

  function toggleTheme() {
    isDarkmode = !isDarkmode;
    localStorage.setItem('isDarkmode', isDarkmode);
    switchTheme();
  }

  function switchTheme() {
    document.body.classList.toggle('dark-mode', isDarkmode);
    switchToggle.checked = isDarkmode;
  }

  switchTheme();

  switchToggle.addEventListener('change', toggleTheme);
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
