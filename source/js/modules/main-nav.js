// открытие-закрытие мобильного меню
export const initMobileMenu = function () {
  const body = document.querySelector('body');
  const mainNavToggle = document.querySelector('[data-nav-toggle]');
  const mainNav = document.querySelector('[data-main-nav]');

  mainNavToggle.addEventListener('click', () => {
    mainNavToggle.classList.toggle('is-active');
    mainNav.classList.toggle('is-active');
    body.classList.toggle('scroll-lock');
  });
};
