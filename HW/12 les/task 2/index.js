const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
       return 'Гав-Гав';
    },
 };
 const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
       return 'Чик-чирик';
    },
 };
 let newObj = {};
 makeDomestic = function (isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    newObj = {...this};
    newObj.isDomestic = isDomestic;
    return newObj;
 };
console.log(newObj);
makeDomestic.call(bird,(false));
console.log(newObj);
console.log(bird);
makeDomestic.apply(bird,[false]);
const bindedAnimal = makeDomestic.bind(dog);
console.log(bindedAnimal(true));
console.log(bird);