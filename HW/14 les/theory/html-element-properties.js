// Основные свойства
// Data-атрибуты
// Стили .style


// Любой HTML-элемент имеет следующие основные свойства:

// 1.  id — идентификатор элемента:
const div = document.querySelector("#main");
console.log(div.id); // main
div.id = `newMain`;
console.log(div.id); // NewMain, но тогда сломается CSS верстка

// 2. className — CSS-класс элемента:
const paragraph = document.querySelector(".text");
console.log(paragraph.className); // text
paragraph.className = `text1`
console.log(paragraph.className); // text1

// 3. innerText и  textContent — текстовое содержимое внутри элемента. 
// const paragraph = document.querySelector(".text");
console.log(paragraph.innerText); // Первый абзац
console.log(paragraph.textContent); // Первый абзац (При наличии CSS верстки выведется по-другому)
paragraph.innerText = `Потрясный абзац`
console.log(paragraph.innerText); // Потрясный абзац

// 4. innerHTML — содержит в себе код HTML-разметки внутри элемента
// const div = document.querySelector("#main");
console.log(div.innerHTML);
// div.innerHTML = ``; // Все удалится внутри maine
// div.innerHTML = `<b> tasksBlock</b>`;
// Выведет в консоль следующий код HTML (в виде строки со всеми отступами):
{/* <p class="text" data-id="1">Первый абзац</p>
<p class="text" data-id="2">Второй абзац</p> */}

// 5.  children — коллекция дочерних элементов:
// const div = document.querySelector("#main");
console.log(div.children); 
// Доступны только для четения, удалить или поменять - не получится

// Data-атрибуты

// Data-атрибуты — это атрибуты HTML-элементов, название которых начинается с data-. 
// В нашем примере такие атрибуты (data-id) есть у элемента p:
{/* <p class="text" data-id="1">Первый абзац</p> */}

// Data-атрибуты позволяют хранить дополнительную информацию в стандартных элементах HTML, 
// что бывает очень полезно. То есть с их помощью можно создавать свои собственные атрибуты для элементов.

// Получить коллекцию data-атрибутов можно с помощью свойства dataset:
// const paragraph = document.querySelector(".text");
console.log(paragraph.dataset);
// В результате в консоль будет выведен объект DOMStringMap, 
// представляющий собой словарь пар "ключ-значение" для data-атрибутов.     // DOMStringMap {id: '1'}

// Обратиться к значению атрибута можно как к свойству объекта dataset:

// const paragraph = document.querySelector(".text");
console.log(paragraph.dataset.id); // "1"
// Обрати внимание, что название атрибута в результирующем словаре пишется без приставки data-, то есть вместо data-id мы обращаемся к свойству id.

// Изменить значение data-атрибута можно так же, как и обычное свойство любого объекта:
paragraph.dataset.id = 123;


// Стили

// К коллекции стилей элемента можно обратиться с помощью свойства style, например:
// const paragraph = document.querySelector(".text");
console.log(paragraph.style); // В консоль будет выведен длинный список всех возможных стилей элемента.

// Задать стиль можно обратившись к конкретному свойству объекта style:
paragraph.style.color = "red";
div.style.backgroundColor = "gray";
div.style.fontWeight = `bold`;
paragraph.style.boxShadow = `inset 0 0 0 1  px #fff`


// Обрати внимание, что названия свойств в JavaScript и CSS пишутся в разном стиле:
// Для свойств JavaScript используется lowerCamelCase — первая буква маленькая, далее каждое слово начинается с большой буквы.
// Для свойств CSS используется kebab-case — все буквы маленькие, слова разделяются дефисом.
// К примеру, к CSS-свойству background-color мы обращаемся из кода через style.backgroundColor.