// Абстракция 
// Использование только тех характериситик объекта, которые с наибольшей точностью представляют его в той или иной системе

// Класс футболер - абстрактный. Он описывает общие параметры.
// С помощью абстрактных классов - создают дочерние, более конкретизирующие
class Footballer {
    constructor(name,club){
        this.name = name;
        this.club = club;
    };
    shoot(){};
    celebrateGoal (){};
    pass (){};
};
class Forward extends Footballer {
    constructor(name,club){
        super(name,club);
    };
    shoot(){
        console.log(`Очень сильный удар!`);
    };
    celebrateGoal (){
        console.log(`Дааа! Я забил гол`);
    };
    pass (){
        console.log(`Средний пас`);
    };
};
