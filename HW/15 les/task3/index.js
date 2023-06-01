const tasks = [
    {
      id: "1138465078061",
      completed: false,
      text: "Посмотреть новый урок по JavaScript"
    },
    {
      id: "1138465078062",
      completed: false,
      text: "Выполнить тест после урока"
    },
    {
      id: "1138465078063",
      completed: false,
      text: "Выполнить ДЗ после урока"
    }
  ];

  let deleteTaskId = null;

  const createTaskItem = (taskId, taskText) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = taskId;
  
    const taskItemMainContainer = document.createElement('div');
    taskItemMainContainer.className = "task-item__main-container";
  
    const taskItemMainContent = document.createElement('div');
    taskItemMainContent.className = 'task-item__main-content';
  
    taskItem.append(taskItemMainContainer);
    taskItemMainContainer.append(taskItemMainContent);
  
    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';
  
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.className = 'checkbox-form__checkbox';
    const inputId = `tasks-${taskId}`;
    inputCheckbox.id = inputId;
  
    const labelCheckbox = document.createElement('label');
    labelCheckbox.htmlFor = inputId;
  
    const taskItemText = document.createElement('span');
    taskItemText.className = 'task-item__text';
    taskItemText.innerText = taskText;
  
    const deleteButton = document.createElement('button');
    deleteButton.className =
      'task-item__delete-button default-button delete-button';
      deleteButton.dataset.deleteTaskId = taskId;
    deleteButton.innerText = 'Удалить';
  
    taskItemMainContent.append(checkboxForm, taskItemText);
    checkboxForm.append(inputCheckbox, labelCheckbox);
    taskItemMainContainer.append(deleteButton);
  
    return taskItem;
  };

  const tasksListContainer = document.querySelector('.tasks-list');
  tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text);
    console.log(taskItem);
    tasksListContainer.append(taskItem);
  });

  const form = document.querySelector(".create-task-block");
  form.addEventListener('submit', (event) => 
   {event.preventDefault();
    const inputTask = event.target.taskName.value.trim();
    const newTask = {
      id: Date.now().toString(),
      text: inputTask,
    };        
    const spanItem = document.createElement('span');
    spanItem.className = 'error-message-block';
    const errorMessage = form.querySelector('.error-message-block');
    const spanTextFalse = 'Название задачи не должно быть пустым.';
    const spanTextRepeat = 'Задача с таким названием уже существует.'; 
    const nullOfTask = (newTask.text === '');   
    const repeatTask = tasks.some ((task)=>
      task.text === newTask.text);
    if (errorMessage) {
        errorMessage.remove()
      };              
    if (nullOfTask){
      spanItem.innerText = spanTextFalse;
      form.append(spanItem);
      }
    else if (repeatTask) {
        spanItem.innerText = spanTextRepeat;
        form.append(spanItem);
        } 
    else { 
        const taskItem =  createTaskItem(newTask.id,newTask.text);
        tasksListContainer.append(taskItem);
        tasks.push(newTask);
      }
    });

  const bodyHTML = document.querySelector('#tasks')
  const modalMainWinDiv = document.createElement('div');
  modalMainWinDiv.className = 'modal-overlay modal-overlay_hidden';
  bodyHTML.append(modalMainWinDiv);

  const deleteModalDiv = document.createElement('div');
  deleteModalDiv.className = 'delete-modal';
  modalMainWinDiv.append(deleteModalDiv);

  const questOfDelete = document.createElement('h3');
  questOfDelete.className = 'delete-modal__question';
  questOfDelete.innerText = 'Вы действительно хотите удалить эту задачу?';
  deleteModalDiv.prepend(questOfDelete)

  const deleteModalButtons = document.createElement('div');
  deleteModalButtons.className = 'delete-modal__buttons';
  deleteModalDiv.append(deleteModalButtons);

  const buttonOfCancellation = document.createElement('button');
  buttonOfCancellation.className = 'delete-modal__button delete-modal__cancel-button';
  buttonOfCancellation.innerText = 'Отмена';
  deleteModalButtons.prepend(buttonOfCancellation)

  const buttonOfDelete = document.createElement('button');
  buttonOfDelete.className = 'delete-modal__button delete-modal__confirm-button';
  buttonOfDelete.innerText = 'Удалить';
  deleteModalButtons.append(buttonOfDelete);


  const buttonList = document.querySelector('.tasks-list')
  buttonList.addEventListener('click', (event)=>
  {
    const deleteButton = event.target.closest('.task-item__delete-button');
    deleteTaskId = deleteButton.dataset.deleteTaskId;
    const isOpenModalWin =document.querySelector('.modal-overlay').classList.remove('modal-overlay_hidden');
    const deleteModalBtn = document.querySelector('.delete-modal__confirm-button');
    deleteModalBtn.addEventListener('click',(event)=>{  
      event.preventDefault();
      document.querySelector('.modal-overlay').setAttribute('class','modal-overlay modal-overlay_hidden');
      tasks.splice()
!!!!!!!!!!!!!!!!!
      const toggleLoader = () =>{
        const loaderHTML = document.querySelector('#loader');
        const isHidden = loaderHTML.hasAttribute('hidden');
        if (isHidden) {
            loaderHTML.removeAttribute('hidden')
        } else {
            loaderHTML.setAttribute('hidden', '')
        }
    }
!!!!!!!!!!!!!!!!!!!



    });
    
  });





  

  

  

    