const para = document.querySelector('p');
const welcomeNote = document.querySelector('h1');

// welcomeNote.addEventListener('click', updateName);
para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Enter a new name'); // parang alert
    para.textContent ='Player 1: ' + name;
    welcomeNote.textContent = 'Hello, ' + name;
}