function sum(a,b,...rest) {
  return a + b + rest.reduce((a,i) => a+i ,0)
};
console.log(sum(1,2));
console.log(sum(2, 2));
console.log(sum(10, 15, 249, 653, 846));