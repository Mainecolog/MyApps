// Fetch - Специальная функция, с помощью которой мы можем поучать даные по URL
// Метод fetch() позволяет получать данные по сети асинхронно (то есть он возвращает объект Promise).
// fetch(url,{}); // получаем промисс, который можем отрабатывать

/*  METHOD - тип запроса:
    1. GET - поумолчанию (получение)
    2. POST - отправка/обновление данных
    3. DELETE - удаление данных 
    и др.
*/
// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos/';

// 1. Вывод в консоль:
// const result = fetch(TODOS_URL,{
//     method: 'GET',
// });
// console.log(`result`,result);
// result 
//     .then((response)=>{
//         // console.log(response);
//         if (!response.ok){
//             throw new Error(`Ошибка`)
//         }
//         return response.json();     // !!!! Декодирование в JSon, текст или др. !!!!
//     })
//     .then((todos)=>{
//         console.log(todos);
//     })
//     .catch((error)=>{
//         console.log(`error`,error);
//     })

// 2. Вывод в HTML

const TODOS_URL = 'https://jsonplaceholder.typicode.com/tosdos/';

const createTodoElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href ='#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);
    return todoElement
}

const toggleLoader = () =>{
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
}

const dataContainer = document.querySelector(`#data-container`);

const getAllTodos = () => {
    toggleLoader();
    const result = fetch(TODOS_URL,{
        method: 'GET',
    });
    console.log(`result`, result);
    result
        .then((response)=>{
            
            return response.json();     // !!!! Декодирование в JSon, текст или др. !!!!
        })
        .then((todos)=>{
            todos.forEach((todo)=> {
            const todoHTML = createTodoElement(todo.title);
            dataContainer.append(todoHTML)
           });
        })
        .catch((error)=>{
            console.log(`error`,error);
        })
        .finally(()=>{
            toggleLoader();
        })
}
getAllTodos();
