// Задание 1.
// Напишите код который выведет сотрудника, 
// который выполнил больше всех задач.

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};


numbers = [];
for (var key in tasksCompleted.rating) {
  numbers.push(tasksCompleted.rating[key]);
}
numb = Math.max(...numbers);

console.log(numb);

// Задание 2.
// Напишите функцию multiplyNumeric которая принимает на вход 
// объект и возвращает объект в котором все числовые значения 
// у свойств умножены на 2.
// Можно использовать typeof obj[key] == 'number', чтобы проверить,
// что значение свойства числовое.

var image = {
  width: 100,
  height: 400,
  title: 'Cool image'
}

function multiplyNumeric() {
  for (var key in image) {
    if(!isNaN(image[key])) {
      image[key] *= 2;
    } else {
    }
  }
}
multiplyNumeric(image);

console.log(image);

// Задание 3. Калькулятор.
// Напишите код, который:
// Запрашивает по очереди значения при помощи prompt и 
// сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт пустую строку, 
// не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива когда ввод прекращен.

// var numbers = [];
// var number;

// function askNumber() {
//   numbers[number] = prompt("Введите число");
//   if (number !== '' || number !== null || !isNaN(number)) {
//     numbers[number] = prompt("Введите число");
//   } else {
//   }
// }
// askNumber();

// console.log(numbers);



// function askNumber() {
//   var numbers = [];
//   for(var i = 0; i < 100; i++) {
//     numbers[i] = prompt("Введите число", +i); // заполняем массив
//     if(numbers[i] !== '' || numbers[i] !== null || !isNaN(numbers[i])) {
//       numbers[i] = prompt("Введите число", +i);
//     }
//   }
// }

// askNumber();

// console.log(numbers);

// var numbers = [];
// var i;
// function askNumber() {
//   numbers[i] = prompt("Введите число", +i); // заполняем массив
//   while (numbers[i] !== null) {
//     numbers[i] = prompt("Введите число", +i);
//   }
// }

// askNumber();

// console.log(numbers);

// var numbers = []; 
// var number = prompt("Введите число");
// for (var i = 0; number !== null && number !== ""; i++) {
//   var number = prompt("Введите число");
//   numbers[i] = number;
// }

// console.log(numbers);

var numbers = [];
function askNumbers() {
  for (var i = 0; number !== null && number !== ""; i++) {
    var number = prompt("Введите число");
    numbers[i] = number;
  }
}

askNumbers();
console.log(numbers);


((number !== null) && (number !== "") && (!isNaN(number))






