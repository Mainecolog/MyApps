// Decloration:
function getName1(name) {
        return  `Имя равно ${name}`;
}
let result = getName1(`Мотя`); 
console.log(result);

// Expression:
const getName2 = function (name){
    return  `Имя равно ${name}`;
}
result = getName2(`Матвей`); 
console.log(result);


// Arrow expression:
const getName3 = (name) => {
    return `Имя равно ${name}`;
} 
result = getName3(`Матвейчик`); 
console.log(result);