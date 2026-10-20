// Navigation Menu Component
// To add a new year to the website, add the year to the NAV_YEARS array below.
const NAV_YEARS = [
  2018,
  2019,
  2020,
  2021,
  2022,
  2023,
  2024,
  2025,
  2026
];

(function() {
  function getContext() {
    // Detect whether we are at root (index.html) or in a year subdirectory (e.g. 2026/index.html)
    const navScript = document.querySelector('script[src*="nav.js"]');
    const src = navScript ? navScript.getAttribute('src') : '';
    let isSubdir = src.startsWith('../');

    const titleText = (document.title || '').trim();
    const lastFour = titleText.substring(titleText.length - 4);
    let currentYear = 'home';

    const pathMatch = window.location.pathname.match(/\/(\d{4})(\/|index\.html|$)/);
    if (pathMatch && NAV_YEARS.includes(Number(pathMatch[1]))) {
      currentYear = pathMatch[1];
      isSubdir = true;
    } else if (/^\d{4}$/.test(lastFour) && NAV_YEARS.includes(Number(lastFour))) {
      currentYear = lastFour;
      isSubdir = true;
    }

    const basePath = isSubdir ? '../' : '';
    return { isSubdir, basePath, currentYear };
  }

  function renderTopNav() {
    const container = document.querySelector('.container-topnav');
    if (!container) return;

    const { isSubdir, basePath, currentYear } = getContext();
    const homeHref = isSubdir ? '..' : '.';

    // Build desktop visible menu items
    let visibleItemsHtml = `\n          <a href="${homeHref}" class="visible-menu-item${currentYear === 'home' ? ' current-page' : ''}">Home</a>`;
    // Build mobile dropdown menu items
    let dropdownItemsHtml = `\n        <a href="${homeHref}" class="topnav__dropdown-menu-item">Home</a>`;

    NAV_YEARS.forEach(function(year) {
      const yearStr = String(year);
      const isCurrent = (yearStr === currentYear);
      const yearHref = isCurrent ? '.' : `${basePath}${year}`;
      const visibleClass = `visible-menu-item${isCurrent ? ' current-page' : ''}`;

      visibleItemsHtml += `\n          <a href="${yearHref}" class="${visibleClass}">${year}</a>`;
      dropdownItemsHtml += `\n        <a href="${yearHref}" class="topnav__dropdown-menu-item">${year}</a>`;
    });

    visibleItemsHtml += `\n          <a href="mailto:atsp@saic.edu" target="_blank" class="visible-menu-item">Contact</a>\n        `;
    dropdownItemsHtml += `\n        <a href="mailto:atsp@saic.edu" target="_blank" class="topnav__dropdown-menu-item">Contact</a>\n      `;

    const html = `
      <header class="topnav">
        <div class="topnav__left">
          <a href="${homeHref}" class="topnav__left-logos-link">
            <img src="${basePath}images/logos/atsp-logo-white.png" alt="SAIC Art & Technology / Sound Practices Logo"
              class="topnav__left-saic-logo">
            <div class="topnav__left-spinner">+</div>
            <img src="${basePath}images/logos/ars-logo-white.png" alt="Ars Electronica Logo" class="topnav__left-ars-logo">
          </a>
        </div>
        <div class="topnav__right">
          <button type="button" value="main menu" class="topnav__right-hamburger">
            <span class="hamburger-text">Main Menu</span>
            <span class="topnav__right-hamburger-patty"></span>
          </button>
          <nav class="topnav__right-visible-menu">${visibleItemsHtml}</nav>
        </div>
      </header>
      <div class="topnav__dropdown-menu-container">
        <nav class="topnav__dropdown-menu">${dropdownItemsHtml}</nav>
      </div>`;

    container.innerHTML = html;
  }

  // Render immediately if container is already available, otherwise on DOMContentLoaded
  if (document.querySelector('.container-topnav')) {
    renderTopNav();
  } else {
    document.addEventListener('DOMContentLoaded', renderTopNav);
  }

  // Event handlers for mobile hamburger menu toggle
  if (window.jQuery) {
    $(document).on('click', '.topnav__right-hamburger', function() {
      $('.topnav__dropdown-menu-container').slideToggle(400);
    });

    $(window).on('resize', function() {
      if ($(window).width() > 950 && $('.topnav__dropdown-menu-container').css('display') === 'block') {
        $('.topnav__dropdown-menu-container').slideUp(200);
      }
    });
  } else {
    document.addEventListener('click', function(e) {
      const btn = e.target.closest('.topnav__right-hamburger');
      if (btn) {
        const menu = document.querySelector('.topnav__dropdown-menu-container');
        if (menu) {
          menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        }
      }
    });
  }
})();
