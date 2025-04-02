const myButton = document.querySelector('button');
const myH1 = document.querySelector('h1');
const myP = document.querySelector('p');


myButton.addEventListener('click', () => {
    alert("HI");
})

myH1.addEventListener('mouseover', () => {
    myH1.style.color = myH1.style.color === "blue" ? "black" : "blue";
})

myP.addEventListener('click', () => {
    myP.textContent = myP.textContent.split("").reverse().join("");

})

