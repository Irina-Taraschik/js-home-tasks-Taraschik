/*Если вы сравниваете массивы либо хэши операциями == != === !== 
фактически сравниваются только ссылки. Даже если содержимое массивов 
или хэшей полностью идентично, они НЕ будут равны, если ссылаются в разные места.*/

var A1=[5,6];
var A2=[5,6];
A1==A2


var H1={a:5,b:6};
var H2={a:5,b:6};
H1==H2

// 

var Beatles = {
  name : 'Beatles',
  AlbumsCount : 12
};

var Beatles2 = Beatles;

console.log( Beatles2 ); // { name: 'Beatles', AlbumsCount: 12 }

Beatles2.name='The Beatles';
Beatles2.AlbumsCount++;

console.log( Beatles2 ); // { name: 'The Beatles', AlbumsCount: 13 }
console.log( Beatles ); // { name: 'The Beatles', AlbumsCount: 13 }

// ------------------------

/* Хэш как набор опций (аргументы функции) */

/* Разрабатываем функцию, которая показывает окошко с сообщением; 
в самом общем случае, ей нужно знать текст заголовка окошка, 
текст внутри окошка, и (к примеру) сколько раз повторить текст внутри окошка. */

function Message(Txt,Options) {
  Options = Options || {};
  
  /*Не нужно беспокоиться о ПОРЯДКЕ указания значений — хэш это 
  неупорядоченное множество, и опции сработают, в каком бы порядке мы их не указали.*/
  var Header = Options.Header || 'ВНИМАНИЕ!';
  var Count = Options.Count || 1;
  
  console.log( Header );
  
  for (var i = 1; i <= Count; i++) {
   console.log(i + " " + Txt); 
  }
}

Message( 'Доброе утро!', { Header:'ИНФОРМАЦИЯ', Count:3 } );
Message( 'Добрый день!!', { Header:'ИНФОРМАЦИЯ' } );
Message( 'Добрый вечер!', { Count:2 } );
Message( 'Здравствуйте!', { } );
Message( 'До свидания!' );

/* ИНФОРМАЦИЯ
1 Доброе утро!
2 Доброе утро!
3 Доброе утро!
ИНФОРМАЦИЯ
1 Добрый день!!
ВНИМАНИЕ!
1 Добрый вечер!
2 Добрый вечер!
ВНИМАНИЕ!
1 Здравствуйте!
ВНИМАНИЕ!
1 До свидания! */


/* Хэш как словарь (таблица перекодировки)  */

function ColorCode(ColorName) {
  var ColorsH={
    red:'#FF0000',
    green:'#00FF00',
    blue:'#0000FF',
    black:'#000000',
    white:'#FFFFFF'
  };
  return ColorsH[ColorName];
}

console.log(ColorCode('red')); // #FF0000
console.log(ColorCode('white')); // #FFFFFF

/*

Примеры перекодировок

var WordsH={ 'корова':'cow', 'лошадь':'horse' };
var TransLatH={ 'т':'t', 'у':'u', 'ё':'jo' };
var NumbersH={ 0:'ноль', 1:'один', 2:'два' };



/*  Хэш как счётчик  */

var AnimalsA = [ 'собака', 'кошка', 'тушкан', 'собака', 'собака', 'тушкан' ];

var CountH = {}; // ключ - животное, значение - сколько раз оно встретилось

for (var i = 0; i < AnimalsA.length; i++) {
  var Animal = AnimalsA[i];
  if (!(Animal in CountH)) {
    CountH[Animal] = 0;
  }
  CountH[Animal]++;
}

console.log( CountH ); // { 'собака': 3, 'кошка': 1, 'тушкан': 2 }


/* Хэш как память (как запомнить что что-то уже случалось)  */
/*Пусть у нас есть массив, в котором некоторые числа повторяются. 
Наша задача — вывести в консоль содержимое массива, но без повторов, 
т.е. только уникальные значения.*/

var ValuesA = [55,77,55,66,77];

var UsedH = {}; // ключ хэша - число, которое уже встречалось

for (var i = 0; i < ValuesA.length; i++) {
    var Value=ValuesA[i]; // очередное значение
    
    if (Value in UsedH) {// встречалось ли оно?
        continue; // если да - всё, берём следующее
    }
    
    UsedH[Value] = true; // если нет - запоминаем, что это значение уже встречалось
    console.log(Value); // выводим его в консоль  // 55 77 66
}