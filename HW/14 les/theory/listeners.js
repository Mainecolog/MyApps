// Обработчики событий
// addEventListener (``, ())
// event - параметр, выводящий 

// 1. Подсвечивание 1ой кнопки
// const navButton = document.querySelector('.main-navigation__button-item');
// navButton.addEventListener('click',(event)=> {
//     // console.log(`click`); // куча параметров  мауз евент. Главный - target (по нему происходит клик)
//     console.log(event.target); 
//     // Чтобы изменить стиль при нажатии, нужно добавить новый класс к navButton
//     // const target = event.target; или как ниже
//     const { target } = event;
//     target.classList.add('main-navigation__button-item_selected')
// });

// 2. Переход подсвечивания на другую кнопку после нажатия.
const allNuvButtons = document.querySelectorAll('.main-navigation__button-item')
allNuvButtons.forEach((button)=>{
    button.addEventListener('click',(event) => {
        // Перебираем все кнопки и удаляем класс выделения ото всюду 
        allNuvButtons.forEach((button)=>{
        button.classList.remove('main-navigation__button-item_selected')
        });
        // Выделяем кнопки добавлением таргета
    const { target } = event;
    target.classList.add('main-navigation__button-item_selected');
    });
});

// Что такое события

// Любой современный сайт умеет реагировать на действия пользователя. Например, при наведении курсора некоторые элементы могут подсвечиваться, что-то происходит при нажатии на кнопки и т.п.
// Событие — это любое действие пользователя, на которое веб-страница может реагировать. Существует множество событий, которые можно обработать.
// Обработчик события — это код на JavaScript, который срабатывает при запуске события.
// Рассмотрим работу событий на примере события click.
// Событие “click”
// Событие click происходит, когда пользователь кликает левой кнопкой мыши по элементу.
// Добавление обработчика события делается с помощью метода addEventListenter(). Первым параметром он принимает название события, вторым — функцию-обработчик.

// Добавим обработчик события click к первому абзацу из нашего примера:

// <div id="main">
//   <p class="text" data-id="1">Первый абзац</p>
//   <p class="text" data-id="2">Второй абзац</p>
// </div>
// Код:

// const p = document.querySelector("p");
// p.addEventListener("click", () => {
//   p.textContent += " клик";
// });
// Несколько раз кликнем на первом абзаце и увидим, что при каждом клике добавляется текст:


// Параметр event

// Функция "обработчик событий" принимает один параметр event, который содержит различные данные о событии.

// Переделаем наш обработчик из предыдущего примера, чтобы он не был привязан к конкретной переменной и мог использоваться и для других элементов. Для этого обратимся к свойству event.target, которое указывает на элемент, по которому был произведен клик:

// const p = document.querySelector("p");
// p.addEventListener("click", (event) => {
//   event.target.textContent += " клик";
// });
// Можно добавить обработчик для каждого элемента p в нашем документе с помощью querySelectorAll() и метода forEach():

// const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach(p => {
//   p.addEventListener("click", event => {
//     event.target.textContent += " клик";
//   });
// })
// Теперь текст "клик" добавляется при клике по любому абзацу, а не только по первому.

// Однако такой многоуровневый код достаточно сложно читать, поэтому вынесем обработчик в отдельную функцию addText():

// const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach(p => {
//   p.addEventListener("click", addText);
// });

// function addText(event) {
//   event.target.textContent += " клик";
// }
// Кроме события click есть много других полезных событий, рассмотрим их далее.