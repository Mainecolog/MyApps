
const student = {
    stak: [`HTML`],
    level: 1,
    improveLevel () {
        this.level += 1;
        if  (this.level == 2) this.stak = [`HTML`,`CSS`];
        if  (this.level == 3) this.stak = [`HTML`,`CSS`,`JavaScript`];
        if  (this.level == 4) this.stak = [`HTML`,`CSS`,`JavaScript`,`React`];
        if  (this.level == 5) this.stak = [`HTML`,`CSS`,`JavaScript`,`React`,`NodeJS`];
        if  (this.level > 5) alert(`Студент выучил все технологии!`);
        return this;
    },
};
student
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()
console.log(student.stak);
console.log(student);