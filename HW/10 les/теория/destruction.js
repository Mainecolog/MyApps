
// Деструктуризация ------ [переменная1, переменная2,] или {}


//                                      Для МАСИВОВ

function calcValues(a,b) {
    return [ // возврашаем масив
        a + b,
        undefined,
        a * b,
        a / b,
    ]
};
const result = calcValues(42,10);
const sum = result[0];
const sub = result[1];
// МНОГО КОДА - - - - > деструктуризируем! 
console.log(`sum/sub`, sum,sub);

// Вместо отдельного обрашеения к массиву по индексу:

const [sum1,sub1] = result; 
console.log(`sum1/sub1`, sum1,sub1);

// МОжно не создавать result
const [sum2,sub2] = calcValues(42,10); // МОжно не создавать result
console.log(`sum2/sub2`, sum2,sub2);

// Что делать если нужен 1 и 3 индекс из объекта:

const [sum3,,mult3,...other3] = calcValues(42,10); 
console.log(sum3,mult3,other3); //52 420 [4.2] (вычитание проигнорировалось)
console.log(sum3,mult3,other3,sub); // 52 420 [4.2] 32
// если вместо вычитнаия - UNDEFINED
console.log(sum3,mult3,other3,sub); //52 420 [4.2] undefined 

// Если андефайн вместо одного из значений массива, 
// то можно задать значение по умолчанию самому
const [sum4,sub4 = `Вычитания нет!`,mult4,...other4] = calcValues(42,10); 
console.log(sum4,mult4,other4,sub4); // 52 420 [4.2] 'Вычитания нет!'
// Если значение все-таки есть, то оно выведится,
// а значение по умолчанию учитываться не будет.


//                                      Для Объектов 

const person = {
    // name: `Max`,
    age: 20,
    address: {
        country: `Russia`,
        city: `Moscow`,
    }
}
//const name = person.name ТОЖЕ САМОЕ:
// const {name,age} = person;
// console.log(name,age); // Max 20

// Если ключа в объектке нет, то:
// const {name, age, car } = person;
// console.log(name, age, car); // Max 20 undefined

// Можно задать по умолчаниюЖ
// const {name, age, car=`Машины нет!` } = person;
// console.log(name, age, car); //Max 20 Машины нет!

// Если переменна язанята, то можно ее назвать ее по-другому (если ключ определен, то "по-умолчанию" не вернется):
// const {
//     name: firstName = `Без имени`, 
//     age, 
//     car = `Машины нет!`,
//     address: {city: homeTown, country}
// } = person;
// console.log(firstName, age, homeTown, country); // Max 20 Moscow Russia

//  Можно применять REST
// const {name, ...info} = person;
// console.log(name, info); // Max {age: 20, address: {…}}

// Пример без деструктаризации:

//  function logPerson(per) {
//     console.log(per.name+ ` ` + per.age);
//  }
//  logPerson(person); // Max 20

// Пример с деструктаризацией:

function logPerson({name: firstName = `Matvey`, age}) {
    console.log(firstName+ ` ` + age);
};
logPerson(person); // Matvey 20