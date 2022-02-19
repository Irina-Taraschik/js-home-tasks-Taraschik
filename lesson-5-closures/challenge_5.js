// Challenge 5
var John = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  tips: [],
  finalValues: [], // bills + tips
  calcTips: function() {
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      if (this.bills[i] < 50) {
        percentage = 0.2;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      // Math.floor leaves 2 signs after the dot
      this.tips.push(Math.floor((this.bills[i] * percentage) * 100) / 100);
      this.finalValues.push(this.bills[i] + this.tips[i]);
    }
  }
}
John.calcTips();
console.log('John\'s tips are: ' + John.tips);
console.log('John\'s bills plus tips are: ' + John.finalValues);

// Challenge 5. Extra part.
var Mark = {
  fullName: 'Mark Simmons',
  bills: [77, 375, 110, 45],
  tips: [],
  finalValues: [],
  calcTips: function() {
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      if (this.bills[i] < 100) {
        percentage = 0.2;
      } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      // Math.floor leaves 2 signs after the dot
      this.tips.push(Math.floor((this.bills[i] * percentage) * 100) / 100);
      this.finalValues.push(this.bills[i] + this.tips[i]);
    }
  }
}
Mark.calcTips();
console.log('Mark\'s tips are: ' + Mark.tips);
console.log('Marks\'s bills plus tips are: ' + Mark.finalValues);

function calcAverageTips(tips) {
  var total = 0;
  for (var i = 0; i < tips.length; i++) {
    total += tips[i];
  }
  return total / tips.length;
}
var JohnsAverageTip = calcAverageTips(John.tips);
var MarksAverageTip = calcAverageTips(Mark.tips);
console.log('John\'s average tip is ' + JohnsAverageTip);
console.log('Mark\'s average tip is ' + MarksAverageTip);

if (JohnsAverageTip > MarksAverageTip) {
  console.log('John\'s family paid higher tips on average than Mark\'s family.');
} else if (MarksAverageTip > JohnsAverageTip) {
  console.log('Mark\'s family paid higher tips on average than John\'s family.');
} else {
  console.log('John\'s family paid the same tips on average as Mark\'s family did.')
}