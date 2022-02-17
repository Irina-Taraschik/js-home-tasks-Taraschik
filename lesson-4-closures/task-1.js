// Задание 1.
// Напишите программу, создающую строку, содержащую решётку 8х8, в
// которой линии разделяются символами новой строки. На каждой позиции
// либо пробел, либо \#.


// var symbolInLine = 8;
// var lines = 8;
var symbolInLine = +prompt("Сколько символов должно быть в строке?", "8");
var lines = +prompt ("Сколько линий должно быть?", "8");

var symbol = "# ";
var spaceLine = " #";
var line = '';
for (var i = 0; i < symbolInLine; i++) {
  for (var j = 0; j < lines; j++) {
    if (i % 2 == 0) {
      line += symbol;
    } else {
      line += spaceLine;
    }
  }
  line += '\n';
}
console.log(line);

// Прямоугольник:
// var symbolInLine = 8;
// var lines = 8;
// var symbol = "# ";
// var line = symbol.repeat(symbolInLine) + '\n';
// var result = line.repeat(lines);
// console.log(result);
