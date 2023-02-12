let sum = 0;
const getSumOfSequence = function (number) 
{if (!number) 
    {
    return NaN;
    }
    for (let i = 1; i<=number; i++)
    console.log(`i`,i);
    return sum = 1+number;
    
};

const result = getSumOfSequence(10);
console.log(`result: `, result);