const salariesOfDevelopers = [400, 500, 600, 2000, 350];
// 
// Добавление элементов:
const newSeniorDeveloperSalary = 5000;
// PUSH() - Добавление элементов В конец массива
salariesOfDevelopers.push(newSeniorDeveloperSalary, 5002)

// UNSHIFT() - Добавление элементовВ начало 
salariesOfDevelopers.unshift(100, 101, 102, 103)

// УДАЛЕНИЕ ЭЛЕМЕНТОВ 

//.SHIFT() - УДАЛЕНИЕ ЭЛЕМЕНТОВ  (в начале):
const firstRemoveElement = salariesOfDevelopers.shift();
salariesOfDevelopers.shift();
salariesOfDevelopers.shift();


 
// .POP() - УДАЛЕНИЕ ЭЛЕМЕНТОВ (с конца):

// const lastRemovedElement = salariesOfDevelopers.pop();
// console.log(lastRemovedElement);
// console.log(salariesOfDevelopers);

// ИЗМЕНЕНИЕ ЭЛЕМЕНТОВ МАССИВА:
// нужен индекс элемента в массиве!
salariesOfDevelopers[3] = 6000;
console.log(salariesOfDevelopers);

// Также, в JavaScript появилась новая возможность получить элемент массива – с помощью метода at(). Данный метод принимает в себя индекс элемента, который мы хотим получить:

// const array = ['first', 'second', 'third', 'fourth'];
// console.log('item:', array.at(1)); // item: second
// // Таким образом мы получили второй элемент под индексом 1.

// Если же мы хотим получить элемент с конца, то нужно передать отрицательное значение, например, -1. Значение -1 будет значить, что мы хотим получить первый элемент с конца массива:
const array = ['first', 'second', 'third', 'fourth'];

console.log('last item:', array.at(-1)); 
// last item: fourth

console.log('second item from end:', array.at(-2)); 
// second item from end: third