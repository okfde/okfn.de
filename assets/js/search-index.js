// prep index before DOMcontentloaded

/*
// url = path to json
// dataStore = global namespace in window for loaded json, eg window.siteSearchData
// indexId = global namespace in window for lunr seach index
*/
function fetchIndex (url, dataStore, indexId) {
  fetch(url)
    .then(resp => resp.json())
    .catch( error => console.log("Error fetching: ", error))
    .then(response => {
      window[dataStore] = response;

      window[indexId] = lunr(function() {
        this.field('id');
        this.field('url', { boost: 20});
        this.field('section', { boost: 30});
        this.field('title', { boost: 50 });
        this.field('content', { boost: 10 });

        window[dataStore].forEach(function(obj, index) {
          obj.id = index;
          this.add(obj);
        }, this);
      });
    });
}

document.addEventListener('DOMContentLoaded', function (event) {
if (window.fetch) {
  window.idx = {};
  fetchIndex('/index.json', "siteSearchData", "idx");
} else {
  // fallback for browsers without fetch
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
}



});
