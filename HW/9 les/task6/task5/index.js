// 1 // FOR
const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
for (let i = 0; i<numbers.length; i+=1)
{sum += Math.pow(numbers[i],3);};
console.log(`sum 1: `,sum);

//  2 // //FOR OF
sum = 0;
for (let num of numbers)
{sum += num**3;};
console.log(`sum 2: `,sum);

// 3 // forEach
sum = 0;
 numbers.forEach( (item) => {
    sum += item**3;});
console.log(`sum 3: `,sum);

//  4 // Reduce
sum = 0;
const sumOfNumbers = numbers.reduce((acc,number,index,array) =>
{return acc+Math.pow(number,3);},0);
console.log(`sum 4: `,sumOfNumbers);