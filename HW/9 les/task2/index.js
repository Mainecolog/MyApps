let sum = 0;
const getSumOfSequence = function (number) 
{
    if (isNaN(number) || typeof number !== "number")
    {
    return NaN;
    }
    let result;
    let arrayOfNumbers =[];
    for (let i = 1; i<=number; i++){
    // console.log(`i`,i);
    arrayOfNumbers.push(i);
    sum = arrayOfNumbers[0]+arrayOfNumbers.at(-1);
    // console.log(`sum`,sum);
    result = `(${sum})([${arrayOfNumbers}])`;
    }
    return result; 
};

const myRes = getSumOfSequence(12);
console.log(`my result: `, myRes);