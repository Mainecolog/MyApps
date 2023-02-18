const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];
const newMassive = [];
let patient;
giveTalonsInOrder = function (patients, orders){
	for (let id of orders) 
	{patient = patients.find(patient => patient.id === id);
	newMassive.push(patient);}
	return newMassive
};

const result = giveTalonsInOrder(people,ordersArr);
console.log('result: ', result);