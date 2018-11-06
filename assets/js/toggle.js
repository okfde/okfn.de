document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('body').classList.remove('no-js');
  document.querySelector('body').classList.add('js')

  var hamburger = document.querySelector('#js-topnav-toggle');
  var menu = document.querySelector('#js-topnav-menu');
  if (hamburger && menu) {
    menu.classList.add('is-hidden');
    hamburger.addEventListener('click', function (event) {
      //console.log('click');
      menu.classList.toggle('is-hidden');
    });
  }
});
