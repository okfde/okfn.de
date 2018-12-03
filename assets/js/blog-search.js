document.addEventListener('DOMContentLoaded', function (event) {
  var searchOverlay = document.getElementById('js-blog-search-overlay');
  var searchInput = document.getElementById('js-blog-search-input');
  var closeSearch = document.getElementById('js-blog-search-clear');
  var searchResults = document.getElementById('js-search-results');
  var searchTerm = document.getElementById('js-search-term');
  var blogIndex = document.getElementById('js-blog-index');

  if (searchOverlay && searchInput) {
    searchInput.value = '';

    closeSearch.onclick = function () {
      if (searchOverlay.classList.contains('open')) {
        searchOverlay.classList.remove('open');
        blogIndex.classList.remove('hidden');
        searchTerm.innerHtml = '';
      }
    }

    window.blogSearchData;
    var searchReq = new XMLHttpRequest();
    searchReq.open('GET', '/blog/index.json', true);
    searchReq.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        console.log("Got blog search index");
        window.blogSearchData = JSON.parse(this.response);

        window.bidx = lunr(function () {
          this.field('id');
          this.field('url');
          this.field('title', { boost: 50 });
          this.field('tags', { boost: 10});
          this.field('content', { boost: 10 });

          window.blogSearchData.forEach(function (obj, index) {
            obj.id = index;
            this.add(obj);
          }, this);
        });

      } else {
        console.log("Failed status for blog search index. Check network panel");
      }
    };
    searchReq.onerror = function () {
      console.log("Error when attempting to load blog search index.");
    };
    searchReq.send();

    function lunrSearch (event) {
      var query = searchInput.value;
      if (query.length === 0) {
        searchResults.innerHTML = '';
        searchTerm.innerHTML = '';
        searchOverlay.classList.remove('open');
        blogIndex.classList.remove('hidden');
      }
      if ((event.keyCode !== 9) && (query.length > 2)) {
        searchTerm.innerHTML = query;
        searchOverlay.classList.add('open');
        blogIndex.classList.add('hidden');
        var matches = window.bidx.search(query);
        displayResults(matches);
      }
    }
    searchInput.addEventListener('keyup', lunrSearch, true);


    function emptyResults (term) {
      var out;
      out = '<li><h2 class="h4">Keine Ergebnisse für "'+ term +'"</h2>';
      out += '<p class="h4">Versuche einen anderen Suchbegriff</p></li>';
      return out;
    }

    function displayResults (results) {
      var inputVal = searchInput.value;
      if (results.length) {
        searchResults.innerHTML = '';
        var out = '';
        results.forEach(function(result) {
          var item = window.blogSearchData[result.ref];
          var date = new Date(item.date.replace(' +0000 UTC', 'Z'))
              .toLocaleDateString('de-DE');
          out += '<li class="c__post--item">';
          out += '<a href="'+ item.url +'" class="row no-gutters">';
          out += '<h2 class="c__post__title h4 col col-12 col-sm-10">'+ item.title +'</h2>';
          out += '<p class="c__post__date h4 col-12 col-sm-2">'+ date +'</p>';
          out += '</a></li>';
        });
        searchResults.innerHTML += out;
      } else {
        searchResults.innerHTML = emptyResults(inputVal);
      }
    }
  }
});
