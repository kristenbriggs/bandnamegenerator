$(function() {
  $('button').on('click', function(){
    $.get("/adjectives"), function(response) {
      $('span').html(response.word);
    };
  })
});
