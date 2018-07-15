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

$(function(){
  var scrollFunction = function(){
    var mostOfTheWayDown = ($(document).height() - $(window).height()) * 2 / 3;
      if ($(window).scrollTop() >= mostOfTheWayDown) {
        $(window).unbind("scroll");
        let request = $.ajax({
          url: "/tweets.json",
          page: { 1 : 10 },
          dataType: "json",
          type: "GET",
          success: function(json){
          //some work here

          $(window).scroll(scrollFunction);
          }
      });
    }
  };
  $(window).scroll(scrollFunction);
});​


//   event.preventDefault();
//   // let newDishContent = $('#dish-content').val();
//
//   let request = $.ajax({
//     method: 'GET',
//     // data: { content: newDishContent },
//     url: '/new-dish.json'
//   });
//
//   request.done((newDish) => {
//     // $('ul.dishes').append('<li>' + newDishContent + '</li>');
//     // $('#dish-content').val('');
//     $('#dish').text(newDish['dish']);
//     alert('New dish available');
//   });
//
// });
