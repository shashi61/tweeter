/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$('document').ready(()=>{
const createTweetElement = function(tweet) {
    // const $avatar = $('<img />').attr("src", `${tweet.user.avatars}`); 
    // const $name = $('<span>').text(`${tweet.user.name}`);
    // const $handle= $('<span>').attr("id","user-email").text(`${tweet.user.handle}`);
    // const $content = $('<p>').text(`${tweet.content.text}`);
    // const createdTime = $('<span>').text(`${tweet.created_at}`);
    // const hr = $('<hr />');

    // const article = $('<article>');
    // const header = $('<header>');
    // const footer = $('<footer>');

    // const divHeader = $('<div>');
    // const divMain = $('<div>');
    // const divFooter = $('<div><i class="fa-solid fa-flag"></i><i class="fas fa-retweet"></i><i class="fa-solid fa-heart"></i> </div>');

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
    ${timeago.format(tweet.created_at)}
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
    const $tweetsContainer = $('#tweets-container');
    //Making sure conatiner is empty before populating new data
    $tweetsContainer.empty();
  // loops through tweets
  for(let tweet of tweets){
    // calls createTweetElement for each tweet 
    const newTweet = createTweetElement(tweet);
    $tweetsContainer.prepend(newTweet); 
  }
  
}
//Function to load tweets
const loadTweets= function(){
    $.ajax({
        url: "/tweets",
        method: "GET",
        data: "json",
        success: (tweets) => {
            console.log('data', tweets);
            renderTweets(tweets);
        }, 
        error: (err) =>{
            console.log('err', err);
        }
    })
}
loadTweets();
const form = $('.form');
//submit event for the form
form.on("submit", function(event){
    event.preventDefault();
    const serializedStr = $( this ).serialize();
    $.post('/tweets', serializedStr, (response) => {
        console.log(response)
        loadTweets();
      })
    // $.ajax({
    //     url : "/tweets",
    //     method : "POST",
    //     data : serializedStr
    //   }).then(res =>{
    //       console.log(res);
    //   })  
})



})