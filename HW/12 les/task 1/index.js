const student = {
   stack: [`HTML`],
   level: 1,
   improveLevel(){
      this.level++
      if(this.level === 2){
          this.stack.push('CSS')
          return this
      };
      if(this.level === 3){
          this.stack.push('JavaScript')
          return this
      };
      if(this.level === 4){
          this.stack.push('React')
          return this
      };
      if(this.level === 5){
          this.stack.push('NodeJS')
          return this
          
      };
      if(this.level > 5){
          console.log('Студент выучил все технологии!')
          this.level = 5
          return this
      };
   },
};
console.log(student.improveLevel())
   // .improveLevel()
   // .improveLevel()
   // .improveLevel()
   // .improveLevel()