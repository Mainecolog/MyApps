
// ПЕРЕБИРАЕМ СОДЕРЖИМОЕ МАССИВОВ (ПОЛЬЗУЕМСЯ ПОСЛЕДНИМ) - FOREACH/

const developerNames = [ `Maxim`,`Igor`, `Nastya`,`Irina`];
// console.log(developerNames[0]);
// // FOR
// for (let i=0; i<developerNames.length; i+=1)
// {
//     console.log(`i`, i);
//     console.log(developerNames[i]);
// }
// // FOR OF
// for (const name of developerNames)
// {
//     console.log(`name`, name);
// }
// for (значение)of (массив)

// FOREACH - callBack, т.е. функция которая передается внутрь другой функции!
// 1. developerName.forEach(  (первый параметр, индекс текущего элемента, массив ) => {  });

// 2. developerName.forEach( function () {  });
developerNames.forEach( (name,index, array ) => 
{
//  console.log(`name`,name);
//  console.log(`index`,index);
 console.log(`array`,array);
});