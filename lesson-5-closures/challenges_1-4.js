var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
  console.log('There is a draw');
}

if (scoreJohn > scoreMike) {
  console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
  console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
  console.log('There is a draw');
}

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]];

console.log(tips, finalValues);

// class work
var John = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};
John.calcBMI();
console.log(John.BMI);

var Mark = {
  firstName: 'Mark',
  lastName: 'Simmons',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};
Mark.calcBMI();
console.log(Mark.BMI);

if (John.BMI > Mark.BMI) {
  console.log(John.firstName + ' ' + John.lastName + '\'s' + ' BMI is higher. His BMI is ' + John.BMI);
} else if (Mark.BMI > John.BMI) {
  console.log(Mark.firstName + ' ' + Mark.lastName + '\'s' + ' BMI is higher. His BMI is ' + Mark.BMI);
} else {
  console.log("They have the same BMI.")
}