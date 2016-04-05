var score = 0;

$('.question').mousedown( function() {
  //find the id of the element clicked on & convert to question;
  selectedQuestion = eval(this.id);
  //hide the question from the board
  $(this).hide();
  //hide the question board
  $('.board-wrap').hide();
  //show the individual question div
  $('.question-and-progress').show();
  //append the question to the div
  $('#new-question').append("<p>" + selectedQuestion.question + "</p>");
  //iterate over the answers and append the possible answers as buttons
  for (i = 0; i < selectedQuestion.answers.length; ++i) {
    $('#new-answers').append("<button id=" + i + ">" + selectedQuestion.answers[i] + "</button>");
  }

  $('button').mousedown( function() {
    var questionID = $(this).attr("id");
     if (questionID == selectedQuestion.correctAnswer) {
      score += selectedQuestion.points;
      $("#player-feedback").append("<h3>" + selectedQuestion.correctReply + "</h3>").show();
    }
      else {
      score -= selectedQuestion.points;
      $("#player-feedback").append("<h3>" + selectedQuestion.incorrectReply + "</h3>").show();
    }
    //remove question from the board
      $("#new-answers button").hide();
      $("#player-feedback").append("<p>" + score + "</p>");
      $("#player-feedback").append('<button id=back-to-board>Back to the board</button>');
  });


});

$("#back-to-board").mousedown( function() {
    console.log("button Pressed");
    $(".board-wrap").show();
    $(".question-and-progress").hide();
  });

  


