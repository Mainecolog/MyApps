// Добавление/Удаление/Изменение Объектов

// обьект:
const student = {
    id: 1,
    programmingLanguage: `JavaScript`,
    hasExpirienceInReact: false,
};
// Добавление
// object.(newKey) = value;
student.expirience = 6;
console.log(`student`,student);

// Удаление
//  delete object.(key delete);
delete student.hasExpirienceInReact;
console.log(`student`, student);

// Изменение
// object.(key) = new value;
student.expirience = 12;
student.id = 2;

console.log(`student`, student);