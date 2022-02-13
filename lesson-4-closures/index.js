// Задание 1.
// Напишите программу, создающую строку, содержащую решётку 8х8, в
// которой линии разделяются символами новой строки. На каждой позиции
// либо пробел, либо \#.
// var result = '';
// var i = 0;
// function board() {
//   do {
//     i += 1;
//     result += i + ' ';
//   } while (i > 0 && i < 5);
// }
// board();





// function board(a) {
//   for (var i = 0; i < 5; i++) {
//     console.log("# ");
//   }
// }

// console.log(board(5));

//

function board1() {  // не работает
  var result = '';
  var i = 0;
  do {
    i += 1;
    result += '# ';
} while (i <= 8); 
}
board1();
console.log(board1())
//

var result = '';   // работает
var i = 0;
do {
   i += 1;
   result += '# ';
} while (i <= 8); 

//
