let correctAnswers = 0;
correctAnswers = Number(correctAnswers);
let incorrectAnswers = 0;
incorrectAnswers = Number (incorrectAnswers);

const question1 = "Сколько будет 2 + 2?";
const question2 = "Сколько будет 2 * 2?";
const question3 =
  "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?";
const question4 =
  "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
const question5 = "Сколько будет 2 + 2 * 2?";
const Questions = [question1,question2,question3,question4,question5];

const answer1 = 4;
const answer2 = 4;
const answer3 = 1;
const answer4 = 12;
const answer5 = 6;
const Answers = [answer1,answer2,answer3,answer4,answer5];

const userAnswer1 = prompt(Questions[0]);
    if (Number(userAnswer1) === Answers[0]) 
    {
    alert("Ответ Верный");
    correctAnswers += 1;
    } else {
    alert("Ответ Неверный");
    incorrectAnswers += 1;
    }

const userAnswer2 = prompt(Questions[1]);
    if (Number(userAnswer2) === Answers[1]) 
    {
    alert("Ответ Верный");
    correctAnswers += 1;
    } else {
    alert("Ответ Неверный");
    incorrectAnswers += 1;
    }

const userAnswer3 = prompt(Questions[2]);
    if (Number(userAnswer3) === Answers[2]) 
    {
    alert("Ответ Верный");
    correctAnswers += 1;
    } else {
    alert("Ответ Неверный");
    incorrectAnswers += 1;
    }

const userAnswer4 = prompt(Questions[3]);
    if (Number(userAnswer4) === Answers[3]) 
    {
    alert("Ответ Верный");
    correctAnswers += 1;
    } else {
    alert("Ответ Неверный");
    incorrectAnswers += 1;
    }

const userAnswer5 = prompt(Questions[4]);
    if (Number(userAnswer5) === Answers[4]) 
    {
    alert("Ответ Верный");
    correctAnswers += 1;
    } else {
    alert("Ответ Неверный");
    incorrectAnswers += 1;
    }
alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}`);


// let correctAnswers = 0;
// correctAnswers = Number(correctAnswers);
// let incorrectAnswers = 0;
// incorrectAnswers = Number (incorrectAnswers);
// let Question1 = prompt('Сколько будет 2 + 2?');
//     Question1 = Number(Question1);
//     Answear1 = 2+2;
//     Answear1 = Number(Answear1);
//         if (Question1 === Answear1)
//         {
//             alert('Ответ верный');
//             console.log(++correctAnswers);
//         } else {
//             alert('Ответ неверный');
//             console.log(++incorrectAnswers);
//         };
// // console.log(typeof(Question1));
// let Question2 = prompt ('Сколько будет 2 * 2?');
//     Question2 = Number(Question2);
//     Answear2 = 2*2;
//     Answear2 = Number(Answear2);
//     if (Question2 === Answear2)
//         {
//             alert('Ответ верный');
//             console.log(++correctAnswers);
//         } else {
//             alert('Ответ неверный');
//             console.log(++incorrectAnswers);
//         };
// let Question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
//     Question3 = Number(Question3);
//     Answear3 = 5-3-1;
//     Answear3 = Number(Answear3);
//     if (Question3 === Answear3)
//         {
//             alert('Ответ верный');
//             console.log(++correctAnswers);
//         } else {
//             alert('Ответ неверный');
//             console.log(++incorrectAnswers);
//         };
// let Question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
//     Question4 = Number(Question4);
//     Answear4 = 10-2-1+5;
//     Answear4 = Number(Answear4);
//     if (Question4 === Answear4)
//         {
//             alert('Ответ верный');
//             console.log(++correctAnswers);
//         } else {
//             alert('Ответ неверный');
//             console.log(++incorrectAnswers);
//         };
// let Question5 = prompt('Сколько будет 2 + 2 * 2?');
//     Question5 = Number(Question5);
//     Answear5 = 2+2*2;
//     Answear5 = Number(Answear5);
//     if (Question5 === Answear5)
//         {
//             alert('Ответ верный');
//             console.log(++correctAnswers);
//         } else {
//             alert('Ответ неверный');
//             console.log(++incorrectAnswers);
//         };
// alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}`);