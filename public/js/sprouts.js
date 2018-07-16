// YOUR CODE GOES HERE
// $(window).scroll(function() {
//   event.preventDefault();
//   var scrollAmount = $(window).scrollTop();
//   var documentHeight = $(document).height();
//   var scrollPercent = (scrollAmount / documentHeight) * 100;
//   let pageNum = 1;
//   if (scrollPercent > 70) {
//     let request = $.ajax({
//       method: 'GET',
//       url: '/tweets.json?page=' + pageNum,
//       dataType: 'json'
//     });
//
//     request.done((data) => {
//       console.log(data);
//       pageNum ++;
//     });
//   }
//
// });
let pageNum = 2;

function addTweets() {
  let tweets = $.ajax({
    method: "GET",
    url: "/tweets.json?page=" + pageNum
  });

  function getTweets(tweets) {
    tweets.forEach(tweet => {
      var newTweet = "<li class = 'tweet'><div class='body'>" + tweet["text"] +
      "</div><div class='user'>" + tweet["username"] + "</div></li>";
      $('.tweets').append(newTweet);
    });
  }

  tweets.done(function(data) {
    getTweets(data);
    pageNum++;
  });
}

window.onscroll = function(event) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
	    addTweets();
	  }
};


// $(function(){
//   var scrollFunction = function(){
//     var mostOfTheWayDown = ($(document).height() - $(window).height()) * 2 / 3;
//       if ($(window).scrollTop() >= mostOfTheWayDown) {
//         $(window).unbind("scroll");
//         let request = $.ajax({
//           url: "/tweets.json?page=" + pageNum,
//           type: "GET",
//           success: function(data){
//             pageNum ++;
//             data['tweets'].forEach(function(tweet) {
//               $('#tweets').append('<li>' + tweet + '</li>');
//             });
//           $(window).scroll(scrollFunction);
//         }
//       });
//     }
//   };
//   $(window).scroll(scrollFunction);
// });​
