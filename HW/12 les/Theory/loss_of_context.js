// 1. Контекст может потеряться, когда мы вызываем функцию без какого-либо контекста (контекст.)
// 2. КОгда Функция задана "стрелочным" образом
const user = {
    name: `Matvey`,
    programmingLanguage: `JavaScript`,
    getName(){
        return this.name;
    },
    // getProgrammingLanguage: () => {
    //     return this.programmingLanguage;
    // }
    getProgrammingLanguage: function () {
        return this.programmingLanguage;
    }
};
console.log(user.getName()); // Matvey

const newGetName = user.getName;
console.log(`newGetName:`,newGetName()); // newGetName: 
// ПОтерялся контекст, из-за того, что вызываем newGetName без контекста, 
// поэтому наш контекст ссылается не на user, а на window
// ПРАВИЛО - THIS - "это объект перед точкой"
// Чтобы это исправить можно использоваться bind,call or apply:
console.log(`newGetName:`,newGetName.call(user)); // newGetName: Matvey. - ПРИСВОЙКА ОБЪЕКТА ВРУЧНУЮ

// 2. случай поетри контекста:
console.log(user.getProgrammingLanguage()); // JavaScript
// Но если мы поменяем функцию на стрелочную 
// ( в этот момент замена функции getProgrammingLanguage() на стрелочную)
// ТО console.log(user.getProgrammingLanguage())  -  undefined.
// Потому что у стрелочной функции нет своего this. 
// Поэтому this cсылается на контекст выше - window
// Даже не поможет зачада вручную контекста:
console.log(user.getProgrammingLanguage.call(user)); // undefined
//  Поэтому необходимо 
// ЗАДАВАТЬ ФУНКЦИИ при помощи !!!Function!!!
console.log(user.getProgrammingLanguage()); // JavaScript 
// Если функция задана через FUNCTION, 
// то не надо будет контекст добавлять вручную



// Для закрепления материала рассмотрим пример потери контекста this, причины потери и способы выхода из этой ситуации.

// Функции — это объекты

// Функции в JavaScript на самом деле являются объектами, поэтому могут быть переданы в качестве параметров, возвращены из функции и присвоены переменной. Это делает функции независимыми, они существуют сами по себе без привязки к объекту.

// Рассмотрим это на примере:

// const car = {
//   name: "Kia Rio",
//   year: 2017,
//   showYear() {
//     console.log(this.year);
//   }
// };

// const newShowYear = car.showYear;
// newShowYear(); // Выведет: undefined
// Здесь функция showYear() объявлена внутри объекта car. Однако мы можем пользоваться ей и в любом другом контексте, без привязки к объекту car. Для этого мы просто скопировали её в новую переменную newShowYear(). Но при попытке вызвать её возникла проблема…

// Потеря контекста

// При вызове новой функции можно ожидать, что она выведет название из объекта car, однако выводится undefined. Происходит это потому, что newShowName() вызывается из глобального контекста, и this в данном случае будет равен объекту window. В объекте window нет свойства с именем year, поэтому в консоль выводится undefined. 

// Как мы говорили ранее, значение this не предопределено заранее для функции. Привязка this осуществляется в момент вызова функции, а не в момент её определения. Поэтому важно не то, как и где была определена функция, а в каком контексте она вызывается.

// Таким образом, в примере выше складывается ситуация, которая выглядит как потеря контекста. Если быть более точными, то никакой потери не происходит — на самом деле, функция просто вызывается в другом контексте.

// Решение проблемы потери контекста

// Как мы изучили ранее, можно задать контекст вручную с помощью методов call(), apply() или bind(). Исправим проблему в нашем примере двумя способами:

// const car = {
//   name: "Kia Rio",
//   year: 2017,
//   showYear() {
//     console.log(this.year);
//   }
// };

// const newShowYear = car.showYear;
// newShowYear.call(car); // Выведет: 2017

// const boundShowYear = car.showYear.bind(car);
// boundShowYear(); // Выведет: 2017
// В первом случае мы вызвали новую функцию newShowYear() с нужным контекстом через метод call(). Теперь функция работает корректно и выводит значение свойства year.

// Во втором случае мы создали функцию boundShowYear() с предопределенным контекстом через метод bind(), что также помогло решить проблему потери контекста.

// Обрати внимание, что методы call(), apply() или bind() не сработают для стрелочных функций, так как они не создают собственный контекст и всегда захватывают this из окружающего контекста.

// Итоги

// В этом уроке мы познакомились с ключевым словом this и особенностями работы с ним:

// this — это ключевое слово, указывающее на текущий контекст вызова функции.
// Значение this может быть разным в зависимости от того, где и как была вызвана функция.
// В глобальном контексте this указывает на глобальный объект (window для браузеров).
// В методах объекта this указывает на сам объект.
// Стрелочные функции не имеют своего this и берут его из ближайшей внешней функции либо из глобального контекста.
// Методы bind(), call() и apply() позволяют явно задать контекст this для функции.