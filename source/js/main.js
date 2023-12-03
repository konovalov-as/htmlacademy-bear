import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {CustomSelect} from './modules/select/custom-select';
import {uploadFile, uploadImageDrop} from './modules/input-file/init-upload';

import {initMobileMenu} from './modules/main-nav.js'; // подключение мобильного меню
import {initMap} from './modules/map.js'; // подключение карты
import {reviewsSlider} from './vendor.js'; // поключение слайдера отзывов
import {initPhoneMask} from './modules/form-validate/phone-mask.js';
import {initAccordions} from './modules/accordion/init-accordion.js';
import {initPlayVideo} from './modules/play-video.js'; // подключение воспроизвести видео

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  mobileVhFix();

  // Modules
  // ---------------------------------


  // для адаптивного JS используейтся matchMedia и addListener
  const breakpoint = window.matchMedia('(max-width:768px)');
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      initMobileMenu();
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    uploadFile();
    uploadImageDrop();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();

    reviewsSlider();
    initPhoneMask();
    initAccordions();
    initMap();
    initPlayVideo();
  });

});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)