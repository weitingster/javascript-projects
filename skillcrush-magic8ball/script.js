$(document).ready(function() {

  $("#magicBallAnswer").hide();

  /*** Click button, show a prompt ***/
  var questionButton = document.getElementById("questionButton");
  var askMeAnythingPrompt = function() {
    $("#magicBallAnswer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    console.log("I'm in!");
    setTimeout(function() {
      var question = prompt("Ask me any YES/NO question and I'll share the future with you.");

      if (question) {
        console.log("OK");
        $("#magicBallAnswer").text(askQuestion());
        setTimeout(
          function() {
            $("#8ball").effect("shake");
            $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
          }, 500); //says to show image after the 500 millisecond
        $("#magicBallAnswer").fadeIn(4000);
      } else {
        console.log("Cancelled");
      }
    }, 10);
  };

  $("#questionButton").click(askMeAnythingPrompt);

  /*** Randomizes the answer ***/
  var answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];

  function askQuestion() {

    // create a random number
    var randomNumber = Math.random();

    // make the random number between 0 and the number of items in your array
    var randomNumberForListOfAnswers = randomNumber * answers.length;

    // round down the number to be a whole number
    var randomIndex = Math.floor(randomNumberForListOfAnswers);

    // use that number to index a random number from the answers array
    var answer = answers[randomIndex];

    return answer;
  }

});