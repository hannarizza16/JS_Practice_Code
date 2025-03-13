const myHeader = document.querySelector('h1');
const myParagraph = document.querySelector('.paragraph');
const myList = document.querySelector('.list')
const myImages = document.querySelectorAll('img');
const myButton = document.querySelector('button');
const myName = document.querySelector('.name');
// let myMonth = document.querySelector('.month');


for (let index = 0; index < myImages.length; index++){
    const element = myImages[index];
    console.log(element);
}

for (let index = 0; index < myImages.length; index++){
    const element = myImages[index];
    console.log(element.src); //if you want to get the source of the image
    console.log(element.alt);// if you want to get the alt of the image

}

myImages.forEach(image => {
    console.log(image);
    console.log(image.src);

});

// add event-listener
myButton.addEventListener('click', function(){
    console.log(`button has been clicked`);
    myButton.classList.toggle('new-class');
})

myName.addEventListener('click', function(){
    myName.style.cursor = 'pointer';
    myName.style.color = 'red';
    myName.style.fontSize = '50px';

})

const myMonth = document.createElement('h1');
myMonth.textContent = 'October';
// every time you create an element you have to append it to the body
// Append means to add something at the end of an existing structure.
document.body.appendChild(myMonth);