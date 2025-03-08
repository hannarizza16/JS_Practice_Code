console.log(`Addition and Subtraction`);


let currenYear = 2025;
let birthYear = 1990;
let age = currenYear - birthYear;
console.log(`my age ${age}`);

// addition 
const num1 = 10; 
const num2 = 20;
const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// subtraction 
const num3 = 30;
const num4 = 40;
const diff = num4 - num3;
console.log(`The difference of ${num4} and ${num3} is ${diff}`);

// multiplication
const product =  num1 * num2;
console.log(`The product of ${num1} and ${num2} is ${product}`);

//division
const quotient = num1 / num3;
console.log(`The quotient of ${num1} and ${num2} is ${quotient}`);

// Modulo - remainder
const remainder = num1 % num2;
console.log(`The remainder of ${num1} and ${num2} is ${remainder}`);

const remainder1 = num1 % num1;
console.log(`The remainder of ${num1} and ${num2} is ${remainder1}`);


// expopnent 
const exponent = num1 ** 3;
console.log(`The exponent of ${num1} and ** 3 is ${exponent}`);

console.log("2" + 2 + "2");
console.log("2" + 2 - "2"); // 20 // converts both string into numbers
console.log("5" + 3 - 1);  // 53 - 1 = 52

console.log ("A" -1); //Not a number
console.log("A",  -1) // A -1


// true = 1
// false = 0
console.log(true == '1'); // true  true is 1 and '1' is string 1 since its using a equal comparison even if the type coercion is not the same.
console.log(false === 0); // false since u r using a  strict equal comparison false it checks its type.
console.log(false === true); // false
console.log(false === false) // true
console.log(false == '2');