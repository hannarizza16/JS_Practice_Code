// true = 1
// false = 0
console.log(true == '1'); // true  true is 1 and '1' is string 1 since its using a equal comparison even if the type coercion is not the same.
console.log(false === 0); // false since u r using a  strict equal comparison false it checks its type.
console.log(false === true); // false
console.log(false === false) // true
console.log(false == '2');

console.log("-----------");

// -----------------------------

let x = 1;
let y = 9;
console.log((x>y || x == 1) && !(y === '9')); // true