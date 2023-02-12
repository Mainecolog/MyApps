// 1 // FOR
const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
for (let i = 0; i<numbers.length; i+=1){
    console.log(`i/sum`,i,sum);
    sum += Math.pow(numbers[i],3);
}
console.log(`sum: `,sum);
2 //FOR OF






// 3 // forEach




// // 4 // Reduce
// const sumOfNumbers = numbers.reduce((acc,number,index,array) =>{
//     console.log(`acc/number`,acc);
//     return acc+Math.pow(number,3);
// },0);
// console.log(`sumOfNumbers`,sumOfNumbers);