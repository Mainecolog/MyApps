const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
const updatedPrices = prices.map((coffeePrice)=> {
    return coffeePrice + 0.5;});
console.log(`updatedPrices`,updatedPrices);

// for (let i = 0; i < coffees.length; i += 1)
// {
//     const coffeePrice = prices[i];
//     const coffeeName = coffees[i];
//     alert(`Кофе ${coffeeName} сейчас стоит ${coffeePrice} евро`);
// }


{coffees.forEach( (name,index) => 
{
   alert(`Кофе ${name} сейчас стоит ${updatedPrices[index]} евро`)
});
}
