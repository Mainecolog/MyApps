const footballer = {
   fullName: 'Cristiano Ronaldo',
   attack: 
   function () { // убрал стрелочную функцию
      console.log(`${this.fullName} сейчас с мячом и начинает атаку!`)
      return this;
   },
   scoreGoal(sound) {
      console.log(`${this.fullName} забил гол! Вот это да!`);
      this.celebrate(sound); 
   },
   celebrate(sound) {
      console.log(sound); 
   },
   goToSubstitution: function(newPlayer) {
      console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
   }
};

const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

const bindedAttack = attack.bind(footballer);
console.log(bindedAttack());

score.call(footballer,('Сиииии'));

substitute.apply (footballer, ['Paulo Dibala']);
