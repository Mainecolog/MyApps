// 1. remove()
// 2. closest()
// 3. Коллекция классов classList
// 4.  Работа с атрибутами
        // hasAttribute()
        // getAttribute()
        // setAttribute()
        // removeAttribute()
        

// 1.remove()
// Метод remove() удаляет элемент из DOM-дерева.
// Исходный HTML:

<div id="main">
  <p class="text" data-id="1">Первый абзац</p>
  <p class="text" data-id="2">Второй абзац</p>
</div>
// Удалим первый абзац:
const p = document.querySelector("p");
p.remove();
// Результирующий HTML:
<div id="main">
  <p class="text" data-id="2">Второй абзац</p>
</div>


// 2. closest()

// Метод closest() находит ближайший родительский элемент по заданному селектору. 
// Сам элемент тоже включается в поиск, 
// то есть если сам элемент удовлетворяет условию селектора, то будет возвращен он:
// const p = document.querySelector("p");
const parent = p.closest("div");
// В данном примере переменная parent будет содержать родительский элемент div.


// 3. Коллекция классов classList
// Свойство classList содержит в себе коллекцию классов элемента:
// const p = document.querySelector("p");
const classList = p.classList;
// В нашем примере коллекция будет содержать единственное значение "text".
// У classList есть несколько методов:
// Метод add()// — добавляет класс к элементу
// Метод remove()// — удаляет класс
// Метод toggle()// — добавляет класс, если его ещё нет, иначе удаляет
// Метод replace()// — заменяет один класс другим
// Добавим класс к нашему элементу p:
// const p = document.querySelector("p");
p.classList.add("red");
// Результирующий HTML:
<p class="text red" data-id="1">Первый абзац</p>


// 4.  Работа с атрибутами
// Для работы с атрибутами элемента существует несколько методов:
// Метод hasAttribute() — имеет ли элемент указанный атрибут. Возвращает булево значение:

// const p = document.querySelector("p");
// console.log(p.hasAttribute("class")); // true

// Метод getAttribute() — получает значение атрибута по имени:
// const p = document.querySelector("p");
// console.log(p.getAttribute("class")); // text

// Метод setAttribute() — устанавливает значение атрибута:
// const p = document.querySelector("p");
p.setAttribute("id", "первый параграф")
// console.log(p.getAttribute("id")); // firstParagraph

// Метод removeAttribute() — удаляет атрибут.