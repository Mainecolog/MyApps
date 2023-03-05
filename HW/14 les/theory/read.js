const bodyElement = document.body;
const firstChild = bodyElement.firstChild;
const lastChild = bodyElement.lastChild;
console.log(firstChild);
console.log(lastChild);

const childNodes = bodyElement.childNodes// Все узлы документов в виде колекции 
console.log(childNodes);

//  для вывода только объектов, тегов 
console.log(bodyElement.children)