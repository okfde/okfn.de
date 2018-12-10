function isotopefilter () {
  var elem = document.querySelector('.l__projects__list');
  if (elem) {
    var iso = new Isotope( elem, {
      itemSelector: '.l__projects__item'
    });
    var defaultFilter = '.tile';
    var filterLinks = document.querySelectorAll('.js-isotope-filter a');
    if (filterLinks) {
      filterLinks.forEach(function (v, i) {
        on_filter_elem_click(v, defaultFilter, iso);
      });
      filterLinks[0].click();
    }
  }
}

function on_filter_elem_click (current, defaultValue, isoGrid) {
  current.addEventListener('click', function (ev) {
    ev.preventDefault();
    deactivate_last_filter_elem(current);
    current.classList.toggle('active');
    var filterVal = decide_new_filter_value(current, defaultValue);
    decide_hide_other_projects(filterVal, defaultValue);
    isoGrid.arrange({ filter: filterVal });
  });
}

function decide_hide_other_projects (currentFilter, defaultValue) {
  var otherList = document.getElementById('js-other-projects-list');
  if (currentFilter === defaultValue) {
    if (otherList) { otherList.classList.remove('is-hidden'); }
  } else {
    if (otherList) { otherList.classList.add('is-hidden'); }
  }
}

function decide_new_filter_value (current, defaultValue) {
  var filterVal;
  if (current.classList.contains('active')) {
    filterVal = current.dataset.filter;
  } else {
    filterVal = defaultValue;
  }
  return filterVal;
}

function deactivate_last_filter_elem (current) {
  var last_active = document.querySelector('.js-isotope-filter a.active');
  if (last_active) {
    if (last_active.innerHTML !== current.innerHTML) {
      last_active.classList.remove('active');
    }
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  if (document.querySelector('.js-isotope')) {
    isotopefilter();
  }

  if (document.querySelector('.js-home-isotope')) {
    var elem = document.querySelector('.l__projects__list');
    if (elem) {
      var iso = new Isotope( elem, {
        itemSelector: '.l__projects__item'
      });
    }
  }
});
