const nextBirthdayDate = new Date(Date.UTC(2023, 7, 13));
const today = Date.now(Date.UTC());
let howMuchDays = 0;
getDaysBeforeBirthday = function (nextBirthdayDate){return howMuchDays = Math.round((nextBirthdayDate - today)/1000/60/60/24);};
const result = getDaysBeforeBirthday(nextBirthdayDate);
console.log(`До твоего Дня рождения: ${result} дня(-ей)`);