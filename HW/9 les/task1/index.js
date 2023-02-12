const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
const arrayLengthBeforeLunch = peopleWaiting.length- (peopleWaiting.indexOf(`Кирилл`)+1);
const giveParcel = function ()

{
    const firstPeople = peopleWaiting.at(0);
    alert(`${firstPeople} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
    peopleWaiting.shift();
};
const leaveQueueWithoutParcel = function()
{
    const lastPeople = peopleWaiting.at(-1);
    alert (`${lastPeople} не получил(а) посылку и ушел(ла) из очереди`);
    peopleWaiting.pop();
} 

while (arrayLengthBeforeLunch < peopleWaiting.length ){
    giveParcel();
};

while (peopleWaiting.length > 0)
{
    leaveQueueWithoutParcel();
};

