// Задание 3 (Анаграммы)
// использовать chaining
// Анаграммы — слова, состоящие из одинакового количества 
// одинаковых букв, но в разном порядке.

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
function anClean(arr) {
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    var sorted = arr[i].toLowerCase().split('').sort().join('');
    obj[sorted] = arr[i];
  }
  return Object.values(obj);
}

console.log(anClean(arr)); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'