/* Generate a share link for the user's Mastodon domain */
function mastodonShare(e){

    // Get the source text
    var src = e.getAttribute("data-src");

    // Get the Mastodon domain
    domain = prompt("Enter your Mastodon domain", "mastodon.social");

    if (domain == "" || domain == null){
        return;
    }
    if (!!domain) {
        // Build the URL
        url = "https://" + domain + "/share?text=" + src;

        // Open a window on the share page
        window.open(url, '_blank');
    }
}