'use strict';

$(function() {
  $('form#adjective').on('submit', function(event)  {
    event.preventDefault();
    var userAdjective = $('#adjective input[type=text]').val();
    $.post('/post_adjective', {word: userAdjective}, function()  {
      // var confirm = response.message;
    // $('#adjective-res').html(response.message + " We saved: <em>" + response.confirm + "</em>");
    })
  })

  $('form#noun').on('submit', function(event)  {
    event.preventDefault();
    var userNoun = $('#noun input[type=text]').val();
    $.post('/post_noun', {word: userNoun}, function()  {
      // var confirm = response.message;
    // $('#adjective-res').html(response.message + " We saved: <em>" + response.confirm + "</em>");
    })
  })

  $('form#verb').on('submit', function(event)  {
    event.preventDefault();
    var userVerb = $('#verb input[type=text]').val();
    $.post('/post_verb', {word: userVerb}, function()  {
      // var confirm = response.message;
    // $('#adjective-res').html(response.message + " We saved: <em>" + response.confirm + "</em>");
    })
  })

function getWord(path, index) {
  $.get(path, function(response) {
    $('#names span:eq(' + index + ')').text(response.word);
  });

}

  $("button").click(function(event)  {

    var nm;

    $('input[type=text]').each(function()  {
      var text_value=$(this).val();
      if(text_value!='') {
        nm = $(this).parents("form").attr("id");
      }
    })

    // console.log('button clicked ' + nm);

    var wordPaths = ['/get_adjective', '/get_verb', '/get_noun'];
  for (var i = 0; i < wordPaths.length; i++) {
    getWord(wordPaths[i], i);
  }


    // if (nm == "adjective") {

    //   $.get('/get_adjective', function(response) {
    //   var adjective = response.word;
    //   $("#adjective input[type=text]").text(adjective);
    //   });
    // } //else if (nm == "noun") {

    //   $.get('/get_noun', function(response) {
    //   var noun = response.word;
    //   $("#noun input[type=text]").text(noun);
    //  });

    // // } else {

    //   $.get('/get_verb', function(response) {
    //   var verb = response.word;
    //   $("#verb input[type=text]").text(verb);
    // });

    // };








  });

});
