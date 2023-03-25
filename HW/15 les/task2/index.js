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
  
  const createTaskItem = (taskId, taskText) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.dataset.taskId = taskId;
  
    const taskItemMainContainer = document.createElement("div");
    taskItemMainContainer.className = "task-item__main-container";
  
    const taskItemMainContent = document.createElement("div");
    taskItemMainContent.className = "task-item__main-content";
  
    taskItem.append(taskItemMainContainer);
    taskItemMainContainer.append(taskItemMainContent);
  
    const checkboxForm = document.createElement("form");
    checkboxForm.className = "checkbox-form";
  
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.className = "checkbox-form__checkbox";
    const inputId = `tasks-${taskId}`;
    inputCheckbox.id = inputId;
  
    const labelCheckbox = document.createElement("label");
    labelCheckbox.htmlFor = inputId;
  
    const taskItemText = document.createElement("span");
    taskItemText.className = "task-item__text";
    taskItemText.innerText = taskText;
  
    const deleteButton = document.createElement("button");
    deleteButton.className =
      "task-item__delete-button default-button delete-button";
    deleteButton.innerText = "Удалить";
  
    taskItemMainContent.append(checkboxForm, taskItemText);
    checkboxForm.append(inputCheckbox, labelCheckbox);
    taskItemMainContainer.append(deleteButton);
  
    return taskItem;
  };
  
  const tasksListContainer = document.querySelector(".tasks-list");
  tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text);
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
          // console.log(newTask.text);
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
    console.log(`Пустой`);
    }
  else if (repeatTask) {
      spanItem.innerText = spanTextRepeat;
      form.append(spanItem);
      console.log(`Повторение`);
      } 
  else {
      
      const taskItem =  createTaskItem(newTask.id,newTask.text);
      tasksListContainer.append(taskItem);
      tasks.push(newTask);
      console.log(`Удаление и добавление`);
    }
  });