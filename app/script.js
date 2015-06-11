'use strict';

$(function() {
  $('form').on('submit', function(event)  {
    event.preventDefault();
    var userAdjective = $('#user-adjective').val();
    $.post('/adjective', {word: userAdjective}, function()  {
      var confirm = response.message $('#adjective-res'.html(response.message + " We saved: <em>" + response.confirm + "</em>"));
    })
  })

  $("button").click(function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      $("#adjective").text(adjective);
    });

    $.get('verb', function(response) {
      var verb = response.word;
      $("#verb").text(verb);
    });

    $.get('noun', function(response) {
      var noun = response.word;
      $("#noun").text(noun);
    });

  });

});
