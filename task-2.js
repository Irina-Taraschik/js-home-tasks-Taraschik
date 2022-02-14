// Задание 2.
// У объекта есть свойство className, которое хранит список 
// css класов – слов, разделенных пробелами. Напишите функцию 
// придуматьХорошееИмя(obj, cls), которая удаляет класс cls, если он есть.

var obj1 = {
  className: 'open menu menu'
};

function removeClass(obj, cls) {
  var classes = obj.className ? obj.className.split(" ") : []; // ищем нужный класс (условие) ? true : false
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls){
      classes.splice(i, 1);
      i--;
    }
  }
  obj.className = classes.join(' ');
}

removeClass(obj1, "menu");
console.log(obj1);





