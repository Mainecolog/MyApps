const userName = prompt ('Как вас зовут?','Введите ваше имя...').toLowerCase().trim();

const userAge = prompt(`Сколько вам лет?`, `Введите Ваш возраст...`).trim();

// Нашел решение на просторах интернета.
const clearUserAge = parseInt(userAge.match(/\d+/));

alert(`Вас зовут ${userName} и вам ${clearUserAge} лет`);