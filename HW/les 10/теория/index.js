//  Объекты
// Объект — это ассоциативный массив.
// В обычных массивах мы обращаемся к элементам по их индексу. 
// В ассоциативных массивах доступ к элементам осуществляется по ключу-строке:

    // ФОРМУЛА //
// Нельзя переопределить (перезадать developer = {}), но имзенять внутри можно!
// const developer = {
//     key: value,
// }

    // Теория //

const developer = {
    name: `Maxim`,
    job: `Front-End разработчик`,
    experience: 24,
    jobAllInfo: {
        type: `Front-End`,
        framework: `ReactJS`,
    }
}
console.log(`developer`,developer);

// Как получать значения обьекта по его ключу:
// 1 .key

// console.log(`name`,developer.name);
// console.log(`jobAllInfo`,developer.jobAllInfo);

// // 2 .[`key`]

// console.log(`name`,developer[`name`]);

// пример:
const car = {
    name: "Toyota Corolla"
  };
  
  const key = "color";
  car[key] = "red";
  
  console.log(car); 
  // { name: 'Toyota Corolla', color: 'red' }

// //  Особенности:

// const key = `name`;
// console.log(`name`, developer.key);
// //  Будет `undefined`, поэтому, если есть переменная key = `name`, 
// // и по этому key нужно получить значение из обьекта.
// // В этом случае [], потому что такогго ключа, как key в обьекте нет!
// console.log(`name`, developer[key]);
// // Вот так выведится name - `Msxim`

// С помощью "." и "[]" можно создавать цепочки образения к объектам
// 1:
console.log(`type`, developer.jobAllInfo.type);
// 2:
console.log(`framework`,developer[`jobAllInfo`][`framework`]);

// Короткая запись:
// Короткая запись свойств

// На практике зачастую возникает необходимость создания 
// объекта со свойствами, имена которых аналогичны параметрам функции или переменным:

function createCar(name, year) {
  return {
    name: name,
    year: year
  };
}
// Для таких случаев есть специальная короткая запись свойств.
// Такой код будет аналогичен предыдущему:

function createCar(name, year) {
  return {
    name,
    year
  };
}