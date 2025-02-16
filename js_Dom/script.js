

// Static 

// const text = document.querySelector('#text')

document.querySelector('#red').addEventListener('click', function (){
    this.style.backgroundColor = this.style.backgroundColor === "red" ? "white" : "red";
});

document.querySelector('#orange').addEventListener('click', function () {
    this.style.backgroundColor = this.style.backgroundColor === "orange" ? "white" : "orange";
});

document.querySelector('#yellow').addEventListener('click', function () {
    this.style.backgroundColor = this.style.backgroundColor === "yellow" ? "white" : "yellow";
});

document.querySelector('#green').addEventListener('click', function () {
    this.style.backgroundColor = this.style.backgroundColor === "green" ? "white" : "green";
});

document.querySelector('#violet').addEventListener('click', function () {
    this.style.backgroundColor = this.style.backgroundColor === "violet" ? "white" : "violet";
});

document.querySelector('#blue').addEventListener('click', function () {
    this.style.backgroundColor = this.style.backgroundColor === "blue" ? "white" : "blue";
});

document.querySelector('#random').addEventListener('click', function () {
    const userColor = prompt("Enter a color name or a HEX code:");
            if (userColor) {
                // Try to apply the user's color input
                this.style.backgroundColor = userColor;
                // this.innerText = userColor;
            }
});

// const changeColor = document.querySelector('#random');
// console.log(changeColor);
// changeColor.addEventListener("click", function () {
//     let input = window.prompt("What color?");
//     changeColor.style.backgroundColor = input;
// })
