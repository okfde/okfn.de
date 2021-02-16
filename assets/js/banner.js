const BANNER_ID = 'zehn';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('aside.dropbanner');

  const show = localStorage.getItem('hideDropbanner') !== BANNER_ID;
  if (show && element) {
    element.classList.remove('gone');
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