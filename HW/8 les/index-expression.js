// // Вид объявления функции : Function Expression.
// // 
//  Объявляем переменную (оно же имя функции)
// const sum = function (a,b){
// console.log(a+b);
// }
// sum(10,12);
// // Ключевое отличиие Expression от Decloration  
// // - Expression  мы не можем вызвать до определения функции.

// //  Можно определять как стрелочную функцию:
// Стрелочная функция:
// // arrow Function Expression:
// const name = () => {
// }


// Полная запись:
// const sum = (a,b) => {
//     return a+b;
// }


// Сокращенная запись:
// const sum = (a,b) => a+b;

// // Важно! Если больше,чем 1 строчка, 
// // то данную запись использвовать не можем, надо полную:
// Полная запись:
// const sum = (a,b) => {
//     return a+b;
// }
// Если 1 параметр, то можно без скобок: 
// const addFive = a => a+5;
// const result = addFive(10);
// console.log(result);

// // Можно использовать в качестве CALLBACK функции.
// function multiply (a,b, callback) {
//     const result = a*b;
//     callback(result);
// }
// multiply(10,2, /*вводим параметр стрелочной функции*/multiplyResult => {
//     console.log('multiplyResult',multiplyResult);
// })
