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

// 
var a = prompt('Введите числа через запятую').split(',');
    var max = a[0];

    for(i = a; i < a; i++){
        if (a[i] > max) {max = a[i]}
    }
    document.write('Максимальное число, которое вы ввели: ' + max);



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


var numbers = [];
var number;
function askNumbers() {                                        // Проверки на не число нет!
  for (var i = 0; number !== null && number !== ""; i++) {     // !isNaN(number) - не работает
    var number = prompt("Введите число");                      // +prompt  ввод чисел становится бесконечным, почему?
    numbers[i] = number * 1;                                   // умножаю на 1, чтобы привести к числу
  }
}
askNumbers();
console.log(numbers);

var sum = 0;
for(var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
alert(sum);