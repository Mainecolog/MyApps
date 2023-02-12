// .CONCAT and ...

// const currentDevelopers = [`Maxim`,`Oleg`];
// const newDevelopers = [`Anton`,`Gleb`];

// // 1. // Метод .CONCAT. Создает новый массив.
// // .concat(массив с элементами для добавления(может быть несколько массивов))
// const allDevelopers = currentDevelopers.concat(newDevelopers);
// console.log(`allDevelopers`,allDevelopers);

// 2. // ... Спред-оператор
const currentDevelopers = [`Maxim`,`Oleg`];
const newDevelopers = [`Anton`,`Gleb`];

// До [`Maxim`,`Oleg`]
// После `Maxim`,`Oleg`

const allDevelopers = [
    ...currentDevelopers,
    `the best`,
    ...currentDevelopers,
];
console.log(`allDevelopers`,allDevelopers);

// Так выглядит "под капотом"
// const allDevelopers =[
//     `Maxim`,`Oleg`,
//     `Anton`,`Gleb`
// ];


// Метод concat()

// Данный метод объединяет несколько массивов в один.


// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];
// const array3 = array1.concat(array2);
// console.log('concat: ', array3); // [1, 2, 3, 4, 5, 6, 7, 8]

// В результате мы получаем массив, полученный из объединения двух других.

// В метод concat() можно передать несколько массивов:

// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];
// const array3 = array1.concat(array2, array1);
// console.log('concat: ', array3); // [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]
// В результате мы получим такое значение:


// Оператор spread

// Spread - это оператор, позволяющий расширить такие элементы, как массивы или, например, строки.

// Spread оператор пишется так - ....

// Объединение массива с помощью spread оператора будет выглядеть следующим образом:

// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];
// const array3 = [...array1, ...array2];
// console.log('spread: ', array3); // [1, 2, 3, 4, 5, 6, 7, 8]

// В итоге мы получили объединенный массив.

// Запись ...array1 буквально достает все элементы из массива array1 и просто вставляет в то место, где она прописана.

// Итак, в данном уроке мы узнали много нового:

// Узнали что такое массив. Как его создавать. Как добавлять, удалять и изменять его элементы.
// Узнали как перебирать массив.
// Разобрали множество полезных методов для работы с массивами и их элементами.
// И научились объединять несколько массивов в один.