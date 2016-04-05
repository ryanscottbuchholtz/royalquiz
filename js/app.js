var score = 0;

$('.question').mousedown( function() {
  //find the id of the element clicked on & convert to question;
  selectedQuestion = eval(this.id);
  // var questionId = $(this).data('qid');
  //hide the question from the board
  $(this).css('visibility', 'hidden');
  //hide the question board
  $('.board-wrap').hide();
  //show the individual question div
  $('.question-and-progress').show();
  //append the question to the div
  $('#new-question').append("<p>" + selectedQuestion.question + "</p>").show();
  //iterate over the answers and append the possible answers as buttons
  for (i = 0; i < selectedQuestion.answers.length; ++i) {
    $('#new-answers').append("<button id=" + i + ">" + selectedQuestion.answers[i] + "</button>").show();
  }

  $('button').mousedown( function() {
    var questionID = $(this).attr("id");
     if (questionID == selectedQuestion.correctAnswer) {
      score += selectedQuestion.points;
      $("#player-feedback").append("<h3>" + "Correct! " + selectedQuestion.reply + "</h3>").show();
    }
      else {
      score -= selectedQuestion.points;
      $("#player-feedback").append("<h3>" + "Incorrect. " + selectedQuestion.reply + "</h3>").show();
    }
    //remove question from the board
      $("#new-answers button").hide();
      $("#player-feedback").append("<p>" + score + "</p>");
      $("#player-feedback").append('<button id=back-to-board>Back to the board</button>');
  });


});

$("#player-feedback").on('click', '#back-to-board', function() {
    $(".board-wrap").show();
    $("#player-feedback h3").remove();
    $("#player-feedback p").remove();
    $(".question-and-progress").hide();
    $("#new-question p").remove();
    $("#new-answers").hide();
    $("#new-answers button").remove();
    $("#back-to-board").remove();
});

  


