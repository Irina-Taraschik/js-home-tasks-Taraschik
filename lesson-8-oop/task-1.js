// Coding challenge

// не полностью

(function() {
  function Question(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
      console.log(this.question);

      for (var i = 0; i < this.answers.length; i++) {
          console.log(i + ': ' + this.answers[i]);
      }
  }

  Question.prototype.checkAnswer = function(ans, callback) {
    var score;
      if (ans === this.correct) {
          console.log('Correct answer!');
          score = callback(true);

      } else {
          console.log('Wrong answer. Try again :)')
          score = callback(false);
      }
      this.displayScore(score);
  }
  
  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
}

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
      ['Yes', 'No'],
      0);

  var q2 = new Question('What is the name of this course\'s teacher?',
      ['John', 'Micheal', 'Jonas'],
      2);

  var q3 = new Question('What does best describe coding?',
      ['Boring', 'Hard', 'Fun', 'Tediuos'],
      2);

  var questions = [q1, q2, q3];

  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = parseInt(prompt('Please select the correct answer.'));

  questions[n].checkAnswer(answer);
})();