// - this
// - Создание функции внутри объекта 2мя способами




// this - это ключевое слово, которое казывает на текущий контекст выполнения кода.
// this - object
console.log(`this`,this); // window - т.е. ссылается на глобальный объект (для Chrome - window, для NodeJS - global);

// Чаще всего используется именно в объектах:
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
       return curYear - this.dateOfBirth;
    },
    // 2 способ создания функции внутри объекта
    getAllInfo: function () {
        const age = this.calculateAge();
        console.log(`Имя: ${this.name}, Возраст: ${age}`);
    }
};
console.log(user.getName()); // вызвали функцию, как ключ объекта. // Matvey
console.log(user.calculateAge()); // 25
user.getAllInfo();

// ВАЖНО: "this" в объекте

// Как сказано выше, this — это объект, который "владеет" кодом, который сейчас выполняется. 
// Поэтому, при обращении к this из метода объекта, это ключевое слово будет указывать на этот объект:

const car = {
    name: "Toyota Corolla",
    year: 2017,
    owner: {
      name: "Ivanov Ivan", // 2 раза name, но this к своему name
      experience: 5,
      getInfo() {
        console.log(this.name, this.experience);
      }
    }
  };
  
  car.owner.getInfo(); // Выведет: Ivanov Ivan 5 !!!



//   this и Стрелочные функции:

// Стрелочные функции отличаются от обычных в плане работы с this. 
// Они не имеют своего "собственного" this, а берут его из внешней функции, в которой определена эта стрелочная функция. 
// Если стрелочная функция не вложена в обычную функцию, то значением this будет глобальный объект.

// Рассмотрим работу с this в стрелочных функциях на примерах:

// 1. Глобальная стрелочная функция
const globalArrowFunc = () => console.log(this);

const obj = {
  // 2. Стрелочная функция в объекте
  objArrowFunc: () => console.log(this),
  objFunc() {
    // 3. Вложенная стрелочная функция
    const nestedObjFunc = () => console.log(this);
    nestedObjFunc();
  }
};

globalArrowFunc(); // window
obj.objArrowFunc(); // window
obj.objFunc(); // object