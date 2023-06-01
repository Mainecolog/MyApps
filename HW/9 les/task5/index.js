const clientsEstimations = [];
const askClientsToGiveEstimations = function () 
{for (let i = 0; i<5; i+=1)clientsEstimations[i] = prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`).trim();}
askClientsToGiveEstimations()
const filterAskClientsToGiveEstimations = clientsEstimations.filter((answear)=> 
{return answear >=1 && answear <=10 && typeof Number});
const goodEstimations = filterAskClientsToGiveEstimations.filter((item) =>
{return item > 5;});
const lenOfGoodEstimations = goodEstimations.length;
const notGoodEstimations = filterAskClientsToGiveEstimations.filter((item) =>
{ return item <= 5;});
const lenOfNotGoodEstimations= notGoodEstimations.length;
alert(`Всего положительных оценок: ${lenOfGoodEstimations}`);
alert(`Всего отрицательных оценок: ${lenOfNotGoodEstimations}`);