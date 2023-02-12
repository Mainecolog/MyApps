const ClientsEstimations = [];
const askClientsToGiveEstimations = function () {
    for (let i = 0; i<5; i+=1)
    ClientsEstimations[i] = prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`);   
}
askClientsToGiveEstimations()
const filterAskClientsToGiveEstimations = ClientsEstimations.filter((answear)=> 
{
    return answear >=1 && answear <=10 && typeof Number
});
const goodEstimations = filterAskClientsToGiveEstimations.filter((item) =>
{
    return item > 5;
});
const lenOfGoodEstimations = goodEstimations.length;
const notGoodEstimations = filterAskClientsToGiveEstimations.filter((item) =>
{
    return item <= 5;
});
const lenOfNotGoodEstimations= notGoodEstimations.length;
alert(`Всего положительных оценок: ${lenOfGoodEstimations}`);
alert(`Всего отрицательных оценок: ${lenOfNotGoodEstimations}`);