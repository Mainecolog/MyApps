//          2. Инкапсуляция
            //#private  
// Приватные поля и методы нужны, 
// чтобы работать с ними исключительно в одном классе!

// Можем работать с ними, только в том классе, где они определены 
// Это скрытие данных при доступе вне класса или при наследовании.
// Ограничить досутп к методам или полям. Чтобы нельзя было к ним о
// братиться через точку или через дочерний класс/

// Инкапсуляция - private - 
// это объединение в одном месте данных и поведения, которое работает 
// с этими данными. Данные хранятся в свойствах, а поведение – в методах:


class Developer {
    #salary //!!!!!
    constructor(name,programmingLanguage){
        this.name = name;
        this.programmingLanguage = programmingLanguage;
        this.#salary = 3000; // огранииваем доступ через private #
    };
    startCoding(){
        this.#printProgrammingLanguage();
        console.log(this.#salary);
        console.log(`${this.name} начинает писать код!`);
    };
    #printProgrammingLanguage(){
        console.log(`Язык программирования: ${this.programmingLanguage}`);
    };
    
    get devSalary(){
        return this.#salary
    };

    set setSalary (salary){
        this.#salary = salary;
    }


}

const developer = new Developer (`Maxim`,`Java-Script`);
// console.log(developer);
// console.log(developer.name);
// console.log(developer.programmingLanguage);
// developer.startCoding();
// Все что выше - публичные методы обращения к полям и методам -  PIBLIC

class JuniorDeveloper extends Developer {
    constructor(name, programmingLanguage){
        super(name,programmingLanguage);
    }
};
const juniorDeveloper = new JuniorDeveloper(`Igor`,`Java-Script`);
// juniorDeveloper.printProgrammingLanguage() 
// Иногда нужно ограничеть доступ чере точку или через дочерние классы
// console.log(developer.#salary); 
developer.startCoding()

// DEV SET
console.log(developer.devSalary);
developer.setSalary = 5000;
console.log(developer.devSalary);