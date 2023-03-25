// Делегирование событий

// Для множества одинаковых элементов - испольхуется один эвентлистанер.

// Старый вариант выбора всеъ кнопок и нахначения событий:
// const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item')

//     allNavigationButtons.forEach((button)=> {
//         button.addEventListener('click', (event)=>{
//             const targetButton = event.target;
//             allNavigationButtons.forEach((navButton)=>{
//                 navButton.classList.remove('main-navigation__button-item_selected');
//             });
//             targetButton.classList.add('main-navigation__button-item_selected');
//         });
//     });

// Дилегирвоание
// 
// 1. Выбираем общего родителя для всех нужных элементов:
const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item')
const maineNavigation = document.querySelector('.main-navigation');

maineNavigation.addEventListener('click',(event)=>{
    // console.log('target', event.target);
    const isNavButton = event.target.closest('.main-navigation__button-item');
    console.log(`Клик на контейнер`);
    if (isNavButton){
        allNavigationButtons.forEach((navButton)=>{
        navButton.classList.remove('main-navigation__button-item_selected');
    });
    event.target.classList.add('main-navigation__button-item_selected');
     }});

const firsNavButton = document.querySelector('.main-navigation__button-item');
firsNavButton.addEventListener('click',(event)=>{
    console.log(`Первая кнопка`, event.target);
});

document.body.addEventListener('click',(event)=>{
    console.log(`Click na BODY`, event.target);
})
                        // Первая кнопка <a class=​"main-navigation__button-item main-navigation__button-item_selected" data-button-id=​"1">​ Задачи на Сегодня ​</a>​
                        // event-delegation.js:27 Клик на контейнер
                        // event-delegation.js:40 Click na BODY <a class=​"main-navigation__button-item main-navigation__button-item_selected" data-button-id=​"1">​ Задачи на Сегодня ​</a>​



                        
                        function renderTasks(tasks) {
                            const div = document.querySelector(".tasks-list");
                            if (div) {
                                div.remove();
                            }
                            const tasksList = document.createElement("div");
                            tasksList.className = "tasks-list";
                        
                            document.body.insertAdjacentElement("beforeend", tasksList);
                        
                            for (const task of tasks) {
                                const $task = createTaskHTML(task);
                                tasksList.innerHTML += $task;
                            }
                        
                            const modal = document.querySelector(".modal-overlay");
                        
                            tasksList.addEventListener("click", (event) => {
                                let deleteId = event.target.closest("button");
                                deleteTaskId = deleteId.dataset.deleteTaskId;
                        
                                if (deleteId) {
                                    modal.classList.toggle("modal-overlay_hidden");
                                }
                            });
                        
                            const cancelButton = document.querySelector(".delete-modal__cancel-button");
                            cancelButton.addEventListener("click", () => {
                                modal.classList.toggle("modal-overlay_hidden");
                            });
                        
                            const delButton = document.querySelector('.delete-modal__confirm-button');
                            delButton.addEventListener('click', () => {
                                    if (delButton) {
                                        const taskItem = document.querySelector(`.task-item[data-task-id="${deleteTaskId}"]`)
                                        let index = tasks.findIndex(e => e.id === deleteTaskId);
                                        tasks.splice(index, 1)
                                        taskItem.remove()
                                        modal.classList.toggle("modal-overlay_hidden");
                                    }
                                })
                        }
                        function renderModal(){
                            const modal = document.createElement('div')
                            modal.className = 'modal-overlay modal-overlay_hidden'
                        
                            document.body.insertAdjacentElement('beforeend', modal);
                        
                            const create = createModalWindow();
                            modal.innerHTML += create;
                        }