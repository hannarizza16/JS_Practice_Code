const numbers = [1, 2, 3];
const output = numbers.reduce((a, b) => a * b, 1)
console.log(output); // 6

// example 1
const numbers1 = [1, 2, 3];
const output1 = numbers.reduce((acc, curr, index, arr) => {
    console.log(`Index: ${index}, Accumulator: ${acc}, Current Value: ${curr}`);
    return acc * curr;
}, 1);
console.log(output1);

// use .reduce() to (concatenate) join elements in an array
const string = ['a', 'long', 'time', 'ago'];
const concatenatedString = string.reduce((a, b) => a + " " + b);
console.log(concatenatedString);

//but you can use .join()
const string1 = ['a', 'long', 'time', 'ago'];
const concatenatedString1 = string1.join(" ");
console.log(concatenatedString1);

// use reduce to get users' name and role from an array object.
var users = [
    {
        firstName: 'Rowell',
        lastName: 'Artiage',
        role: 'Teaching Partner'
    },
    {
        firstName: 'Chris',
        lastName: 'Rock',
        role: 'Student'
    }
]

const info = users.reduce((accumulator, currentValue) => {
    accumulator[currentValue.firstName + " " + currentValue.lastName] = currentValue.role;
    return accumulator;
})
console.log(info);

const info2 = users.reduce((accumulator, user) => {
    return accumulator + `${user.firstName} ${user.lastName} `;

}, `Users: `);
console.log(info2);

//you can also usse .map();

const info3 = `Users: ` + users.map(user => `${user.firstName} ${user.lastName} (${user.role})`).join(", ");
console.log(info3);



// example 2 use .reduce() to get the total bill of food prices
const steakPrices = [1_000, 2_000, 3_000, 4_000, 5_000];

const total = `Total: ` + steakPrices.reduce((accumulator, price) => {
    console.log(`accumulator: ${accumulator}, price: ${price}`)
    return  accumulator + price});

console.log(total);

// the given input is an array of numbers, return the sum of all the positive ones
const input3 = [0, -5, -0, 12, -8, 15, 20];

const filteredNumber = input3.filter(number => {
    return number > 0;
})
const addPositiveNumber = filteredNumber.reduce((acc, curr) => acc + curr);

console.log(filteredNumber); //[12, 15, 20]
console.log(addPositiveNumber); // 47