// SPREAD - "разворачивает" массивы и объекты, и для создания НОВЫХ массивов и объектовю Трансформации в более удобне типы данных
// 
// REST - собирает все параметры либо в массив, либо в объект


// const citiesRussia = [`Moscow`,`St.P`,`Kazan`,`Novosib`];
// const citiesEurope = [`Berlin`,`Praga`,`Paris`];

// const citiesRussiaWithPopularion = {
//     Moscow: 20,
//     StP: 8,
//     Kazan: 5,
//     Novosib: 3, 
// };
// const citiesEuropeWithPopulation = {
//     Moscow: 26,
//     Berlin: 10,
//     Praga: 3,
//     Paris: 2,
// };

// //                                  SPREAD ... (С массивами)

// console.log(citiesRussia); // (4) ['Moscow', 'St.P', 'Kazan', 'Novosib']
// console.log(...citiesRussia); // Moscow St.P Kazan Novosib (не массив, а строки)

// // spread - разворачивает тот массив, с которым мы работает
// // "Разворот" массива нужен для клонирования в другом массиве
// const allCities = [...citiesRussia];
// console.log(allCities); // (4) ['Moscow', 'St.P', 'Kazan', 'Novosib']
// // Получается другая ссылка при клонировании 

// // ТАким образом можем объединять несколько массивов.
// const all = [...citiesRussia,...citiesEurope];
// console.log(all); // (7) ['Moscow', 'St.P', 'Kazan', 'Novosib', 'Berlin', 'Praga', 'Paris']

// // можно добавлять и другие элементы (где угодно по расположению):
// const allWith = [...citiesRussia,`Abakan`,...citiesEurope];
// console.log(allWith); // (8) ['Moscow', 'St.P', 'Kazan', 'Novosib', 'Abakan', 'Berlin', 'Praga', 'Paris']


// // Раньше через concat:
// const concatCities = citiesEurope.concat(citiesRussia);
// console.log(concatCities); //(7) ['Berlin', 'Praga', 'Paris', 'Moscow', 'St.P', 'Kazan', 'Novosib']


// //                                  SPREAD ... (С объектами)

// console.log(citiesRussiaWithPopularion); //{Moscow: 20, StP: 8, Kazan: 5, Novosib: 3}
// // console.log(...citiesRussiaWithPopularion); // Ошибка
// // не получится, "некуда складывать ключи"
// // Поэтому необходимо складывать В НОВЫЙ ОБЪЕКТ:

// console.log({...citiesRussiaWithPopularion}) //{Moscow: 20, StP: 8, Kazan: 5, Novosib: 3}
// // Здесь мы использовали SPRED оператор, чтобы СКЛОНИРОВАТЬ и СОЗДАТЬ НОВЫЙ ОБЪЕКТ

// console.log({...citiesRussiaWithPopularion,...citiesEuropeWithPopulation}); //{Moscow: 20, StP: 8, Kazan: 5, Novosib: 3, Berlin: 10, …}
// // происходит УМНЫЙ MERGE
// // Т.е. Если ключи повторяются, то вернет последний ключ

// //                        Практическое применение SPREAD:
// // Задача 1: Найти максимальное число у объекта max 
// const numbers = [5,37,32,17];
// // console.log(Math.max(5,37,32,17));
// console.log((Math.max(numbers))); // Nan
// // Но если мы используем SPREAD:
// // РЕШЕНИЕ:
// console.log((Math.max(...numbers))); //37 - работает


// // До спреда (раньше так делали):
// console.log(Math.max.apply(null,numbers));


//                                  REST (С массивом)

// REST ... (такой же синтаксис, но другое применение):

function sum(a,b) {
    return a+b
}
const numbersRest = [1,2,3,4,5];
// SPREAD:
console.log(sum(...numbersRest)); // 3 
//3 - потому что разбили массив и сложили первые 2 (1 и 2)

// Пример 1

function sum1(a,b,...rest) {
    console.log(rest); // [3,4,5]
    console.log(...rest); // 3 4 5
    return a+b 
}
const numbersRestNew = [1,2,3,4,5];
// REST:
console.log(sum1(...numbersRestNew));

function sum2(a,b,...rest) {
    return a+b+rest.reduce((a,i)=> a+i ,0)
}
const numbersRestNew2 = [1,2,3,4,5];
// REST:
console.log(sum2(...numbersRestNew2));

// Пример 2:

const a = numbersRestNew2[0];
const b = numbersRestNew2[1];

console.log(a,b); // Длинная запись

const [c,d] = numbersRestNew2 //- Деструктуризация // 1 2
console.log(c,d);

const [e,f,...other] = numbersRestNew2 //- Деструктуризация //1 2
// первые 2 элемента `e` и `f`, а остальные в `other` // 1 2 (3) [3, 4, 5]
console.log(e,f, other);

//                                   REST (с объектом)

const person = {
    name: `Max`,
    age: 20,
    city: `Moscow`,
    russian: `Russia`,
};
// const {name, age} = person; // name age от массива 
// console.log(name,age);

// Чтобы собрать остальные  элементы объекта в другой объект:
const {name, age,...address} = person; 
console.log(name,age,address); // Max 20 {city: 'Moscow', russian: 'Russia'}
