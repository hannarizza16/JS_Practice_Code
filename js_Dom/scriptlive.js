// Using JS, add an event listener to each box such that when the box is clicked, the box’s background color will change to the box’s text:
// Eric 

// create a variable to select all the boxes
const box = document.querySelectorAll(".box");

// add an event listener to each box
box.forEach((box) => {
    // add an event listener to each box that listens for a click
    box.addEventListener("click", () => {
      // trim - removes whitespace from both ends of a string
      // toLowerCase - converts a string to lowercase letters
      
      // box.style.backgroundColor = box.textContent.trim().toLowerCase();

      // checks the current background color of the box if it's equal to it's text content
      if (box.style.backgroundColor == box.textContent.trim().toLowerCase()) {
        // if true it will set the background-color to white
        box.style.backgroundColor = "white";
      } else {
        // if false it will change the background color of the box to the text content of the box
        box.style.backgroundColor = box.textContent.trim().toLowerCase();
      }
    })
});

// Mike
const changeColor = document.querySelector('.chooseColorBox');
changeColor.addEventListener("click", () => {
    if (changeColor.classList.contains("chooseColorBox")) {
        const userColor = prompt("Enter a color:");
        if (userColor) changeColor.style.backgroundColor = userColor;
    } else {
      changeColor.style.backgroundColor =
      changeColor.style.backgroundColor === changeColor.textContent.toLowerCase()
                ? "white"
                : changeColor.textContent.toLowerCase();
    }
});

// Paul
// const changeColor = document.querySelector('.chooseColorBox');
// console.log(changeColor);
// changeColor.addEventListener("click", function () {
//     let input = window.prompt("What color?");
//     changeColor.style.backgroundColor = input;
// })

// Migs
// const changeColor = document.querySelector('.chooseColorBox');
//  console.log(changeColor);
//  changeColor.addEventListener("click", function () {
//   if (changeColor.style.backgroundColor && changeColor.style.backgroundColor !== "white") {
//     changeColor.style.backgroundColor = "white";
//   }
//   else {let input = window.prompt("What color?");
//     if (input) {
//       changeColor.style.backgroundColor = input;
//     }
//   }});

  
// UE
// const changeColor = document.querySelector('.chooseColorBox');
// changeColor.addEventListener('click', function ()) {
//   if (changeColor.style.backgroundColor !== 'white' && 
//     changeColor.style.backgroundColor !== '') 
//  {
//   changeColor.style.backgroundColor = 'white';
// } else {
//   const userColor = prompt('Enter a Color');
// if (userColor) {
//   changeColor.style.backgroundColor = userColor;
// }
// }
// }