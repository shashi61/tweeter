/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": timeago.format(new Date())
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": timeago.format(new Date())
    }
  ]

const createTweetElement = function(tweet) {
  let $tweet = $(`<article>
  <header>
  <img src= ${tweet.user.avatars}>
  <div>
  <span>${tweet.user.name}</span>
  <span id="user-email">${tweet.user.handle}</span>
</div>
  </header>
  <div><p>${tweet.content.text}</p>
  <hr>
  <footer>
    <span>
    ${tweet.created_at}
    </span>
   <div><i class="fa-solid fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`)
  
  return $tweet;
}
const renderTweets = function(tweets) {
  // loops through tweets
  for(let data of tweets){
    // calls createTweetElement for each tweet 
    $('#tweets-container').append(createTweetElement(data)); 
  }
  
}
renderTweets(data);