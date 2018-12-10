function isotopefilter () {
  var elem = document.querySelector('.l__projects__list');
  if (elem) {
    var iso = new Isotope( elem, {
      itemSelector: '.l__projects__item'
    });

    var filterLinks = document.querySelectorAll('.js-isotope-filter a');
    if (filterLinks) {
      filterLinks.forEach(function (v, i) {
        v.addEventListener('click', function (ev) {
          ev.preventDefault();
          var last_active = document.querySelector('.js-isotope-filter a.active');
          if (last_active) {
            if (last_active.innerHTML !== v.innerHTML) {
              last_active.classList.remove('active');
            }

          }
          v.classList.toggle('active');

          if (v.classList.contains('active')) {
            var filterVal = v.dataset.filter;
          } else {
            var filterVal = '';
          }

          iso.arrange({ filter: filterVal });
        });
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  if (document.querySelector('.js-isotope')) {
    isotopefilter();
  }
});
