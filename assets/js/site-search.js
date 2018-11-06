// https://discourse.gohugo.io/t/live-hugo-site-search-with-lunr-js/2857

var searchOverlay = document.querySelector('.search-form');
var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');
var closeSearch = document.getElementById('close-search');

closeSearch.onclick = function() {
  if (searchOverlay.classList.contains('open')) {
    searchOverlay.classList.remove('open');
  }
}

window.addEventListener('keyup', function(event) {
  var keyPressed = event.keyCode;
  if (keyPressed === 83 && searchOverlay.classList.contains('open')) {
    return;
  } else if (keyPressed === 83) {
    searchOverlay.classList.add('open');
    if (searchInput.value.length > 0) {
      searchInput.value = '';
    }
    searchInput.focus();
  } else if (keyPressed === 27 && searchOverlay.classList.contains('open')) {
    searchOverlay.classList.remove('open');
  }
}, true);

searchButton.addEventListener('click', function(event) {
  searchOverlay.classList.toggle('open');
  searchInput.focus();
}, true);


//for more information on lunr.js, go to http://lunrjs.com/
var searchData;
searchInput.addEventListener('keyup', lunrSearch, true);

function indexJsonPath() {
  if (window.location.pathname.match(/blog/) !== null) {
    return '/blog/index.json';
  } else {
    return '/index.json';
  }
}

var searchReq = new XMLHttpRequest();

searchReq.open('GET', indexJsonPath(), true);
searchReq.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    console.log("Got the site index");
    searchData = JSON.parse(this.response);

    window.idx = lunr(function() {
      this.field('id');
      this.field('url');
      this.field('title', { boost: 50 });
      this.field('summary', { boost: 20 });
      this.field('tags', { boost: 10});
      this.field('content', { boost: 10 });

      searchData.forEach(function(obj, index) {
        obj.id = index;
        this.add(obj);
      }, this);
    });

  } else {
    console.log("Failed status for json. Check network panel");
  }
};
searchReq.onerror = function() {
  console.log("Error when attempting to load json.");
};
searchReq.send();

function lunrSearch(event) {
  var query = document.querySelector("#search-input").value;
  var searchResults = document.querySelector('#search-results');
  if (query.length === 0) {
    searchResults.innerHTML = '';
  }
  if ((event.keyCode !== 9) && (query.length > 2)) {
    var matches = window.idx.search(query);
    displayResults(matches);
  }
}

function displayResults(results) {
  var searchResults = document.querySelector('#search-results');
  var inputVal = document.querySelector('#search-input').value;
  if (results.length) {
    searchResults.innerHTML = '';
    results.forEach(function(result) {
      var item = window.searchData[result.ref];
      var appendString = '<li class="search-result">';
      appendString += '<h4><a href="'+ item.url +'">'+ item.title +'</a></h4>';
      if (item.section) {
        var section = [item.section.split('')[0].toUpperCase(),
                       item.section.split('').splice(1).join('')].join('');
        appendString += '<p>In '+ section +'</p>';
      }
      if (item.tags) {
        appendString += '<ul class="tags">'+ item.tags.map(x => x) +'</ul>';
      }
      if (item.summary) {
        appendString += '<p>'+ item.summary +'</p>';
      }
      appendString += '</li>';
      searchResults.innerHTML += appendString;
    });
  } else {
    searchResults.innerHTML = `<li class=\"search-result none\">
No results found for <span class=\"input-value\">${inputVal}</span>.<br/>
Please check spelling and spacing.</li>`;
  }
}
