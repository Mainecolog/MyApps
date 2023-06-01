let userString = prompt ('Введите текст для обрезки:');  
userString = userString.trim();
let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки:');
let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');
startSliceIndex = Number(startSliceIndex);
endSliceIndex = Number(endSliceIndex);
let andedString = userString.slice(startSliceIndex,endSliceIndex);
alert(`Результат: ${andedString}`);