const coffees = [`0`,'latte', 'cappuccino', 'americano'];
const coffeeName = prompt(`Поиск кофе по названию:`,).toLowerCase();
console.log(`coffeeName`,coffeeName);
// if (!coffees.includes(coffeeName))
const searchCoffeName = coffees.find((searchCoffee)=> {
    return searchCoffee === coffeeName;});
if (!searchCoffeName)
{
    alert(`К сожалению, такого вида кофе нет в наличии`);
}
else 
{
    const searchIndex = coffees.findIndex((searchCoffee)=> 
    {
        return searchCoffee === coffeeName;
    });
        alert(`Держите ваш любимый кофе ${coffeeName}. Он ${searchIndex} по популярности в нашей кофейне.`);
    }