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
  var reports = document.querySelectorAll('.js-report');
  var reportLinks = document.querySelectorAll('#js-report-nav a');

  if (reports && reportLinks) {
    reports.forEach(function (v, k) {
      if (k !== 0) {
        v.classList.add('is-hidden');
      }
    });

    reportLinks.forEach(function (v, k) {
      if (k === 0) {
        v.classList.add('active');
      }

      v.addEventListener('click', function (ev) {
        ev.preventDefault();

        reports.forEach(function (v, k) {
          v.classList.add('is-hidden');
        });
        document.querySelector('#js-report-nav a.active').classList.remove('active');
        ev.target.classList.add('active');
        var year = ev.target.attributes.href.value;
        document.querySelector(year).classList.remove('is-hidden');
      });
    });
  }
});
