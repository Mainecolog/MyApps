const   USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const usersIds = [5, 6, 2, 1];
getUsersByIds = (ids) => {
    const requests = ids.map((id)=>
        fetch(`${USERS_URL}/${id}`));
        Promise.all (requests)
        .then ((users)=>{
            const dataOfUsers = users.map((response)=>
            response.json());
            return Promise.all(dataOfUsers);
        })
        .then ((users)=>{
        const dataContainer = document.getElementById('data-container');
        const loadingData = document.getElementById('loader');
        dataContainer.removeChild(loadingData);
        console.log(users);
        users.forEach((user)=>{
            const name = user.name;
            const listOfUsers = document.createElement('li');
            const linkUsers = document.createElement('a');
            dataContainer.appendChild(listOfUsers);
            linkUsers.href = '#';
            linkUsers.textContent = name;
            listOfUsers.appendChild(linkUsers);
             })
        })
        .catch(error => {
            console.error(`error`,error)
        })

};
getUsersByIds(usersIds)