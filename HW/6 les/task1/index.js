const existingUserLogin = 'the_best_user';
const existingUserPassword  = '12345678';
const userLogin = prompt('Введите логин').trim();

const userPassword = prompt ('Введите пароль').trim();

if ((userLogin === existingUserLogin) && (userPassword === existingUserPassword)){
    console.log(`Добро пожаловать, ${userLogin}!`);
}
else
{
    console.log(`Логин и (или) Пароль введены неверно!`);
} 