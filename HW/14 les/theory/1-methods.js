// Создание элемента
// 1. createElement()
        // prepend() // — вставляет элемент в начало заданного узла.
        // append() // — вставляет элемент в конец узла. 
        // before() // — вставляет элемент перед узлом.
        // after() // — вставляет элемент после узла.
// 2. replaceWith()  // Метод replaceWith() позволяет заменить один элемент на другой.
// 3. insertAdjacentElement() 
// Метод insertAdjacentElement() позволяет добавить элемент в нужную позицию в зависимости от указанных параметров.
        // "beforebegin" – вставить newElem непосредственно перед elem,
        // "afterbegin" – вставить newElem в начало elem,
        // "beforeend" – вставить newElem в конец elem,
        // "afterend" – вставить newElem непосредственно после elem.
        // К примеру, следующий код будет работать аналогично вставке с помощью append():

// Создать элемент можно с помощью метода createElement().
// Создадим ещё один абзац p, а также зададим ему класс, data-атрибут и текст:

const newParagraph = document.createElement("p");
newParagraph.className = "text";
newParagraph.dataset.id = "3";
newParagraph.textContent = "Третий абзац";
console.log(newParagraph); // <p class="text" data-id="3">Третий абзац</p>

// Добавление элемента на страницу

// После создания элемент нужно добавить на страницу. Для этого существует несколько основных методов:
// prepend() // — вставляет элемент в начало заданного узла.
// append() // — вставляет элемент в конец узла. 
// before() // — вставляет элемент перед узлом.
// after() // — вставляет элемент после узла.

// 1. append()
// Вставим новый абзац в конец блока с помощью метода append():
const div = document.querySelector("#main");
// div.append(newParagraph);
{/* <div id="main">
  <p class="text" data-id="1">Первый абзац</p>
  <p class="text" data-id="2">Второй абзац</p>
  !!!<p class="text" data-id="3">Третий абзац</p>!!!
</div> */}

// 2. prepend()
// Вставим новый абзац в начало блока с помощью метода prepend():
// const div = document.querySelector("#main");
div.prepend(newParagraph);
// Результирующий HTML:
// <div id="main">
//   !!!<p class="text" data-id="3">Третий абзац</p>!!!
//   <p class="text" data-id="1">Первый абзац</p>
//   <p class="text" data-id="2">Второй абзац</p>
// </div>

//  3. before()
// Вставим новый элемент перед блоком с помощью метода before():
// const div = document.querySelector("#main");
div.before(newParagraph);
// Результирующий HTML:
{/* !!!<p class="text" data-id="3">Третий абзац</p>!!!
<div id="main">
  <p class="text" data-id="1">Первый абзац</p>
  <p class="text" data-id="2">Второй абзац</p>
</div> */}

// 4.  after()
// Вставим новый элемент после блока с помощью метода after():
// const div = document.querySelector("#main");
// div.after(newParagraph);
// Результирующий HTML:
// <div id="main">
//   <p class="text" data-id="1">Первый абзац</p>
//   <p class="text" data-id="2">Второй абзац</p>
// </div>
// !!!<p class="text" data-id="3">Третий абзац</p>!!!

//  5. replaceWith()  // Метод replaceWith() позволяет заменить один элемент на другой.
// Заменим первый абзац на новый с помощью этого метода:

// const firstParagraph = document.querySelector("p");
// firstParagraph.replaceWith(newParagraph);
// Результирующий HTML:

// <div id="main">
//   <p class="text" data-id="3">Третий абзац</p>
//   <p class="text" data-id="2">Второй абзац</p>
// </div>

// 6. Добавление элемента с помощью insertAdjacentElement() // Метод insertAdjacentElement() позволяет добавить элемент в нужную позицию в зависимости от указанных параметров.
// Синтаксис метода:
// elem.insertAdjacentElement(where, newElem);
// где elem — существующий элемент, внутрь или рядом с которым нужно вставить новый элемент newElem.
// Параметр where может принимать следующие значения:

// "beforebegin" – вставить newElem непосредственно перед elem,
// "afterbegin" – вставить newElem в начало elem,
// "beforeend" – вставить newElem в конец elem,
// "afterend" – вставить newElem непосредственно после elem.
// К примеру, следующий код будет работать аналогично вставке с помощью append():

// const div = document.querySelector("#main");
// div.insertAdjacentElement("beforeend", newParagraph);
// По сути, метод insertAdjacentElement() имеет похожую функциональность, как набор методов append(), prepend(), before() и after(), только другой синтаксис.