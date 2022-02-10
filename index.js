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

var numbers = [];

function askNumber() {
  numbers[a] = prompt("Введите число");
  if (number !== '' || number !== null || !isNaN(number)) {
    numbers[a] = prompt("Введите число");
  } else {
  }
}
askNumber();

console.log(numbers);








function writeYourGenres() {
	for (let i = 1; i++) {
		 personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();
