let newDay;
const myDate = new Date(Date.UTC(2023, 7, 13));
console.log(myDate);
// console.log(newDay);
addDays = function(date,days){
    let sclrDay = date.getDate()+days;
    newDay = date.setDate(sclrDay);
    return console.log(date);
}
addDays(myDate,2);