


//  ПЕРЕБОР ОБЪЕКТОВ

// 1. FOR In
// 2. Object.keys
// 3. Object.values.
// 4. Object.entries.


const goodInfo = {
    id: 1,
    price: 80,
    currency: `$`,
    name: `shoes`,
};
console.log(`goodInfo`,goodInfo);


// for...of используется для перебора элементов массива и других перебираемых (итерируемых) объектов.
// for...in используется для перебора свойств объекта.


// for in
for (const key in goodInfo){
    console.log(`key`,key);
    const value = goodInfo[key];
    console.log(`value`,value);
}

// Object.keys. Выводит массив с кючами
const keys = Object.keys(goodInfo);
console.log(`keys`,keys);
// Object.values. Выводит массив с значениями
const values = Object.values(goodInfo);
console.log(`values`,values);
// Object.entries. Объединятеся и ключи и значения.
// ПОлучаем массив с массивами по отдельности ключ - значение
const entries = Object.entries(goodInfo);
console.log(`entries`,entries);

console.log(`entries[0]`,entries[0]); // МОжно выводить по отдельности массивы

// //                                   ТЕОРИЯ ИЗ КУРСА

// Цикл for...in

// Перебрать все свойства объекта можно с помощью цикла for...in:

// const car = {
//   name: "Toyota Corolla",
//   year: 2017,
//   isNew: false
// };

// for (const key in car) {
//   console.log(`${key}: ${car[key]}`);
// }

// // Вывод:
// // name: Toyota Corolla
// // year: 2017
// // isNew: false
// Данный код выведет в консоль все ключи (key) вместе со значениями (car[key]).

// Object.keys() и Object.values()

// Методы Object.keys() и Object.values() возвращают массив названий (ключей) и значений свойств соответственно. Попробуем воспользоваться этими методами с разными вариантами вывода информации.

// Выведем список пар "ключ: значение" с помощью цикла for...of:

// const car = {
//   name: "Toyota Corolla",
//   year: 2017,
//   isNew: false
// };

// const keys = Object.keys(car);
// for (const key of keys) {
//   console.log(`${key}: ${car[key]}`);
// }

// // Вывод:
// // name: Toyota Corolla
// // year: 2017
// // isNew: false
// Обрати внимание на разницу между циклами for...of и for...in:

// for...of используется для перебора элементов массива и других перебираемых (итерируемых) объектов.
// for...in используется для перебора свойств объекта.
// Сделаем то же самое в одну строку с помощью метода forEach() и стрелочной функции:

// const car = {
//   name: "Toyota Corolla",
//   year: 2017,
//   isNew: false
// };

// Object.keys(car).forEach(key => console.log(`${key}: ${car[key]}`));

// // Вывод:
// // name: Toyota Corolla
// // year: 2017
// // isNew: false
// Аналогичным образом работает метод Object.values(). Выведем значения всех свойств объекта:

// const car = {
//   name: "Toyota Corolla",
//   year: 2017,
//   isNew: false
// };

// Object.values(car).forEach(value => console.log(value));

// // Вывод:
// // Toyota Corolla
// // 2017
// // false
// Object.entries()

// Метод Object.entries() возвращает массив записей для объекта, каждая из которых также представляет собой массив. Первым элементом этого массива является название свойства, а вторым — его значение. Например, результат работы этой функции может выглядеть так: [ ["name", "Toyota Corolla"], ["year", 2017], ["isNew", false] ].

// Пример использования метода для вывода списка ключей объекта и значений:

// const car = {
//   name: "Toyota Corolla",
//   year: 2017,
//   isNew: false
// };

// Object
//   .entries(car) // Вернет массив [ ["name", "Toyota Corolla"], ... ]
//   .forEach(arr => console.log(`${arr[0]}: ${arr[1]}`));

// // Выведет:
// // name: Toyota Corolla
// // year: 2017
// // isNew: false
// Метод Object.entries() возвращает многомерный массив, то есть массив, элементами которого являются другие массивы. В каждом из этих подмассивов arr в первом элементе arr[0] хранится название свойства, а во втором arr[1] — его значение.

// Однако есть более элегантный способ работы с массивами в параметрах. Рассмотрим тот же код, но с использованием деструктуризации:

// Object
//   .entries(car)
//   .forEach(([key, value]) => console.log(`${key}: ${value}`));
// Здесь мы "разобрали" массив на отдельные значения. Делается это с помощью квадратных скобок с указанием переменных, куда нужно поместить значения из массива. Таким образом, список аргументов стрелочной функции ([key, value]) означает, что первое значение из записи будет помещено в переменную key, а второе значение в переменную value.