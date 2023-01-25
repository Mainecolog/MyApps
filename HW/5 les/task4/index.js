let userName = prompt ('Как вас зовут?','Введите ваше имя...');  
userName = userName.toLowerCase().trim();

let userAge = prompt(`Сколько вам лет?`, `Введите Ваш возраст...`);
userAge = userAge.trim();
userAge = Number(userAge);

alert(`Вас зовут ${userName} и  вам ${userAge} лет`);