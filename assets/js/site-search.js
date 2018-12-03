// https://discourse.gohugo.io/t/live-hugo-site-search-with-lunr-js/2857

// prep index before DOMcontentloaded
window.siteSearchData;
var searchReq = new XMLHttpRequest();
searchReq.open('GET', "/index.json", true);
searchReq.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    console.log("Got the site index");
    siteSearchData = JSON.parse(this.response);

    window.idx = lunr(function() {
      this.field('id');
      this.field('url', { boost: 20});
      this.field('section', { boost: 30});
      this.field('title', { boost: 50 });
      this.field('content', { boost: 10 });

      siteSearchData.forEach(function(obj, index) {
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



// glue to elements
document.addEventListener('DOMContentLoaded', function (event) {
  var searchOverlay = document.querySelector('.js-search-form');
  var searchButton = document.getElementById('js-search-button');
  var searchInput = document.getElementById('js-search-input');
  var closeSearch = document.getElementById('js-close-search');
  var searchResults = document.querySelector('#js-search-results');
  var searchResultCount = document.querySelector('#js-search-result-count');

  if (searchOverlay
      && searchButton
      && searchInput
      && closeSearch
      && searchResults) {

    function clearSearch() {
      searchInput.value = '';
      searchResults.innerHTML = '';
      searchResultCount.innerHTML = '';
    }

    function focusInput() {
      searchInput.focus();
      window.scroll(0, 0);
    }

    closeSearch.onclick = function() {
      if (searchOverlay.classList.contains('open')) {
        searchOverlay.classList.remove('open');
        clearSearch();
      }
    }

    window.addEventListener('keyup', function(event) {
      var keyPressed = event.keyCode;
      if (!document.getElementById('js-blog-search-input')) {
        if (keyPressed === 83 && searchOverlay.classList.contains('open')) {
          return;
        } else if (keyPressed === 83) {
          searchOverlay.classList.add('open');
          if (searchInput.value.length > 0) {
            clearSearch();
            focusInput();
          }
          searchInput.focus();
        } else if (keyPressed === 27 && searchOverlay.classList.contains('open')) {
          searchOverlay.classList.remove('open');
          clearSearch();
        }
      }
    }, true);

    searchButton.addEventListener('click', function(event) {
      searchOverlay.classList.toggle('open');
      clearSearch();
      focusInput();
    }, true);


    //for more information on lunr.js, go to http://lunrjs.com/
    function lunrSearch(event) {
      var query = searchInput.value;
      if (query.length === 0) {
        searchResults.innerHTML = '';
      }
      if ((event.keyCode !== 9) && (query.length > 2)) {
        var matches = window.idx.search(query);
        displayResults(matches);
      }
    }
    searchInput.addEventListener('keyup', lunrSearch, true);

    function displayResults(results) {
      var inputVal = searchInput.value;
      if (results.length) {
        searchResults.innerHTML = '';
        searchResultCount.innerHTML = results.length + ' Ergebnisse';
        var long_string = '';
        results.forEach(function(result) {
          var item = window.siteSearchData[result.ref];
          var appendString = '<li class="l__search__result">';
          var section, img;
          appendString += '<a href="'+ item.url +'">';
          if (item.section) {
            section = [item.section.split('')[0].toUpperCase(),
                       item.section.split('').splice(1).join('')].join('');
            appendString += '<p>In '+ section +'</p>';
          }
          appendString += '<h3 class="l__search__result__header">'+ item.title +'</h3>';
          if (section && section === "Projekte") {
            appendString += '<img src="/files/'+ item.img  +'" width="265" height="179" class="l__search__result__image">';
          }
          appendString += '<p>'+ item.content.slice(0, 35).join(" ") +' [...]</p></a>';
          appendString += '</li>';
          long_string += appendString;
        });
        // this is the most expensive thing! Do it only once for results
        searchResults.innerHTML += long_string;
      } else {
        searchResults.innerHTML = `<li class=\"l__search__result none\">
Keine Ergebnisse für <span class=\"l__search__input-value\">${inputVal}</span> gefunden.<br/>
Bitte kontrolliere Rechtschreibung und Worttrennung.</li>`;
      }
    }

  } else {
    console.log("Missing form elements");
  }
});
