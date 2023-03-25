// Метод Promise.race() запускает несколько промисов, как и Promise.all(). Но возвращает он только один результат — того промиса, который выполнился быстрее всех НЕВАЖНО RESOLVE (ВЫПОЛНИТСЯ) ИЛИ REJECT(НЕ ВЫПОЛНИТСЯ). 
/*
Синтаксис метода:
const promise = Promise.race([ promise1, promise2, /* и т.д.  ]);
    или 
Promise.race([
    new Promise(),
    new Promise(),
    new Promise(),
])
*/
// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
//   ]).then(console.log); // Выведет 3


const promise1 = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(`promise1`);
    },500)
})
const promise2 = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(`promise2`);
    },100)
})
const promise3 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        reject(`promise3`);
    },2500)
})

Promise.race([promise1,promise2,promise3])
.then ((result)=>{
    console.log(result) // promise2
})
.catch((error)=> { console.log(error)
})