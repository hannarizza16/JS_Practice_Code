// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error));

// fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error));


// // Handling HTTP errors
// fetch('https://jsonplaceholder.typicode.com/users/10')
// .then(response => {
//     // if response is not ok, throw an error
//     if (!response.ok) {
//         throw new Error(`HTTP error, status:  ${response.status}`); 
//     }
//     // if response is ok. return the response
//     return response.json(); 
// })
// .then(json => console.log(json))
// .catch(error => console.log(error));

// refactor to async/await
// async - asynchronous
// await - wait until the promise is settled /  pauses the execution of the function until the promise is settled


async function fetchUsers(){
    try{
        // fetching data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        // if (!response.ok) {throw new Error(`HTTPS error! Status: ${response.status}`);}

        // converts the response to JSON
        const users = await response.json()
        
        displayUsers(users)

    } catch(error){
        //log the error
        console.error(error)
        alert("Failed to fetch API Key")
        throw new Error("Failed to fetch API Key");
    }
}

fetchUsers()

const displayUsers = (users) => {
    const userNames = users;
    const userList = document.querySelector('#user-list')
    userList.innerHTML = userNames.map(user => `<h2>${user.name}</h2>`).join('');
    // userList.textContent = userNames.map(user => user.name)  plain text
}
