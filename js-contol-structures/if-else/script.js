

const x = 5;
const y = 6;
if ((x > 5) && (y < 10)) { // if true this will run
    console.log("a")
} else { // if false this will run
    console.log("b");
}

//Nested Ternary Operator
age = 15;
let isRightAge1 = age >= 13 ? age == 15 ? 'Not Right' : 'Right' : "I dont know";
// true ? true = Not Rigth
let isRightAge2 = age >= 16 ? age == 17 ? 'Not Right' : 'Right' : "I dont know";
//false ? false = I dont know
let isRightAge3 = age >= 16 ? age == 15 ? 'Not Right' : 'Right' : "I dont know";
// false ? true = I dont know
let isRightAge4 = age >= 13 ? age == 13 ? 'Not Right' : 'Right' : "I dont know";
// true : falsse = right 
console.log(isRightAge1);
console.log(isRightAge2);
console.log(isRightAge3);
console.log(isRightAge4);


console.log("------------");

let isRightAge5 = age >= 18 ? 'rigth' : age == 17 ? 'not right' : 'i dont know';
// true fals
console.log(isRightAge5);