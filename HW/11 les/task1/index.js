//Через массив мб? или попростому?
let newFormatDate;
const getDateFormat = function (date, separator = `.`) {
    let dayFromDate = date.getDate();
    let monthFromDate = date.getMonth();
    let yearFromDate = date.getFullYear();
    if (monthFromDate < 10) monthFromDate = `0`+(date.getMonth()+1);
    if (monthFromDate = 10)monthFromDate = date.getMonth()+1;
    else  monthFromDate = date.getMonth () ;
    console.log(dayFromDate,separator,monthFromDate,separator,yearFromDate);};
const myDate = new Date(2000, 11, 10);
getDateFormat(myDate, `/`);

options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
console.log(myDate.toLocaleDateString(`ru`,options));