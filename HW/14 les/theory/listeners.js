// Обработчики событий
// addEventListener (``, ())
// event - параметр, выводящий 

const navButton = document.querySelector('.maine-navigation__button-item');
navButton.addEventListener('click',(event)=> {
    // console.log(event); // куча параметров  мауз евент. Главный - target (по нему происходит клик)
    console.log(event.target); //<p class="text" data-id="1">Первый абзац</p>
    // Чтобы изменить стиль при нажатии, нужно добавить новый класс к navButtonж
    const target = event.target;
    target.classList.add('maine-navigation__button-item main-navigation__button-item_selected')
});