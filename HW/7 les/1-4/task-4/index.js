let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    console.log(`i | sum`, i, sum);
    numbers[i] = numbers[i] ** 3;
    sum += numbers[i];
} 
console.log(sum); 

// Через цикл for of
sum = 0;
for (let num of numbers){
    // num = num ** 3;
    // sum += num;
    sum += num;
    num = num ** 3;
    console.log(`num | sum`, num, sum)
} 
console.log(sum); 