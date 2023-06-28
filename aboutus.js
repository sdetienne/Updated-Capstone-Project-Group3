!function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = p + "://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }(document, "script", "twitter-wjs");

  window.onload = () => {
      var widget = document.getElementById("twitter-feed");
      var maxTweets = 10;

      twttr.widgets.createTimeline(
          {
              sourceType: "profile",
              screenName: "Defenders",
          },
          widget,
          {
              chrome: "noheader nofooter",
              tweetLimit: maxTweets
          }
      );
  };