const BANNER_ID = 'zehn';
const TARGET_PAGE = 'anniversary';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('aside.dropbanner');
  if (!element) {
    return
  }
  const onTarget = window.location.pathname.endsWith(`${TARGET_PAGE}/`);
  const show = !onTarget && localStorage.getItem('hideDropbanner') !== BANNER_ID;
  if (show && element) {
    element.classList.remove('gone');
  } else {
    element.remove();
  }

  const hideBtn = document.querySelector('aside.dropbanner button');
  if (hideBtn) {
    hideBtn.addEventListener('click', () => {
      element.classList.add('gone');
      localStorage.setItem('hideDropbanner', BANNER_ID);
      setTimeout(() => element.remove(), 1000);
    });
  }
})