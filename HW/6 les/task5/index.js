// Вопрос: Почему при вводе циклами "While" и "Do while" при указании условия "i <= 100" он прибавляет еще 101 (получается 5151)?
let sum = 0;
for (let i = 0; i <= 100; i += 1) 
    {
      sum += i;
    }
alert(sum);

// let sum = 0;
// let i = 0;
// while (i < 100)
//     {
//         i += 1;
//         sum += i;
//     }
// alert(sum);

// let sum = 0;
// let i = 0;
// do {
//     i = i+1;
//     sum = sum + i;
// } while (i<100);
// alert(sum);