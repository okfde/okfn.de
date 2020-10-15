var filterLinks;
var defaultFilter = 'all';

function decide_hide_other_projects (currentFilter) {
  var otherList = document.getElementById('js-other-projects-list');
  if (currentFilter === defaultFilter) {
    otherList.classList.remove('is-hidden');
  } else {
    otherList.classList.add('is-hidden');
  }
}

function set_filter_classes (filterVal) {
  filterLinks.forEach(function (el) {
    if (el.getAttribute('data-filter') === filterVal) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

function set_hash (filterVal) {
  if (filterVal === defaultFilter) {
    history.replaceState({}, document.title, '.');
  } else {
    document.location.hash = '#' + filterVal;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.js-shuffle')) {
    var Shuffle = window.Shuffle;
    var element = document.querySelector('.js-shuffle-container');
    var shuffleInstance = new Shuffle(element, {
      itemSelector: '.l__projects__item',
      gutterWidth: 5
    });

    var hash = document.location.hash.substring(1);
    var initialFilter = hash || defaultFilter;
    filterLinks = document.querySelectorAll('.js-shuffle-filter a');

    if (filterLinks) {
      filterLinks.forEach(function (filterLink) {
        filterLink.addEventListener('click', function (ev) {
          ev.preventDefault();
          var filterVal = filterLink.dataset.filter;
          decide_hide_other_projects(filterVal);
          set_filter_classes(filterVal);
          shuffleInstance.filter(filterVal);
          set_hash(filterVal);
        });
      });

      shuffleInstance.options.speed = 0;
      shuffleInstance.filter(initialFilter);
      shuffleInstance.options.speed = 250;
      set_filter_classes(initialFilter);
      console.log(shuffleInstance)
    }
  }
});
