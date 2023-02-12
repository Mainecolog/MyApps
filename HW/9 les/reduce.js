const salariesOfDevelopers = [400, 500, 600, 2000, 350];
// Отличие - Есть начальное знаxение, помимо колбэка. У колбэка 4 параметра:
// асс = аккумулятор, item, index, array
// acc - начальный параметр, равен нулю (начальное значяение)
// Если не задать начальный параметр и return, то возвращаться будет первый параметр в массиве
// Если задать return, но не задать начальное значение, то первое значение будет - первым значением в массиве
// А остальные значения - заданный return! 
const sum = salariesOfDevelopers.reduce((acc,salary,index,array) =>{
    console.log(`acc/salary`,acc,salary);
    return acc+salary;
},0);
console.log(sum);