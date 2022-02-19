// Задание №1
// Написать «чистую» («молчаливую») функцию для эффективного 
// подсчета количества русских гласных букв в строке.
// Спросить у пользователя строку. Вывести в консоль
// количество русских гласных букв в ней.

var userString = prompt("Напечатайте строку.");
// применяем к строке метод match
// пишем регулярное выражение в которое передаем все элементы, 
// которые хотели бы найти
// g -глобальный поиск 
// i - не зависимый от регистра
// метод match возвращает массив тех элементов, кот найдет

function findVowels() {
  var matched = userString.match(/[аиоеёыуэюя]/gi);
  return matched ? matched.length : 0;
}
console.log(findVowels(userString));

// Задание №2
// Спросить у пользователя:
// фамилию, имя, отчество РАЗДЕЛЬНО (оператором prompt)
// возраст в годах (оператором prompt)
// пол (оператором confirm, например, "ваш пол - мужской?")
// и вывести одним оператором alert анкету пользователя.

var surname;
var firstName;
var patronymic;
var age;

function askSurname() {
  surname = prompt("Введите вашу фамилию");
  while (surname == '' || surname == null) {
    surname = prompt("Введите фамилию!");
  }
};

function askName() {
  firstName = prompt("Введите ваше имя");
  while (firstName == '' || firstName == null) {
    firstName = prompt("Введите имя!");
  }
};

function askPatronymic() {
  patronymic = prompt("Введите ваше отчество");
  while (patronymic == '' || patronymic == null) {
    patronymic = prompt("Введите отчество!");
  }
};

function askAge() {
	age = +prompt('Сколько Вам лет?');
	while (age == '' || age == null || isNaN(age)) {
		age = +prompt('Значение некорректно. Сколько Вам лет?');
	}
};

askSurname();
askName();
askPatronymic();
askAge();

var gender = confirm('Ваш пол мужской?');
if (gender == true) {
  gender = 'мужской';
} else {
  gender = 'женский'
};

var ageInDays = age * 365;
var ageIn5Years = age + 5;
var isRetired;
if ((gender == 'мужской' && age >= 63) || 
    (gender == 'женский' && age >= 58)) {
  isRetired = 'да';
} else {
  isRetired = 'нет'
};

alert('ваше ФИО: ' + surname + ' ' + firstName + ' ' + patronymic + '\n' +
'ваш возраст в годах: ' + age + '\n' +
'ваш возраст в днях: ' + ageInDays + '\n' +
'через 5 лет вам будет: ' + ageIn5Years + '\n' +
'ваш пол: ' + gender + '\n' +
'вы на пенсии: ' + isRetired);