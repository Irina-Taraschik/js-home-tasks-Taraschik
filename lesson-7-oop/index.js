function askQuestion() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.appearQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ' - ' + this.answers[i])
    }
  }

  Question.prototype.checkAnswer = function(answer) {
    if (answer == this.correct) {
      console.log("Your answer is correct");
    } else {
      console.log("Your answer is wrong. Try again.");
    }
  }

  // var questions = [quest1, quest2, quest3];

  var quest1 = new Question('Mosquitoes are more dangerous than sharks.', ['true', 'false'], 0);
  var quest2 = new Question('The Earth is hotter than Mars.', ['true', 'false'], 0);
  var quest3 = new Question('Coffee is more popular than tea in the UK.', ['true', 'false'], 1);

  var questions = [quest1, quest2, quest3];

  var order = Math.floor(Math.random() * questions.length);

  questions[order].appearQuestion();

  var answer = parseInt(prompt('Your answer'));

  questions[order].checkAnswer(answer);

};

askQuestion()