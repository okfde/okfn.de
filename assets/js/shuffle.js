function deactivate_last_filter_elem (current) {
  var last_active = document.querySelector('.js-shuffle-filter a.active');
  if (last_active) {
    if (last_active.innerHTML !== current.innerHTML) {
      last_active.classList.remove('active');
    }
  }
}

function decide_hide_other_projects (currentFilter, defaultValue) {
  var otherList = document.getElementById('js-other-projects-list');
  if (currentFilter === defaultValue) {
    if (otherList) { otherList.classList.remove('is-hidden'); }
    document.querySelector('.js-shuffle-filter a').click();
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

function on_filter_elem_click (current, defaultValue, shuffleInstance) {
  current.addEventListener('click', function (ev) {
    ev.preventDefault();
    deactivate_last_filter_elem(current);
    current.classList.toggle('active');
    var filterVal = decide_new_filter_value(current, defaultValue);
    decide_hide_other_projects(filterVal, defaultValue);
    shuffleInstance.filter(filterVal);
  });
}


document.addEventListener('DOMContentLoaded', function (event) {
  if (document.querySelector('.js-shuffle')) {
    var Shuffle = window.Shuffle;
    var element = document.querySelector('.js-shuffle-container');
    var shuffleInstance = new Shuffle(element, {
      itemSelector: '.l__projects__item',
      gutterWidth: 5
    });

    var defaultFilter = 'tile';
    var filterLinks = document.querySelectorAll('.js-shuffle-filter a');
    if (filterLinks) {
      filterLinks.forEach(function (v, i) {
        on_filter_elem_click(v, defaultFilter, shuffleInstance);
      });

      filterLinks[0].click();
      shuffleInstance.filter('tile');
    }
  }
});
