// CALL - BIND - APPLY
//  Используются исключительно для функций.
//  Помогают привязать к функции определенный контекст. С помощью них можно заменить слово "this"  на другйо объект.

//  bind - создает новую функцию с новым контекстом и переданными параметрами, параметр как угодно (массив или запятая)

//  call - вызывает функцию с новым контекстом, который задается как первый параметр , параметр  через запятую. 
// "одалживание метода" -  можно вызвать метод любого объекта и передать ему в качестве контекста this другой объект.

//  apply - вызывает функциюс новым контекстом, который задается как первый параметр , параметр через массив


// Синтаксисы методов:
// BIND: const newFunc = func.bind(context);
// APPLY: func.apply(context, [arg1, arg2, ...]);
// CALL: func.call(context, arg1, arg2, ...).


const maineHero = {
    fullName: `SpiderMan`,
    health:  65,
    strength: 5,
};
const badHero = {
    fullName: `Joker`,
    health:  55,
    strength: 10,
};
function printHeroInfo(extraInfo = ``) {
    console.log(`this`,this); // window
    console.log(`Имя:  ${this.fullName}, Здоровье: ${this.health}, Сила: ${this.strength}, ${extraInfo}`); 
    //Имя:  undefined, Здоровье: undefined, Сила: undefined,  - потомучто надо задать контекст для THIS
    // Для этого и нужны bind, call, apply. 
}; 
// CALL and APPLY
printHeroInfo.call(badHero, `Роль: Злодей`);// Имя:  Joker, Здоровье: 55, Сила: 10, Роль: Злодей
printHeroInfo.apply(badHero, [`Роль: Злодей`]); //Имя:  Joker, Здоровье: 55, Сила: 10, Роль: Злодей
//  Разница в call и apply: в указании параметров в (). в call - через запятую, в apply - как массив.

// BIND:  отличие от call и apply - он не вызывает функцию, а создает новую функцию c нвоым контекстом
const bindedPrintHeroInfo = printHeroInfo.bind(maineHero, `Роль: Герой`);
bindedPrintHeroInfo() // Имя:  SpiderMan, Здоровье: 65, Сила: 5, Роль: Герой

// Одалживание метода:
const car = {
    name: "Toyota Corolla",
    showName() {
      console.log(this.name);
    }
  };
  
  const bike = {
    name: "GT Avalanche"
  };
  
  car.showName(); // Toyota Corolla
//   Здесь объект bike не имеет собственной функции для вывода названия. 
//   Нужный метод есть у объекта car, и с помощью метода call() мы можем "одолжить" и использовать его:
  
  car.showName.call(bike); // GT Avalanche




const user = {
    name: `Matvey`,
    dateOfBirth: 1998,
   // 1 способ создания функции внутри объекта
    getName () {
        // return user.name; // Если будет где-то еще name, то все сломается, поэтому неуниверсально =>
        return this.name; // this ссылается на объект user, поэтому наш код универсальный
    },
    calculateAge() {
       const curYear = new Date().getFullYear();
       return curYear - this.dateOfBirth; // 25
    },
    // 2 способ создания функции внутри объекта
    getAllInfo: function () {
        const age = this.calculateAge();
        console.log(`Имя: ${this.name}, Возраст: ${age}`);
    }
};

// call:
const user2 = {
    name: `Igor`,
    dateOfBirth: 2001,
};
// Т.е. ключевое слово "This" ссылается на другой объект (рабоатет только с функциями, если поставит просто ключ, то не сработает)
// const user2Name = user.getName.call(user2); // Мы заменяем this на user2 // Igor
// const user2CalculateAge = user.calculateAge.call(user2); // 22
// console.log(`user2Name: `,user2CalculateAge);

//                       Теория из курса
// Метод call()

// Метод call() позволяет вызвать функцию с указанным значением контекста this.

// Синтаксис метода:

// func.call(context, arg1, arg2, ...)
// В качестве аргументов метод call() принимает:

// объект, который будет подставлен в качестве контекста this.
// список аргументов функции через запятую.
// Рассмотрим пример вызова одной и той же функции с разными объектами в качестве this:

// function showName() {
//   console.log(this.name);
// }

// const car = { name: "Toyota Corolla" };
// const carOwner = { name: "Ivan Ivanov" };

// showName.call(car); // Toyota Corolla
// showName.call(carOwner); // Ivan Ivanov
// Поскольку у обоих объектов есть свойство name, мы смогли вызвать функцию showName(), указав в качестве контекста эти объекты.

// Одалживание метода

// Метод call() позволяет использовать технику, которая называется "одалживание метода". Суть её в том, что можно вызвать метод любого объекта и передать ему в качестве контекста this другой объект.

// Пример одалживания метода:

// const car = {
//   name: "Toyota Corolla",
//   showName() {
//     console.log(this.name);
//   }
// };

// const bike = {
//   name: "GT Avalanche"
// };

// car.showName(); // Toyota Corolla
// Здесь объект bike не имеет собственной функции для вывода названия. Нужный метод есть у объекта car, и с помощью метода call() мы можем "одолжить" и использовать его:

// car.showName.call(bike); // GT Avalanche
// Метод apply()

// Метод apply() работает практически так же, как call(). Единственное отличие состоит в способе передачи параметров функции. Метод call() принимает параметры в виде списка через запятую, а apply() — в виде массива:

// func.apply(context, [arg1, arg2, ...])
// Для примера определим функцию, которая выводит в консоль информацию об объекте. В качестве параметров она принимает названия двух ключей:

// function showInfo(key1, key2) {
//   console.log(this[key1] + " " + this[key2]);
// }
// Вызовем эту функцию для объекта car поочередно с помощью методов call() и apply() с разными вариантами параметров:

// const car = {
//   name: "Kia Rio",
//   year: 2021,
//   modification: "1.6 AT"
// };

// // call
// showInfo.call(car, "name", "year"); // Kia Rio 2021
// showInfo.call(car, "name", "modification"); // Kia Rio 1.6 AT

// // apply
// showInfo.apply(car, ["name", "year"]); // Kia Rio 2021
// showInfo.apply(car, ["name", "modification"]); // Kia Rio 1.6 AT
// Мы получили одинаковый результат работы обоих методов. Отличается только способ передачи параметров при их вызове.
