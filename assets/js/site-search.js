// https://discourse.gohugo.io/t/live-hugo-site-search-with-lunr-js/2857

window.idx;
window.siteSearchData;

document.addEventListener('DOMContentLoaded', function (event) {
  var indexReq = new XMLHttpRequest();
  indexReq.open('GET', "/js/site-search-index.json"); // pre-build from scripts
  indexReq.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      var parsedData = JSON.parse(this.response);
      window.idx = lunr.Index.load(parsedData.idx);
      window.siteSearchData = parsedData.store;
      console.log("Search index loaded, good to go!");
      readySiteSearch();
    }
  };
  indexReq.onerror = function() {
    console.log("Error loading index");
  }
  indexReq.send();

  function readySiteSearch() {
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
        if (keyPressed == 27) {
          if (searchOverlay.classList.contains('open')) {
            searchOverlay.classList.remove('open');
            clearSearch();
          } else {
            searchOverlay.classList.add('open');
            focusInput();
            if (searchInput.value.length > 0) {
              clearSearch();
            }
          }
        }
      }, true);

      searchButton.addEventListener('click', function(event) {
        searchOverlay.classList.toggle('open');
        clearSearch();
        focusInput();
        // super hacky, sorry
        var hamburger = document.querySelector('#js-topnav-toggle');
        var menu = document.querySelector('#js-topnav-menu');
        if (hamburger && menu) {
          if (!menu.classList.contains('is-hidden')) {
            menu.classList.toggle('is-hidden');
            hamburger.classList.toggle('is-closed');
          }
        }
      }, true);

      function lunrSearch(event) {
        var query = searchInput.value;
        if (query.length === 0) {
          searchResults.innerHTML = '';
          searchResultCount.innerHTML = '';
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
          // Appending to DOM is the most expensive operation! Do it only once for all results
          searchResults.innerHTML += long_string;
        } else {
          searchResultCount.innerHTML = '';
          searchResults.innerHTML = `<li class=\"l__search__result none\">
Keine Ergebnisse für <span class=\"l__search__input-value\">${inputVal}</span> gefunden.<br/>
Bitte kontrolliere Rechtschreibung und Worttrennung.</li>`;
        }
      }
    } else {
      console.log("Missing form elements");
    }
  }
});
