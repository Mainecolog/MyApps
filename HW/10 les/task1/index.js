const users = [ 
	{
	  username: 'David',
	  status: 'online',
	  lastActivity: 10
	},
	{
	  username: 'Lucy',
	  status: 'offline',
	  lastActivity: 22
	},
	{
    username: 'Bob',
    status: 'online',
    lastActivity: 104
    }
];
console.log(users);

console.log(users);
// фильтруем массив объектов
let onlineUsers = [];
 for (const user of users){
    // console.log(`user`,user);
    if (user.status === `online`) onlineUsers.push(user);
 };
console.log(`onlineUsers`,onlineUsers);
// console.log(`userNameOfMassive`,userNameOfMassive);

// вытягиваем имена из массива объектов
let usersOnlineNames = [];
for (let i = 0; i<=(onlineUsers.length-1); i++){
 	if	(onlineUsers) {
		let difUsers= onlineUsers[i];
		const a = difUsers[`username`];
		usersOnlineNames.push(a);
	};
};
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)
console.log(`usersOnlineNames`,usersOnlineNames);

// Или так:
// let onlineUsers = [];

//     users.filter(item => 
//     {if (item.status === `online`) onlineUsers.push(item);});

// console.log(`onlineUsers`,onlineUsers);

// let usersOnlineNames = [];
//     onlineUsers.map(item => 
//     {return usersOnlineNames.push(item.username) });
// alert(`Сейчас в онлайн следующие пользователи:${usersOnlineNames}`);

// console.log(`usersOnlineNames`,usersOnlineNames);