// Объединение
/* 1. "..." - СПРЕД ОПЕРАТОР (РЕКОМЕНДЕД).Spread-оператор является современным методом объединения объектов. 
             При этом создается новый объект, который включает в себя все свойства из объединяемых объектов.*/
// 2. Object.assign
const developerInfo = {
    age: 25,
    exp: 3,
    name: `Maxim`,
};
const developerExtraInfo = {
    name: `Igor`,
    height: 193,
    isJunior: false,
};

// ... SPREAD OPERATOR! (Как и в массивах)
// const array =[
//     ...array1,
//     ...array2,
// ];

// 1:
const developer = { // !Если есть одинаковые ключи, то передаст свои значения ПОСЛЕДНИЙ ключ!
    ...developerInfo,
    ...developerExtraInfo,
    name: `Nastya`, // !Если ключи повторяютс, но мы хотим СВОЙ ОТДЕЛЬНЫЙ, то можно в спреде прописать!
}
console.log(`developer`,developer);

// 2: Object.assign
const developer2 = 
Object.assign
(/* Целевой объект, куда будем помещать*/developerInfo,
/* Источник (что будем помещать)*/developerExtraInfo);
console.log(`developer2`,developer2);


// Теория из КУРСА
// Spread-оператор

// Самый удобный и простой способ объединить несколько объектов в один — использовать spread-оператор. Этот способ очень похож на объединение массивов, который мы изучили ранее.

// Попробуем объединить два объекта car и carOwner в один — carFullInfo, а также добавим дополнительное свойство additionalInfo:

// const car = {
//   name: "Toyota Corolla",
//   year: 2017
// };

// const carOwner = {
//   ownerName: "Ivan Ivanov",
//   ownerAge: 27
// };

// const carFullInfo = {
//   ...car,
//   ...carOwner,
//   additionalInfo: "Дополнительная информация"
// };

// console.log(carFullInfo);
/*
{
  name: 'Toyota Corolla', 
  year: 2017, 
  ownerName: 'Ivan Ivanov',
  ownerAge: 27,
  additionalInfo: 'Дополнительная информация'
}
*/
// Spread-оператор является современным методом объединения объектов. При этом создается новый объект, который включает в себя все свойства из объединяемых объектов.

// Если при объединении объектов в них встречаются одинаковые ключи, то применяются те, которые идут последними. Это правило касается как одиночных свойств, так и свойств, полученных с помощью spread-оператора. Поэтому важно следить за порядком следования объектов и свойств:

// const obj1 = { x: 1, y: 1 };
// const obj2 = { x: 2, y: 2 };

// const unitedObj = {
//   ...obj1,
//   ...obj2,
//   y: 3
// };

// console.log(unitedObj.x); // Выведет 2
// console.log(unitedObj.y); // Выведет 3
// После объединения двух объектов с одинаковыми ключами x применилось значение из объекта, который был записан позже. Для свойства y также было применено последнее значение, заданное непосредственно в объекте unitedObj.

// Object.assign()

// Иногда нужно добавить свойства в существующий объект без создания нового объекта. В этом случае на помощь придёт метод Object.assign(), который копирует в целевой объект все свойства из других объектов:

// const car = {
//   name: "Toyota Corolla",
//   year: 2017
// };

// const carOwner = {
//   ownerName: "Ivan Ivanov",
//   ownerAge: 27
// };

// Object.assign(car, carOwner);

// console.log(car);
// /*
// {
//   name: 'Toyota Corolla', 
//   year: 2017, 
//   ownerName: 'Ivan Ivanov',
//   ownerAge: 27
// }
// */
// В данном примере мы скопировали все свойства из объекта carOwner в целевой объект car. При этом не понадобилось создавать дополнительных переменных.