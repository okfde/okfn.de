document.addEventListener('DOMContentLoaded', () => {
    const searchOverlay = document.querySelector('.js-search-form');
    const searchButton = document.getElementById('js-search-button');
    const closeSearch = document.getElementById('js-close-search');
    if (!searchOverlay || !searchButton || !closeSearch) {
        return
    }

    new PagefindUI({ element: "#search", showSubResults: true });

    closeSearch.addEventListener('click', () => searchOverlay.classList.toggle('open'))

    searchButton.addEventListener('click', () => {
        searchOverlay.classList.toggle('open');
        // super hacky, sorry
        const hamburger = document.querySelector('#js-topnav-toggle');
        const menu = document.querySelector('#js-topnav-menu');
        if (hamburger && menu) {
            if (!menu.classList.contains('is-hidden')) {
                menu.classList.toggle('is-hidden');
                hamburger.classList.toggle('is-closed');
            }
        }
        document.getElementsByClassName("pagefind-ui__search-input")[0].focus();
    }, true);
});
