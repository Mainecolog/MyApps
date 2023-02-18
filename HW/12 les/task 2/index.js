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

 makeDomestic = function (isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    this.isDomestic = isDomestic;
    return this;
 };

makeDomestic.call(bird,(false));
makeDomestic.apply(bird,[false]);
const bindedAnimal = makeDomestic.bind(dog);
console.log(bindedAnimal(true));
console.log(bird);