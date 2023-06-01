const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
console.log(typeof(totalJuniorDevelopersSalary));
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
   let salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
   totalJuniorDevelopersSalary += salaryWithTax;
   console.log('i/salaryWithTax', i, salaryWithTax);
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);