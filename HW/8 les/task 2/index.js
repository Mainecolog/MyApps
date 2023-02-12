const getSumOfNumbers = (number, type = "odd") => {
    if (number <= 0 || !number) {
    return NaN;
    }
  
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        const isOdd = i % 2 === 1;
        const isEven = i % 2 === 0;
      if (type === "") {
        sum += i;
      } else if (isEven && type === "even") {
        sum += i;
      } else if (isOdd && type === "odd") {
        sum += i;
      }
    }
    return sum;
  };
  const result = getSumOfNumbers(10,'even');
console.log(result);
