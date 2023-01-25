// 1.
let myInfoText = ('Всем привет! Меня зовут - Matvey. Сейчас я изучаю язык программирования JavaScript на курсе по JavaScript Vladilen Minin. Я хочу стать веб-разработчиком, потому что Vera v sebya, busduhee i ogromniy interes k webu. До этого я изучал JavaScript 1 месяц. Я уверен, что пройду данный курс до конца!');
// console.log(myInfoText.replaceAll('JavaScript', 'javascript'));
myInfoText = 'Всем привет! Меня зовут - Matvey. Сейчас я изучаю язык программирования JavaScript на курсе по JavaScript Vladilen Minin. Я хочу стать веб-разработчиком, потому что Vera v sebya, busduhee i ogromniy interes k webu. До этого я изучал JavaScript 1 месяц. Я уверен, что пройду данный курс до конца!';
// 2 and 3 
let programmingLanguage = 'курс';
myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());
console.log(myInfoText);
// 4
const lengthOfText = myInfoText.length;
console.log('Всего символов в тексте:', lengthOfText);
// 5
const isFirstSym = myInfoText[0];
console.log('Первый символ в тексте:',isFirstSym );
const isLastSym = myInfoText[lengthOfText -1];
console.log('Последний символ в тексте:', isLastSym);
