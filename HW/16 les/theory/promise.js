/* Асинхронные сущности:
1. setTimeout (()=>{}, время); - вызывается чрез заданное  
2. setInterval (()=>{}, интервал); - вызывается через интервал

/*  PROMIS -специальный объект, который используется для отложенных и асинхронных вычислений.
    У ПРомиса есть 3 статуса:
    1. Pending - promis в ожидании
    2. Fulfilled - promis выполнен
    3. Rejected - promis невыполнен

const promise = new Promise((resolve,reject)=>{});
Конструктор Promise принимает один аргумент – функцию, которую нужно выполнить. У этой функции есть два параметра-функции resolve() и reject(), которые вызываются в зависимости от результата выполнения.
Где resolve - функция, если промис выполнен успешно
    reject - функция, если промис выполнен неудачно
*/
/* Чтобы получить данные из resolve и reject есть несколько методов
    1. Then - когда RESOLVE, т.е. промис выполняется
    2. Catch - когда REJECT
    3. Finally - вызывается в последнюю очередь, неважно выполнился промис или не выполнился. Код, который нужно выполнить в любом случае
*/


const developer ={
    name: 'Maxim',
    isJSDev: true,
};

// setTimeout(()=>{
//     console.log(`setTimeout`);
// },3000);

//     console.log(developer);

// setInterval(()=>{
//     console.log(`setInterval`);
// }, 3000);

/*  PROMIS
    У ПРомиса есть 3 статуса:
    1. Pending - promis в ожидании
    2. Fulfilled - promis выполнен
    3. Rejected - promis невыполнен
*/
const promise = new Promise((resolve,reject)=>{
     if (developer.isJSDev){
        setTimeout(()=>{
           resolve(`${developer.name} является JavaScript разработчиком`) 
        },3000);
     } else {
        reject(`${developer.name} не является JavaScript разработчиком`)
     }
});
console.log(promise); // console: Promise {<pending>};
/* Чтобы получить данные из resolve и reject есть несколько методов
    1. Then - когда RESOLVE, т.е. промис выполняется
    2. Catch - когда REJECT
    3. Finally - вызывается в последнюю очередь, неважно выполнился промис или не выполнился. Код, который нужно выполнить в любом случае
*/
promise
    .then((successMessage)=>{
        console.log(`successMessage:`,successMessage);
    })
    .catch((error)=>{
        console.log(`error`,error);
    })  
    .finally(()=>{
        console.log(`finally`);
    });
