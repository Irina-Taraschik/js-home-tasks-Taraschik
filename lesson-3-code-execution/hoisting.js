// functions
calculateAge(1965);

function calculateAge(year) {
  console.log(2018 - year);
}

//retirement(1956);
var retirement = function(year) {
  console.log(65 - (2018 - year));
};

// variables
console.log(age);
var age = 23;

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}
foo();
console.log(age);