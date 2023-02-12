
const afterLunch = `Мария`;
const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
const beforeLunch =(peopleWaiting.length - (peopleWaiting.indexOf(`Кирилл`)+1));
// console.log(beforeLunch);
// console.log(peopleWaiting.length);
const giveParcel = function ()
{
    const arrayLength = peopleWaiting.length-1;
    const firstPeople = peopleWaiting.at(0);
    alert(`${firstPeople} получил(а) посылку. В очереди осталось ${arrayLength} человек.`);
    peopleWaiting.shift();
};
const leaveQueueWithoutParcel = function()
{
    const lastPeople = peopleWaiting.at(-1);
    alert (`${lastPeople} не получил(а) посылку и ушел(ла) из очереди`);
    peopleWaiting.pop();
} 

do {
    giveParcel();
}
 while (peopleWaiting.length > beforeLunch) {
    
}; 

while (peopleWaiting.length > 0)
{
    leaveQueueWithoutParcel();
};

