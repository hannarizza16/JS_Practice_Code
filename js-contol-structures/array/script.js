const array = [1,2,3,4,5,6,7,8,9,10];

for (let index = 0; index < array.length; index++){
    // console.log(index) // this will output the size or count inside the array
    const element = array[index]; // calls the array and the start of index w/c is 0;
    // console.log("array", index, "number", element); 
    console.log(`index is ${index} count is ${element}`);
}

console.log("2 ways to initializes an arry=======")

// 2 ways to initializes an array
let people = []; // empty array
let students = new Array(); // empty array 

let colors = ["red", "orange", "yellow", "blue"];
colors.shift();
console.log(colors);

console.log(colors.indexOf("violet")) // -1 null undefined

////////////////////


//.splice() method
let months = ["Jan", "Feb", "March","April", "May", "June", "July"];

console.log(months.splice(2 , 4));
console.log(months);

// .slice(start, end) method

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(days.slice(1, 5));
console.log(days);
