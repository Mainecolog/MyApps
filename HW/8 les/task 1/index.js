// Decloration:
function getName1(name) {
        return  `Имя равно ${name}`;
}
let resultOne = getName1(`Мотя`); 
console.log(`resultOne`,resultOne);

// Expression:
const getName2 = function (name){
    return  `Имя равно ${name}`;
}
resultTwo = getName2(`Матвей`); 
console.log(`result2`,resultTwo);


// Arrow expression:
const getName3 = (name) => {
    return `Имя равно ${name}`;
} 
resultThree = getName3(`Матвейчик`); 
console.log(`result3`,resultThree);