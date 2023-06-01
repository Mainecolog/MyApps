 // Важно! Если мы используем метод только по переменной, индексу или массиву, то остальные в условиях можно не писать!    
const salariesOfDevelopers = [400, 500, 600, 2000, 350];

// Метод `map`. Для примменения действия каждому элементу массива. 
// Создается новый массив. а старый остается.
// Выпонляет заданное условие ко всем элементам массива.

const updatedSalaries = salariesOfDevelopers.map((salary,index,array)=> {
    return salary * 2;
});


// Filter. В теле проверяет условие. Фильтрует по условию. Создает новый массив с элементами, удовлетворяющию условию.
const filteredSalaries = salariesOfDevelopers.filter((salary,index,array)=> {
    // return salary > 600;
    return index % 2 === 0;
});

// Find. Ищет элемент в массиве по условию. Если несколько элементов подходят, 
// то вернется только первые по порядку подходящий элемент в массиве.

const searchSalaries = salariesOfDevelopers.find((salary)=> {
    return salary > 400;
});


// FindIndex. ВОзвращает не элемент, а индеккс элемента. Если такого нет, то вернет -1.
const searchIndex = salariesOfDevelopers.findIndex((salary)=> {
    return salary === 400;
});

//  SOME. 
// Если  есть удовлетвораяющие поиску результаты, то возвращает TRUE, если ни один элемент массива не подходит,то FALSE
const elementExists = salariesOfDevelopers.some((salary)=> {
    return salary > 0;
});

// EVERY
// Возвращает TRUE, если все элементы удовлетворяют условию. 
const allElementExists = salariesOfDevelopers.every((salary)=> {
    return salary > 0;
});
console.log(salariesOfDevelopers);
console.log(`allElementExists `,allElementExists);