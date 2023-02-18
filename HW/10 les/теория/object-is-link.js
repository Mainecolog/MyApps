// Не примитивный тип данных - ОБЪЕКТ 
// объект ссылочный тип, а остальные 7 типов данныъ нет
const setName = (entity, value) => {
    if (typeof entity === `object`) {
        entity.name = value;
    } else {
        entity = value;
    }
}

const developer = {
    name: `Maxim`,
};
let developerName = `Maxim`;
setName(developer,`Max`); 
// Здесь смены имени на Мах - не произошло, потому что строка и др. не ссылочные типы данных!
// у объекта есть ссылка, а у других нет
setName(developerName, `Max`);
// console.log(`developer`,developer);
// console.log(`developerName`,developerName);

// РАЗНЫЕ ССЫЛКИ
console.log({}==={}); // - false
console.log([]===[]); //  - false 
// Потому что надо сравнивать ССЫЛКИ, а не объекты/массивы

// ОДИНАКОВЫЕ ССЫЛКИ
const entity ={};
const entityCopy = entity;
console.log(entity === entityCopy); //  - true
// TRUE - потому что в JS ссылки равны 