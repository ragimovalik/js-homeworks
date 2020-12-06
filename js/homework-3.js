// Задача 3-1
/*CRUD для свойств объекта
С - create (создать)
R - read (читать)
U - update (обновить)
D - delete (удалить)
Напиши скрипт, который, для объекта user, последовательно:
добавляет поле 'mood' со значением 'happy'
добавляет поле 'full time' со значением true
заменяет значение 'hobby' на 'skydiving'
заменяет значение 'premium' на false
в переменную message записывает содержимое объекта user:
для переменной keys присваивает массив свойств объекта, используя 
метод Object.keys()
с помощью оператора for...of
в формате ключ:значение
c переносом строки ('\n')*/
/*
let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};
//Write code under this line
user.mood = "happy";
user["full time"] = true;
user.hobby = "skydiving";
user["premium"] = false;

// console.log(user);

const keys = Object.keys(user);

// Write code under this line
for (const key of keys) {
  // message = `"${key}" : ${user[key]}`;
  message += key + " : " + user[key] + "\n";
}
console.log(message);
*/
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */
// Задача 3 - 2
/* Подсчет количества свойств в объекте
Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.
Циклы не должны использоваться */
/*
const countProps = function (obj) {
  "use strict";
  // Write code under this line
  return Object.keys(obj).length;
};
*/
// console.log(countProps({})); // 0
// console.log(countProps({ a: 1, b: 1 })); // 2
//console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5

// Задача 3 - 3
/* Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), которая принимает 
объект сотрудников и возвращает имя самого продуктивного 
(который выполнил больше всех задач). Сотрудники и кол-во выполненных 
задач содержатся как свойства объекта в формате "имя":"кол-во задач".*/

const findBestEmployee = function (employees) {
  ("use strict");
  // Write code under this line
  /*  // Решение рабочее

  // const str = "";
  const keys = Object.keys(employees);
  const values = Object.values(employees);
  const maxValue = Math.max(...Object.values(employees));
  // const maxValue = Math.max(...values);

  let maxValueKey = keys.indexOf();
  maxValueKey = values.indexOf(maxValue);
  return keys[maxValueKey] || "";

  // if (keys != "") {
  // }
  // else {
  //   return str;
  // }*/

 /* // Решение ещё одно (НЕ ЗАВЕРШЕННОЕ)

  const obj = Object.entries(employees);

  let maxValue = obj[0][1];
  let maxValueKey = obj[0][0];

  for (const employee of obj) {

    if (employee[1] > maxValue) {
      maxValue = employee[1];
      maxValueKey = employee[0];
    }
  }
    return maxValueKey;

  /*  let bestEmployee = '';
  let value = 0;
  const keys = Object.keys(employees);
  for (const key of keys) {
    if (employees[key] > value) {
      value = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};
*/

  // let key1 = "";
  // for (const key of Object.entries(employees)) {
  //   console.log(key[1]);
  //   key1 = Math.max(key[1]);
  //   console.log(key[1]);
  // }
  // for (const key of Object.keys(employees)) {
  //   console.log(`"${key}" : ${employees[key]}`);
  // }
};

// РЕШЕНИЕ ОЧЕРЕДНОЕ (МИТЯ 1)
/*const findBestEmployee = function (employees) {
  ("use strict");
  // Write code under this line

  const keys = Object.keys(employees);

  let bestScore = 0;
  let bestName = "";

  for (const key of keys) {
    if (employees[key] > bestScore) {
      bestScore = employees[key];
      bestName = key;
    }
  }

  return bestName;
};*/
/*(МИТЯ 2)
const findBestEmployee = function (employees) {
  ('use strict');
  // Write code under this line
  const keys = Object.keys(employees);
  const max = Math.max(...Object.values(employees));
  const indexOfMax = Object.values(employees).indexOf(max);
  return keys[indexOfMax] || '';
}*/
/*
// Объекты и ожидаемый результат

const developers = {
  // ann: 29,
  // david: 35,
  // helen: 1,
  // lorence: 99,
};

console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
*/
/*Задача 3-4
Суммирование значений свойств объекта
Напиши функцию countTotalSalary(employees) принимающую 
объект зарплат. Функция считает общую сумму зарплаты работников 
и возвращает ее. Каждое поле объекта, передаваемого в функцию, 
имеет вид "имя":"зарплата".*/
/* const countTotalSalary = function (employees) {
  "use strict";
  // Write code under this line
  let summ = 0;
  for (const value of Object.values(employees)) {
    summ += value;
  }
  return summ;
};*/
/* // Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500 */

/*
Задача 3-5
Оператор in и метод push
Напиши функцию getAllPropValues(arr, prop), которая 
получает массив объектов и имя свойства.
Функция возвращает массив значений определенного свойства 
prop из каждого объекта в массиве.
Используй метод push для добавления значения в массив и 
оператор in для проверки наличия свойства в объекте.
*/
/* function getAllPropValues(array, prop) {
  ("use strict");
  // Write code under this line
  let props = [];
  
  for (let i = 0; i < array.length; i++) {
    if (prop in array[i]) {
      props.push(array[i][prop]);
    }
  }
  return props;
}
// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];*/
// console.log(getAllPropValues(products, "name"));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]
// console.log(getAllPropValues(products, 'category'));
//  []

/*Задача 3-6
Суммирование значений свойства из массива объектов
Напиши функцию calculateTotalPrice(allProdcuts, productName), которая 
получает массив объектов и имя продукта (значение свойства name). 
Возвращает общую стоимость продукта (цена умноженная на количество).

/*
function calculateTotalPrice(array, prop) {
  "use strict";
  // Write code under this line
  let total = 0;

  for (const obj of array) {
    if (obj.name === prop) {
      total += obj.price * obj.quantity;
    }
  }
  return total;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];*/

// console.log(calculateTotalPrice(products, "Радар"));
// 9080
//console.log(calculateTotalPrice(products, 'Сканер'));
// 10200
//console.log(calculateTotalPrice(products, 'Захват'));
// 2400
//console.log(calculateTotalPrice(products, 'Дроид'));
// 2800
