// Привет, меня зовут Матвей!
let userText = prompt('Введите текст:');
userText = userText.trim();
// console.log(userText);
let wordFromText = prompt ('Введите слово из текста, которое нужно найти');
wordFromText = wordFromText.trim();
// console.log(wordFromText);
let indexOfWord = userText.indexOf(wordFromText);
let sliceText = userText.substring(0,indexOfWord);
alert(`Результат: ${sliceText}`);