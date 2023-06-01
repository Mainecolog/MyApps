// Fetch - Специальная функция, с помощью которой мы можем поучать даные по URL
// Метод fetch() позволяет получать данные по сети асинхронно (то есть он возвращает объект Promise).
// fetch(url,{}); // получаем промисс, который можем отрабатывать

/*  METHOD - тип запроса:
    1. GET - поумолчанию (получение)
    2. POST - отправка/обновление данных
    3. DELETE - удаление данных 
    и др.
*/

const TODOS_URL = 'https://api.github.com/users';

fetch("https://api.github.com/users")
  .then((response) => {
    if (!response.ok) {
        throw new Error("Ошибка запроса"); // Обработка ошибок в fetch()
      }
    console.log(response);
    return response.json();
  })
  .then((data) => {
    outputTable(data);
    // console.log(data);
  })
  .catch((error) => {  
    console.log(error); 
    //Добавили блок catch(), для того чтобы "поймать" выброшенную ошибку. Если этого не сделать, и в родительском коде нет других обработчиков catch(), выполнение всей программы будет остановлено. Поэтому важно добавлять обработчики ошибок.
    
  })
  .finally(() => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  });;
  
  /*Этот код состоит из трёх частей:

  Получение данных через fetch().
  Здесь мы указали только первый параметр – URL запроса для получения данных. Второй параметр с настройками запроса используется по умолчанию.
  
  1-ый then(): обработка ответа и представление результата в формате JSON.
  Поскольку метод fetch() возвращает промис, для получения результата требуется использовать метод then(). Результат запроса response представляет собой объект, проверим его в консоли: 
    "Response
    2fetch.js:43 Array(30):
    {login: 'mojombo', id: 1, node_id: 'MDQ6VXNlcjE=', avatar_url:"
    *Обратим внимание на свойство ok у объекта Response, оно нам ещё пригодится - "ok:true"

Далее метод response.json() разбирает (”парсит”) результат запроса в объект. Результат работы этого метода – тоже промис, поэтому нужен ещё один вызов then().

2-ой then(): вывод результата.
Выводим результат промиса response.json() в консоль – это список полученных с сервера объектов.

        Вывод данных в HTML
Выведем полученные данные на страницу в виде таблицы.
Для этого вместо вывода в консоль будем вызывать следующую функцию:
*/
function outputTable(users) {
    const table = document.createElement("table"); //Создается элемент таблицы table при помощи метода createElement().
  
    for (const user of users) { //В цикле проходим по всем элементам массива users.
      const row = table.insertRow(); // Для каждого объекта user создаем строку в таблице с помощью метода insertRow().

      const column1 = row.insertCell(); //С помощью метода insertCell() в каждую строку добавляем две колонки с данными пользователя – его аватаркой и именем.
      column1.innerHTML = `<img class="avatar" src="${user.avatar_url}" />`; // В первую колонку добавляем картинку через элемент <img> с заданием источника src.
  
      const column2 = row.insertCell();
      column2.innerHTML = `<a href="${user.html_url}">${user.login}</a>`; //Во вторую колонку добавляем имя пользователя. Оно представляет собой ссылку — элемент <a>. Адрес ссылки (атрибут href) указывает на страницу пользователя в GitHub.
    }
  
    document.body.append(table); // Добавляем результирующую таблицу на страницу с помощью метода append().
  }
  










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

// const createTodoElement = (text) => {
//     const todoElement = document.createElement('li');
//     const todoElementAnchor = document.createElement('a');
//     todoElementAnchor.href ='#';
//     todoElementAnchor.textContent = text;
//     todoElement.append(todoElementAnchor);
//     return todoElement
// }

// const toggleLoader = () =>{
//     const loaderHTML = document.querySelector('#loader');
//     const isHidden = loaderHTML.hasAttribute('hidden');
//     if (isHidden) {
//         loaderHTML.removeAttribute('hidden')
//     } else {
//         loaderHTML.setAttribute('hidden', '')
//     }
// }

// const dataContainer = document.querySelector(`#data-container`);

// const getAllTodos = () => {
//     toggleLoader();
//     const result = fetch(TODOS_URL,{
//         method: 'GET',
//     });
//     console.log(`result`, result);
//     result
//         .then((response)=>{
            
//             return response.json();     // !!!! Декодирование в JSon, текст или др. !!!!
//         })
//         .then((todos)=>{
//             todos.forEach((todo)=> {
//             const todoHTML = createTodoElement(todo.title);
//             dataContainer.append(todoHTML)
//            });
//         })
//         .catch((error)=>{
//             console.log(`error`,error);
//         })
//         .finally(()=>{
//             toggleLoader();
//         })
// }
// getAllTodos();
