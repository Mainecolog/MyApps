// SUBMIT - обычно в <FORM></FORM>
// event.preventDefault() - отменяет перезагрузку страницы 

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

//submit
const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit',(event) =>{
    // console.log(event);
    event.preventDefault(); // Теперь страница не перезагружается и ничего не отправляется.
    // Извлекаем таргет:
    const {target} = event;
    
    //target как form теперь. При образении к target, мы какбудто бы обращаемс к form

    /* Так как мы хотим, чтобы то что мы вводим в окно выводилось там - 
    мы обратимся к свойству `name` у input и туда будем вставлять то, что будем вводить */
    const taskNameInput = target./*свойствой name у input'а*/ taskName;
    // console.log(`taskNameInput`,taskNameInput);

    /* Чтобы поменять текст в инпуте, нужно обратиться к значение 
    - value и поменять его.*/
    
//    const inputValue = taskNameInput.value;
//    if (inputValue){
//     alert(`Вы создали задачу: ${inputValue}`)
//    } else{
//     alert (`Введите правильные данные!`)
//    }
//    console.log(`inputValue`,inputValue);
});


// Mouseover
// const createToolTip = (text) =>{
//     const toolTip = document.createElement('span');
//     toolTip.textContent = text;
//     toolTip.className = 'toolTip';

//     return toolTip;
// };
// document.addEventListener('mouseover',(event)=>{
//     const { target } = event;
//     // console.log(target);
//     const isOverDeleteButton = target.className.includes('task-item__delete-button');
//     if (isOverDeleteButton){
//         // console.log(`success`);
//         const taskItemHTML = target.closest('.task-item');
//         const taskId = taskItemHTML?.dataset.taskId;
//         if (taskId){
//             const tooltipHTML = createToolTip(`Удалить задачу под номер ${taskId}?`);
//             target.append(tooltipHTML);
//         }
//     }
// })

// // Mouseout
// document.addEventListener('mouseout',(event) => {
//     const { target } = event;
//     const isOutFromDeleteButton = target.className.includes('task-item__delete-button');
//     if (isOutFromDeleteButton) {
//         const tooltip = document.querySelector('.tooltip');
//         if (tooltip) {
//             tooltip.remove();
//         };
//     }
// });

// contextmenu

// document.addEventListener ('contextmenu', (event) => {
//         console.log(event);
//         event.preventDefault();
//     });

// change & input
// Событие "change"
// Событие change срабатывает при изменении значения элемента формы, когда это изменение зафиксировано. Для текстовых элементов событие происходит не при каждом вводе, а при потере фокуса.

// Событие "input"
// Событие input срабатывает каждый раз при изменении значения текстового поля, поэтому оно позволяет сделать валидацию более быстрой и удобной.


// change - когда убираем фокус с инпута
// const checkTaskNameInputOnValidation = (value) =>{
//     if(!value || value.includes('@')){
//         return false;
//     }
//     return true;
// };
// const createTaskBlock = document.querySelector('.create-task-block');
// const taskNameInput = createTaskBlock.querySelector('.create-task-block__input');

// taskNameInput.addEventListener('change', (event) =>{
//     const { target } = event;
//     const { value } = target;
//     const isValid = checkTaskNameInputOnValidation(value);
//     const messageBlockFromDOM = document.querySelector('.error-message-block')

//     if (!isValid) {
//         const newMessageBlock = document.createElement ('span');
//         newMessageBlock.className = 'error-message-block';
//         newMessageBlock.textContent = 'Ошибка! Текст для задачи не доложен быть пустым и не должен содержать "@"';
//         createTaskBlock.append(newMessageBlock);
//     } else if(isValid && messageBlockFromDOM){
//         messageBlockFromDOM.remove();
//     }
//     console.log(value);
// });

// input Каждый раз при вводе символа срабатывает событие.

const checkTaskNameInputOnValidation = (value) =>{
    if(!value || value.includes('@')){
        return false;
    }
    return true;
};
const createTaskBlock = document.querySelector('.create-task-block');
const taskNameInput = createTaskBlock.querySelector('.create-task-block__input');

taskNameInput.addEventListener('input', (event) =>{
    const { target } = event;
    const { value } = target;
    const isValid = checkTaskNameInputOnValidation(value);
    const messageBlockFromDOM = document.querySelector('.error-message-block')

    if (!isValid) {
        const newMessageBlock = document.createElement ('span');
        newMessageBlock.className = 'error-message-block';
        newMessageBlock.textContent = 'Ошибка! Текст для задачи не доложен быть пустым и не должен содержать "@"';
        createTaskBlock.append(newMessageBlock);
    } else if(isValid && messageBlockFromDOM){
        messageBlockFromDOM.remove();
    }
    console.log(value);
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