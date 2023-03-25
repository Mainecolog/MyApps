// SUBMIT

// preventDefault() - отключает перезагрузку страницы 

// insertAdjacentHTML() - добавляет в чтмл, но как html, а не строку.


const form = document.querySelector('form');
form.addEventListener('submit',(event)=>
    {
        // 1. Получить введённый пользователем текст из текстового поля. (КАК)
        event.preventDefault();
        const textToAdd = event.target.elements.text.value; // Добавили введеный текст в постоянную

        // 2. Найти блок <div>, в который будет делаться вставка данных. (КУДА)
        const div = document.getElementById("main");

        // 3. Вставить новый абзац (элемент <p>) в основной блок.(ДЕЛАЕМ)
        div.insertAdjacentHTML("beforeend", `<p>${textToAdd}</p>`); // Добавили в HTML
    });

//     По умолчанию после события submit происходит перезагрузка страницы. Мы отменили поведение по умолчанию, добавив вызов метода event.preventDefault(), чтобы увидеть добавленный элемент на странице.
// Поле ввода мы получили через свойство elements у формы (в event.target содержится форма). Через это свойство можно получить любой контролл (поле ввода) из формы. Для этого мы обращаемся к elements и через точку пишем название атрибута name того поля, которое мы хотим получить. Нашей записью event.target.elements.text мы получили из формы <input name="text">. Таким образом с elements мы можем работать как с объектом, где ключи — значения атрибутов name у полей ввода, а значения — сами поля ввода. 
// Далее из полученного поля ввода (<input>) извлекаем значение через свойство value, т. е. полная запись — event.target.elements.text.value. 
// Для простоты, вставку элемента мы сделали с помощью метода insertAdjacentHTML(). Он похож на рассмотренный ранее метод insertAdjacentElement(), только вместо элемента вставляет код HTML.
// Попробуем открыть нашу страницу и добавить несколько абзацев:
// Добавление работает как с помощью нажатия на кнопку "Добавить", так и при нажатии кнопки Enter на клавиатуре. Это поведение по умолчанию для элементов ввода с типом submit.

// "keydown"
/*Для начала добавим обработчик события keydown. В нём выполним три действия:
1. Получим информацию о нажатой кнопке с помощью свойства event.key.
2. Попытаемся найти абзац с нужным значением атрибута data-id.
3. Если абзац найден, сделаем его текст жирным с помощью свойства style.*/
document.addEventListener("keydown", (event) => {
    const key = event.key;
    console.log('keydown',key);
    const p = document.querySelector(`[data-id='${key}']`);
    if (p) {
      p.style.fontWeight = "bold";
    }
  });

//   "keyup"
/*Давайте доработаем наш код, чтобы подсветка исчезала после отпускания клавиши. Для этого используем событие keyup:*/
document.addEventListener("keyup", (event) => {
  const key = event.key;
  console.log('keyup', key);
  const p = document.querySelector(`[data-id='${key}']`);
  if (p) {
    p.style.fontWeight = "normal";
  }
});

// Событие "change"

// Событие change срабатывает при изменении значения элемента формы, когда это изменение зафиксировано. Для текстовых элементов событие происходит не при каждом вводе, а при потере фокуса.

// Событие "input"

// Событие input срабатывает каждый раз при изменении значения текстового поля, поэтому оно позволяет сделать валидацию более быстрой и удобной.
// Улучшим валидацию в нашем примере, добавив обработчик события input. Будем делать кнопку "Добавить" неактивной, если пользователь ничего не ввёл:

const button = document.querySelector("input[type='submit']");
button.disabled = true; // По умолчанию поле пустое и кнопка неактивна

const input = document.querySelector("input[type='text']");
input.addEventListener("input", (event) => {
  button.disabled = !event.target.value;
});

// Фазы распространения события
// Когда в каком-то объекте происходит событие, оно распространяется в документе по определённым правилам. События распространяются в две стороны: от корневого элемента (window) к целевому, и обратно.

// Распространение события делится на 3 фазы:
// 1.Фаза погружения – от window к цели (цель – это объект, в котором возникло событие).
// 2.Фаза цели – событие на цели.
// 3. Фаза всплытия – обратно, от цели к window.
// Всплытие

// Рассмотрим фазу всплытия на простом примере. Для простоты, используем атрибут onclick для задания обработчика события клика:
// <body onclick="alert('body')">
//   <div onclick="alert('div')">
//     <p onclick="alert('p')">Абзац</p>
//   </div>
// </body>
// При клике по элементу <p> будет поочередно показано три сообщения — "p", "div" и "body", несмотря на то, что клик был только по элементу <p>. Этот пример демонстрирует всплытие, то есть распространение события от внутреннего элемента к родительским.

// Визуально это можно представить так:
// Погружение
// Фаза погружения редко используется на практике. Чтобы "поймать" событие на стадии погружения, нужно добавить обработчик события с помощью метода addEventListener() и добавить в нёго третий параметр со значением true (предположим, что элементы <body>, <div> и <p> уже найдены):
// body.addEventListener("click", () => alert("body"), true);
// div.addEventListener("click", () => alert("div"), true);
// p.addEventListener("click", () => alert("p"), true);
// В этом случае при клике по внутреннему элементу <p> будет сначала отображено сообщение "body", затем "div" и только в конце "p", то есть в обратном порядке по сравнению с фазой всплытия.

// Остановка распространения события
// Остановить распространение события можно с помощью метода event.stopPropagation(), например:
// div.addEventListener("click", (event) => {
//   event.stopPropagation();
// });
// В этом случае при клике по элементу <p> событие пройдет фазу погружения, фазу цели, поднимется до элемента <div> и будет остановлено.