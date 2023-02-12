const coffees = ['Latte', 'Cappuccino', 'Americano'];
const toLowercaseCoffee = coffees.map( (toLowerCoffeeName)=> 
{return toLowerCoffeeName.toLocaleLowerCase().trim();});
console.log(toLowercaseCoffee);
const coffeeName = prompt(`Поиск кофе по названию:`,).toLowerCase().trim();
console.log(`coffeeName`,coffeeName);
const searchIndex = toLowercaseCoffee.findIndex((searchCoffee)=> 
    {return searchCoffee === coffeeName;});
console.log(`searchIndex`,searchIndex);
const popCoffe = searchIndex+1;
console.log(`popCoffe`,popCoffe);
if (!searchIndex)
{alert(`Держите ваш любимый кофе ${coffeeName}. Он ${popCoffe} по популярности в нашей кофейне.`);}
else
{alert(`К сожалению, такого вида кофе нет в наличии`);}

    
