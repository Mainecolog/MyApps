const   USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getAllUsers = () =>{
fetch(USERS_URL)
    .then((response)=>{
    return response.json()
    })
    .then ((users)=>{
        const dataContainer = document.getElementById('data-container');
        const loadingData = document.getElementById('loader');
        dataContainer.removeChild(loadingData);
        users.forEach(user => {
            const name = user.name;
            // console.log(name);
            const listOfUsers = document.createElement('li');
            const linkUsers = document.createElement('a');
            dataContainer.appendChild(listOfUsers);
            linkUsers.href = '#';
            linkUsers.textContent = name;
            listOfUsers.appendChild(linkUsers);
        });
    })
    .catch(error => {
        console.log(`error`,error)
    })
    .finally(()=>{
        console.log('finally');
    })
};

getAllUsers()
