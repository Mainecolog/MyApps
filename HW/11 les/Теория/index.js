//  DATE
const date = new Date();
console.log(`date`,date);

// new Date (year, month, date, hours, minutes, seconds, ms)
// Месяцы - от 0 до 11

const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000);
console.log(`newDate`,newDate);

// Ихменения  и получение данных из даты:
// getFullYear - ГОД
// getMonth - Месяц
// getDate - День
// getHours - Час
// getMinutes - Минута
// getSeconds - Секунда
// getMilliseconds - Минута
console.log(`year`,newDate.getFullYear());
console.log(`year`,newDate.getMonth());
console.log(`день`,newDate.getDate());
console.log(`year`,newDate.getMinutes());
console.log(`year`,newDate.getHours());
console.log(`year`,newDate.getSeconds());
console.log(`year`,newDate.getMilliseconds());

// День недели. От 0 до 6 (0 - воскресенье, а 6 - суббота)

// getDay - день недели
console.log(`year`,newDate.getDay());
if (newDate.getDay())
{ console.log(`Сегодня у нас четверг`);}

// Изменение даты:

//  setFullYear() - изменение года
// setMonth()
// setDate()
// setHours()
// setMinutes()
// setSeconds()
// setMilliseconds()
newDate.setFullYear(2001)
console.log(`newDate`,newDate);