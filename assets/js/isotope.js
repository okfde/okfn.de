document.addEventListener('DOMContentLoaded', function (event) {

  if (document.querySelector('.js-isotope')) {
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
            filterLinks.forEach(function (v1, i1) {
              v1.classList.remove('active');
            });
            v.classList.add('active');

            var filterVal = v.dataset.filter;
            iso.arrange({ filter: filterVal });
          });
        });
      }
    }
  }
});
