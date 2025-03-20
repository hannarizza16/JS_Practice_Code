const greetings = document.querySelector('p');

greetings.addEventListener('hover', changeGreetings);

function changeGreetings(){
    let greetChange = prompt('Enter greetings');
    greetings.textContent = 'Hello, ' + greetChange;
}