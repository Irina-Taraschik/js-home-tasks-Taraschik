class THashStorage {
  constructor() {
    this.store_ = {}; // хранилище для значений
    // подчеркивание в конце переменной = она приватная
  }

  AddValue(key,value) {
    this.store_[key] = value; // сохраняем значение в store
  };

  GetValue(key) {
    return this.store_[key];
  };

  DeleteValue(key) {
    if (key in this.store_) {
      delete this.store_[key]
    }
  };

  GetKeys() {
    return Object.keys(this.store_);
  };
}

var DrinkStorage = new THashStorage();

var buttonAdd = document.getElementById("button-add");
var buttonGet = document.getElementById("button-get");
var buttonDelete = document.getElementById("button-delete");
var buttonList = document.getElementById("button-list");
var info = document.getElementById("information");

buttonAdd.onclick = function() {
  var name = prompt('Введите название коктейля');
  var isAlcohol = confirm('Этот напиток алкогольный?');
  isAlcohol ? isAlcohol = 'да' : isAlcohol = 'нет';
  var recipe = prompt('Напишите рецепт');
  DrinkStorage.AddValue(name, {name, isAlcohol, recipe});
  console.log('Coctail ' + name + ' added', DrinkStorage.GetValue(name));
};

buttonGet.onclick = function() {
  var name = prompt('Название напитка для информации');
  var inf = DrinkStorage.GetValue(name);
  info.innerHTML = 'Напиток: ' + inf.name + '  Алкогольный: ' + inf.isAlcohol + '  Рецепт: ' + inf.recipe;
};

buttonDelete.onclick = function() {
  var name = prompt('Что удалить?');
  DrinkStorage.DeleteValue[name];
};

buttonList.onclick = function() {
  info.innerHTML = DrinkStorage.GetKeys()
};