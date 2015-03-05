var currentQuestion = -1
var numQuestions = -1
var prevButton;
var nextButton;
var submit;
var FADE_TIME = 300;

function init(){
  numQuestions = document.getElementsByName("question").length
  currentQuestion = 1
  prevButton = document.getElementById("previousButton")
  nextButton = document.getElementById("nextButton")
  submit = document.getElementById("submitbutton")
}

(function(){
 "use strict";

 $(document).ready(function(){
  try {
   $.get(window.location.href + "/content", function(data){
     document.write(data);
     init();

     $("#nextButton").click(function(){
      currentQuestion++;
      if (currentQuestion > 1){
        prevButton.disabled = false
      }
      if (currentQuestion >= numQuestions){
        nextButton.disabled = true
        submit.disabled = false
      }

      var currentQuestionId = "question_" + (currentQuestion - 1);
      var nextQuestionId = "question_" + currentQuestion;

      $("#" + currentQuestionId).fadeOut(FADE_TIME);
      $("#" + nextQuestionId).delay( FADE_TIME ).fadeIn(FADE_TIME);
    });

     $("#previousButton").click(function(){
      currentQuestion --;
      var prevButton = document.getElementById("previousButton")
      if (currentQuestion <= 1){
        prevButton.disabled = true
      }
      if (currentQuestion < numQuestions){
        nextButton.disabled = false
        submit.disabled = true
      }

      var currentQuestionId = "question_" + (currentQuestion + 1);
      var nextQuestionId = "question_" + currentQuestion;

      $("#" + currentQuestionId).fadeOut(FADE_TIME);
      $("#" + nextQuestionId).delay( FADE_TIME ).fadeIn(FADE_TIME);
    });

   });
} catch(e) {
 alert("Your quiz failed to load.  Please try again.");
}
});
}());