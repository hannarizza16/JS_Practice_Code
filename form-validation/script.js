const registerButton = document.querySelector('.register-btn');



registerButton.addEventListener('click', () => {
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const confirmPassword = document.querySelector('#confirmPassword').value.trim();
    
    const errorMessages = document.querySelectorAll('span');
    const errorUsername = document.querySelector('#usernameError')
    const errorPasswordMessage = document.querySelector('.passwordError');

    const users = [
        {dataUserName: 'hanna'},
        {dataUserName: 'jade'}
    ];

    let error;

    if (users.some(user => user.dataUserName === username)){
        errorUsername.textContent = 'Username is already taken';
        error = true;
    }


    if (username === "" || password === "" || confirmPassword === ""){
        
        errorMessages.forEach(errorMessage => {
            errorMessage.textContent = 'All fields must be filled out.';
        });
        error = true;
    } 
//shorter version

// const isEmpty = [username, password, confirmPassword].some(input => input.value.trim() === "");
    // errorMessages.forEach(error => {
    //     error.textContent = isEmpty ? "All fields must be filled out." : "";
    //     error.style.color = isEmpty ? "red" : "";
    // });
    


    if (password !== confirmPassword){
        errorPasswordMessage.textContent = 'Password did not match';
        errorPasswordMessage.style.color = 'red';
        error = true;
    }else{
        errorPasswordMessage.textContent = '';
    }

    if (!error){
        errorPasswordMessage.textContent = 'Registration Successful!';
        errorPasswordMessage.style.color = 'green';

        errorMessages.forEach(errorMessage => {
            errorMessage.textContent = '';
        });
        errorUsername.textContent = '';
    }
    
})