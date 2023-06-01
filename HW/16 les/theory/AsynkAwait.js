// then catch finally - ПРОБЛЕМЫ:

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos/';

async function delay(ms) {
    return new Promise(r => setTimeout(()=> r(), ms))
} 

const getTodosWithUserData = async () =>{
    try{
    console.log(`Запрос на сервер...`);
    await delay(2000)
    const response = await fetch(USERS_URL);
        if(!response.ok){throw new Error (`Ошибка в получении данных о пользователях`)};
    const users = await response.json();
    console.log(users[0].name);
    const usersID =  users[0]?.id;
    const todosResponse =  await fetch(`${TODOS_URL}?userId=${usersID}`);
        if(!todosResponse.ok){throw new Error (`Ошибка в получении данных о задачах`)};
    const todos = await todosResponse.json();
    console.log(todos);
    } catch(e) {
        console.error(e);
    } finally {
        console.log(`finaly`);
    }
};
getTodosWithUserData()