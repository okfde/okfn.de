document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('body').classList.remove('no-js');
  document.querySelector('body').classList.add('js')

  var hamburger = document.querySelector('#js-topnav-toggle');
  var menu = document.querySelector('#js-topnav-menu');
  if (hamburger && menu) {
    menu.classList.add('is-hidden');
    hamburger.addEventListener('click', function (event) {
      menu.classList.toggle('is-hidden');
    });
  }

  // Verein Jahresbericht Tab nav
  tabnav('.js-report', '#js-report-nav a');
  // Finanzierung einnahmen
  tabnav('.js-incomes', '#js-incomes-nav a');
});


function tabnav (bodyIdent, navIdent) {
  var bodyItemList = document.querySelectorAll(bodyIdent);
  var navLinks = document.querySelectorAll(navIdent);

  if (bodyItemList && navLinks) {
    bodyItemList.forEach(function (v, k) {
      if (k !== 0) {
        v.classList.add('is-hidden');
      }
    });

    navLinks.forEach(function (v, k) {
      if (k === 0) {
        v.classList.add('active');
      }

      v.addEventListener('click', function (ev) {
        ev.preventDefault();

        bodyItemList.forEach(function (v, k) {
          v.classList.add('is-hidden');
        });
        document.querySelector(navIdent +".active").classList.remove('active');
        ev.target.classList.add('active');
        var identifyer = ev.target.attributes.href.value;
        document.querySelector(identifyer).classList.remove('is-hidden');
      });
    });
  }
}
