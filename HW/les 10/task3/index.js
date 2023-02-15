const student = {
   name: 'Maxim',
   programmingLanguage: 'JavaScript',
}


handleObject = function(obj,key,action){
   switch (action){
      case `get`:
           obj[key];
         break;
      case `add`:
         obj[key] = ``;
         return obj;
      case `delete`:
         delete obj[key];
         return obj;
      default:
         return obj;
   };
};
const result = handleObject(student,`name`, `get`);
console.log(`result`,result);