// extends;
// super;
// instanceof;

// НАСЛЕДОВАНИЕ
// - создание дочерних классов на основе базовых
// на основе класса - создать другой класс и добавлять уже те методы и поля, которые нужны.
class Plane{
    constructor(type,numberOfPassengers){
        this.type = type;
        this.numberOfPassengers = numberOfPassengers;
    };
    startFlight (){
        console.log(`Полетели!`);
    };
    setNumberOfGuns()  {}
};

//   дочерний класс    родителський класс
class MilitaryPlane extends Plane  {
    constructor (type){
        super(type,0) // вызывает методы от родительского класса
/* ключевое слово SUPER - вызывает конструктор родительского класса */
        this.numberOfGuns = 0;
    };
    startFlight(){
        console.log(`Полетели в атаку!`);
    };
    setNumberOfGuns (numberOfGuns){
        this.numberOfGuns = numberOfGuns;
    };
    shoot(){
        console.log(`Стреляем!`);
    };
};
// const plane = new Plane (`Пассажирский`, 100);
// console.log(plane);
// plane.startFlight()
const militaryPlane = new MilitaryPlane (`military`)
console.log(militaryPlane);
militaryPlane.startFlight();
// вызывает метод дочки потом родителя, если нет в дочке
militaryPlane.setNumberOfGuns(4);
militaryPlane.shoot();
console.log(militaryPlane);
// console.log(`plane`,plane);

//instanceof (првоерка принадлежности к определенному классу)
console.log(militaryPlane instanceof MilitaryPlane); // true
console.log(militaryPlane instanceof Plane); // true 
class Dog {};
console.log(militaryPlane instanceof Dog); //false


// ОП расшифровывается как объектно-ориентированное программирование. ООП – это методология программирования, при которой программа представлена в виде совокупности объектов.

// ООП – это не какой-то дополнительно устанавливаемый пакет или библиотека. Это, можно сказать, одна из философий/парадигм программирования, которую мы можем использовать в разработке. Она закреплена лишь устно и имеет в себе несколько принципов, составляющих основу ООП. Далее базово разберем эти принципы.

// Наследование – это создание дочерних классов на основе родительских.


// Допустим, у нас есть класс для транспорта:

// class Transport {
//   constructor(type, category) {
//     this.type = type;
//     this.category = category;
//   }
//   sayInfo() {
//     console.log(`Тип данного транспорта: ${this.type}.`);
//   }
//   move() {
//     console.log('В путь!');
//   }
// };
// Любой транспорт имеет тип: автомобиль, самолет, корабль и т. д. И сферу применения: пассажирский, грузовой, военный и т. д.

// У каждого транспорта есть свои характеристики, которые не подойдут под описание другого. Поэтому, если мы начнем собирать все характеристики в один класс, у нас получится каша. А если мы для каждого типа начнем создавать новый собственный класс, то получится большое количество дублирования в коде (одинаковые методы, одинаковые свойства и т. д.). Чтобы этого избежать, организуем наследование, с помощью ключевого слова extends:

// class Transport {
//   constructor(type, category) {
//     this.type = type;
//     this.category = category;
//   }
//   sayInfo() {
//     console.log(`Тип данного транспорта: ${this.type}. Сфера применения: ${this.category}`);
//   }
//   move() {
//     console.log('В путь!')
//   }
// };

// // Класс автомобиля
// class Car extends Transport {
//   constructor(type, category) {
//     super(type, category);
//     this.numOfWheels = 4;
//   }
//   move() {
//     console.log('Поехали!')
//   }
// };

// // Класс самолета
// class Plane extends Transport {
//   constructor(type, category) {
//     super(type, category);
//     this.numOfWheels = 3;
//     this.numOfWings = 2;
//   }
//   move() {
//     console.log('Полетели!')
//   }
// };

// const car = new Car('Автомобиль', 'Пассажирский');
// console.log(car);
// // Car {type: 'Автомобиль', category: 'Пассажирский', numOfWheels: 4}

// const plane = new Plane('Самолет', 'Грузовой');
// console.log(plane);
// // Plane {type: 'Самолет', category: 'Грузовой', numOfWheels: 3, numOfWings: 2}
// Итак, мы создали классы Car и Plane на основе родительского класса Transport.

// Разберем создание дочернего класса подробнее:

// Ключевое слово extends используется для создания дочернего класса на основе родительского класса.
// В constructor() у дочерних классов можно увидеть такую запись, как super(). C помощью ключевого слова super мы получаем свойства и методы родительского класса. В данном случае с помощью него мы вызвали родительский конструктор и передали нужные аргументы.
// Также, как можно заметить, мы переопределили метод move() в обоих дочерних классах. Таким образом, для классов Car и Plane результат работы данного метода будет разный. Если бы мы его не переопределили, как в случае с методом sayInfo() родительского класса, тогда дочерние классы вызывали бы родительский метод:
// car.sayInfo();
// // Тип данного транспорта: Автомобиль. Сфера применения: Пассажирский
// car.move();
// // Поехали!

// plane.sayInfo();
// // Тип данного транспорта: Самолет. Сфера применения: Грузовой
// plane.move();
// // Полетели!
// instanceof

// С помощью оператора instanceof мы можем проверить принадлежность объекта к классу:

// class FirstClass {};
// class SecondClass {};

// const obj = new FirstClass();

// console.log(obj instanceof FirstClass); // true
// console.log(obj instanceof SecondClass); // false
// Мы создали два класса FirstClass и SecondClass. Затем создали объект obj на основе класса FirstClass и проверили полученный объект на принадлежность. Так как наш объект принадлежит FirstClass, в первом случае вывелось true, а во втором случае, соответственно, мы получили false.