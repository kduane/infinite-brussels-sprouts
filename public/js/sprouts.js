// YOUR CODE GOES HERE
$(window).scroll(function(e) {
  var scrollAmount = $(window).scrollTop();
  var documentHeight = $(document).height();

  var scrollPercent = (scrollAmount / documentHeight) * 100;

  if (scrollPercent > 70) {
    // run a function called doSomething
       doSomething();
    }

    function doSomething() {

        // do something when a user gets 50% of the way down my page
    }

    let request = $.ajax({
      method: 'GET',
      url: '/tweets.json'
    });

    request.done((thing) => {

    });

});

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
