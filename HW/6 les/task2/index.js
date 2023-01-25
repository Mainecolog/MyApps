let correctAnswers = 0;
correctAnswers = Number(correctAnswers);
let incorrectAnswers = 0;
incorrectAnswers = Number (incorrectAnswers);
let Question1 = prompt('Сколько будет 2 + 2?');
    Question1 = Number(Question1);
    Answear1 = 2+2;
    Answear1 = Number(Answear1);
        if (Question1 === Answear1)
        {
            alert('Ответ верный');
            console.log(++correctAnswers);
        } else {
            alert('Ответ неверный');
            console.log(++incorrectAnswers);
        };
// console.log(typeof(Question1));
let Question2 = prompt ('Сколько будет 2 * 2?');
    Question2 = Number(Question2);
    Answear2 = 2*2;
    Answear2 = Number(Answear2);
    if (Question2 === Answear2)
        {
            alert('Ответ верный');
            console.log(++correctAnswers);
        } else {
            alert('Ответ неверный');
            console.log(++incorrectAnswers);
        };
let Question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
    Question3 = Number(Question3);
    Answear3 = 5-3-1;
    Answear3 = Number(Answear3);
    if (Question3 === Answear3)
        {
            alert('Ответ верный');
            console.log(++correctAnswers);
        } else {
            alert('Ответ неверный');
            console.log(++incorrectAnswers);
        };
let Question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
    Question4 = Number(Question4);
    Answear4 = 10-2-1+5;
    Answear4 = Number(Answear4);
    if (Question4 === Answear4)
        {
            alert('Ответ верный');
            console.log(++correctAnswers);
        } else {
            alert('Ответ неверный');
            console.log(++incorrectAnswers);
        };
let Question5 = prompt('Сколько будет 2 + 2 * 2?');
    Question5 = Number(Question5);
    Answear5 = 2+2*2;
    Answear5 = Number(Answear5);
    if (Question5 === Answear5)
        {
            alert('Ответ верный');
            console.log(++correctAnswers);
        } else {
            alert('Ответ неверный');
            console.log(++incorrectAnswers);
        };
alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}`);
