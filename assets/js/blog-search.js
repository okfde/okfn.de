// https://discourse.gohugo.io/t/live-hugo-site-search-with-lunr-js/2857

document.addEventListener('DOMContentLoaded', function (event) {
  var searchOverlay = document.getElementById('js-blog-search-overlay');
  var searchInput = document.getElementById('js-blog-search-input');
  var closeSearch = document.getElementById('js-blog-search-clear');
  var searchResults = document.getElementById('js-search-results');

  closeSearch.onclick = function () {
    console.log('close click');
    if (searchOverlay.classList.contains('open')) {
      searchOverlay.classList.remove('open');
    }
  }

  //for more information on lunr.js, go to http://lunrjs.com/
  window.searchData;
  searchInput.addEventListener('keyup', lunrSearch, true);

  function indexJsonPath() {
    return '/blog/index.json';
  }

  var searchReq = new XMLHttpRequest();

  searchReq.open('GET', indexJsonPath(), true);
  searchReq.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      console.log("Got blog search index");
      searchData = JSON.parse(this.response);

      window.bidx = lunr(function() {
        this.field('id');
        this.field('url');
        this.field('title', { boost: 50 });
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
    var query = searchInput.value;
    //var searchResults = document.querySelector('#search-results');
    if (query.length === 0) {
      searchResults.innerHTML = '';
      console.log('query too short');
      searchOverlay.classList.remove('open');
    }
    if ((event.keyCode !== 9) && (query.length > 2)) {
      searchOverlay.classList.add('open');
      console.log('results found', window.bidx.search(query).length);
      var matches = window.bidx.search(query);
      displayResults(matches);
    }
  }

  function displayResults(results) {
    console.log(results);
    var inputVal = searchInput.value;
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

});
