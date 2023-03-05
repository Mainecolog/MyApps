// Статичстические поля и методы. Если используем только в классе.
// нельзя использовать this.
class Car {
//    Если  нет THIS, либо не принадлежит объекту, а принадлежит классу
    static isCar(car){ // Статический метод.
        return car instanceof Car;
    };
    static #initialParams = {
        name: `Audi`,
        maxSpeed: 150,
    }
    constructor(name,maxSpeed){
        this.name = name || Car.#initialParams.name;
        this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed;
    };
    drive(){
        console.log(`Машина ${this.name} сейчас в пути.`);
    };
};
const car = new Car();

//Благодаря ститческому полю или методу - 
// не надо создавать новый экземпляр с помощью NEW.
// const animal = {};
//             class.method(obj)
// const isCar1 = Car.isCar(car) // true
// const isCar2 = Car.isCar(animal); // false
// console.log(isCar2);
// car.isCar(animal); // ERR is NOT A FUNC
// При пустых параметрах будет подставлять заданные начальные параметры
console.log(car); // Car {name: 'Audi', maxSpeed: 150}


// Также в классах существуют статические поля и методы. Давай посмотрим, как они создаются:

// class SimpleClass {
//   static staticProperty = 'Я – статичное свойство';
//   static staticMethod() {
//     return 'Я – статичный метод';
//   }

//   constructor(value1, value2) {
//     this.value1 = value1;
//     this.value2 = value2;
//   }

//   foo() {
//     console.log(this.value1, this.value2);
//   }
// };

// console.log(SimpleClass.staticProperty) // Я статичное свойство
// console.log(SimpleClass.staticMethod()) // Я – статичный метод
// Итак, чтобы создать статический метод или поле, достаточно написать перед ним ключевое слово static.

// Их главная особенность в том, что для того чтобы получить к ним доступ, нам не нужно создавать экземпляр класса. Мы можем к ним обратиться непосредственно через класс. 

// Если мы попытаемся вызвать данный метод через экземпляр класса obj1, то получим ошибку:

// const obj = new SimpleClass('Hello', 'world');

// // Обычный метод
// obj.foo(); // Hello world

// // Статический метод
// obj.staticMethod();
// // Uncaught TypeError: obj.staticMethod is not a function
// Таким образом, чтобы обратиться к статическому полю или методу, нам нужно обратиться к классу и через точку написать необходимое поле или метод.

// Вообще статические методы/свойства нужны тогда, когда наше свойство или метод не принадлежит конкретному объекту, а относится именно к классу.

// Например, есть класс Person:

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person1 = new Person('Алекс', 25);
// const person2 = new Person('Игорь', 30);
// С помощью него мы можем создавать объекты, передавая имя и возраст. Представим, что мы хотим создать функцию, которая будет проверять, является ли объект “человеком”:

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// function isPerson(obj) {
//   return obj instanceof Person;
// }

// const person1 = new Person('Алекс', 25);
// const person2 = {};

// console.log(isPerson(person1)); // true
// console.log(isPerson(person2)); // false
// Функция работает, но разумнее было бы ее реализовать в классе, так как данный функционал относится к классу, но в то же время он не относится к конкретному объекту. Плюс, таким образом, мы не засоряем наше глобальное пространство новой функцией isPerson(). Давай реализуем статический метод:

// class Person {
//   static isPerson(obj) {
//     return obj instanceof Person;
//   }

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person1 = new Person('Алекс', 25);
// const person2 = {};

// console.log(Person.isPerson(person1)); // true
// console.log(Person.isPerson(person2)); // false
// Теперь мы можем вызывать статический метод Person.isPerson() и проверять объекты. Что-то подобное мы уже могли встречать, например статический метод Array.isArray().

// Важно отметить, что статические свойства и методы также наследуются для дочерних классов. 

// Давай посмотрим на еще один пример:

// class SimpleClass {
//   static defaultParams = {
//     value1: 'I love',
//     value2: 'JavaScript',
//   }

//   constructor(value1, value2) {
//     this.value1 = value1 || SimpleClass.defaultParams.value1;
//     this.value2 = value2 || SimpleClass.defaultParams.value2;
//   }

//   sayHi() {
//     console.log(this.value1, this.value2);
//   }
// };
// Здесь мы создали статическое свойство defaultParams со значением в виде объекта со свойствами value1 и value2. В конструкторе для свойств мы прописали значения вида value1 || SimpleClass.defaultParams.value1. Обрати внимание, что внутри конструктора и других методов для получения статических свойств/методов нужно обращаться через название класса SimpleClass.defaultParams.value1 (или также можно this.constructor.defaultParams.value1). 

// Таким образом, мы задали значения по умолчанию для свойств. То есть, если при создании экземпляра класса, например, в параметр value1 не было передано значение, тогда свойству value1 присвоится значение из объекта defaultParams.

// Проверим работу данного кода:

// // Передаем параметры
// const obj1 = new SimpleClass('Hello', 'world!');
// obj1.sayHi(); // Hello World!

// // Не передаем параметры
// const obj2 = new SimpleClass();
// obj2.sayHi(); // I love JavaScript
// В первом случае метод sayHi() вывел сообщение со строками, переданными в параметры. Во втором случае метод вывел сообщение со строками по умолчанию.

// Кроме этого, статические методы и поля мы также можем делать приватными:

// class SimpleClass {
//   static #defaultParams = {
//     value1: 'I love',
//     value2: 'JavaScript',
//   }

//   constructor(value1, value2) {
//     this.value1 = value1 || SimpleClass.#defaultParams.value1;
//     this.value2 = value2 || SimpleClass.#defaultParams.value2;
//   }
//   sayHi() {
//     console.log(this.value1, this.value2);
//   }
// };
// Результат работы кода в таком случае не изменится, но теперь вне класса у нас не будет доступа к #defaultParams:

// console.log(SimpleClass.#defaultParams);
// // Uncaught SyntaxError: Private field '#initialParams' must be declared in an enclosing class