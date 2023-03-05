// 1. innerHTML;

// const div = document.querySelector("body");
// div.innerHTML = `<form class="create-user-form">
// <label>
//     Имя
//     <input type="text" name="userName" placeholder="Введите ваше имя">
// </label>
// <label>
//     Пароль
//     <input type="password" name="password" placeholder="Придумайте Пароль">
// </label>
// <button type="submit">
//     Подтвердить
// </button>
// </form>`;

// 2. CreateElement

const div = document.querySelector('body');

const newForm = document.createElement('form');
newForm.className = 'create-user-form';
div.prepend(newForm);

const newLabel1 = document.createElement('label');
newLabel1.textContent = `Имя`;
newForm.prepend(newLabel1);

const newInput1 = document.createElement('input');
newInput1.type = 'text';
newInput1.name = 'userName';
newInput1.placeholder = 'Введите ваше имя';
newLabel1.append(newInput1);

const newLabel2 = document.createElement('label');
newLabel2.textContent = `Пароль`;
newLabel1.after(newLabel2);

const newInput2 = document.createElement('input');
newInput2.type = 'password';
newInput2.name = 'password';
newInput2.placeholder = 'Придумайте Пароль';
newLabel2.append(newInput2);

const newButton = document.createElement('button');
newButton.type = 'submit';
newButton.textContent = ' Подтвердить';
newForm.append(newButton);