
const getDivisorsCount = function(number)
{
  // Нек доходит, а как задать такую проверку, чтобы исключить НЕПУСТЫЕ строки?
  if ( !number){
    number = Number(number);
    return NaN
 };
  if (number <= 0 || !Number.isInteger(number)){
  return alert(`${number} должен быть целым числом и больше нуля!`)
 };
  let divisorsOfNumber =[]; 
  for (let i = 1; i <= number; i+=1)
    {
    if ( number % i === 0){
      divisorsOfNumber.push(i);}
    } 
  return divisorsOfNumber;
}
const result = getDivisorsCount(1);
console.log(result);