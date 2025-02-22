// fetch API
//fetch API is a simple interface for fetching resources. 
// Fetch makes it easier to make web requests and handle responses than with the older XMLHttpRequest, 
// which often requires additional logic (for example, for handling redirects).

// fetch() method is used to request a resource from the network.


const jsonOBj = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit"
};

const obj ={
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit',
    completef: false
};

// 2 parameters: fetch(url, [options])
// base url: https://jsonplaceholder.typicode.com
// query url: /todos/1
fetch('https://jsonplaceholder.typicode.com/todos/1') // fetch method
.then(response => response.json()) // convert to JSON
.then(json => console.log(json)); // log to JSON data
//error handling
// .catch(error => console.error(error)) // log the ERROR


// PokeAPi
fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
.then(response => response.json())
.then (json => console.log(json))
//error handling
// .catch(error => console.error(error))


// Handling HTTP errors
fetch('https://jsonplaceholder.typicode.com/users/10')
// .then() - returns a promise
// promise - represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// promises is blocking - it waits for the promise to be resolved
// three (3) states of a promise: pending, resolved, rejected
// 1. pending - initial state, neither fulfilled nor rejected
// 2. resolved - meaning that the operation completed successfully
// 3. rejected - meaning that the operation failed
.then(response => {
    // console.log(response)
    
    if(!response.ok){ // if response is not ok:true
        //throw an error
        //throw - creates a custom error
        //new Error() - creates a new error object
        //Error message - 'Network response was not ok'

        throw new Error('Network response was not ok');
    }
    // if tthe respoonse is ok:true, return the response
    //return is used to return a value from a function
    return response.json();

})
.then(json => console.log(json))



// Async/Await
// try/catch

// refactor to async/await
// async function - is not blocking
// await - pauses the execution of the function until the promise is resolved
// async function returns a promise
// await can only be used inside an async function

//let data = []; // declare an empty array data that will store the fetched data

// async function allows you to write promise-based code as if it were synchronous
// async function allows you to use await inside the function enabling you to pause 
// the execution of the function until the promise is resolved
async function fetchUsersData(){
    //try - is a block of code to be tested for errors
    //catch - is a block of code to be executed, if an error occurs in the try block
    // execution moves to the catch block
    try{
        // code line 1 
        // code line 2
        // code line 3 //error
        // code line 4

        //fetch data
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users'); // the await keyword makes JavaScript wait for the response before moving to the next line
        // console.log("async function response", fetchUsers);


         //convert to JSON
         const users = await userResponse.json(); 
         //  .json() - method that extrects the JSON body content from the response
         // await - ensures JavaScripts waits for the conversion before proceeding
         // users - now contains an array of user objects

         // console.log("Users Data: ", users); // * this returns an array of strings // debugging

        //data = users; // store the fetched data in the data array
        // data is no longer an empty array

        displayUsers(users);

        // catch and handles errors
    } catch (error){
        // handle the error
        console.error(error)
        throw new Error(`Fetching users error: ${error}`);
    }
}

// Immediately Invoked an Anonymous Async Function to fetch data

// Immediately Invoked Function Expression (IIFE)
   // the function automatically runs without needing to be called
   // the async fuction is called immediately and allows you to use await inside the function

// (async function () {
//     await fetchUsersData();
//             // calls fetchData function and waits for its promise/process to complete
//             // shows the fetched data array
//     console.log("Data after fetching: ", data); // Logs correctly after fetching
// })();

fetchUsersData() //.then(() => console.log("Other method for getting data after fetching: ", data));



// display users in HTML
const displayUsers = (users) => {
    const userNames = users;
    // console.log("display users:", userNames);
    const usersList = document.querySelector('#users-container');
    
    usersList.innerHTML = userNames.map(user => `<h2>${user.name}</h2>`).join('')

}

