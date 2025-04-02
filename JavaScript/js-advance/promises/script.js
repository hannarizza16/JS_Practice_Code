// destructuring

const fruits = ["apple", "banana", "orange"];
console.table(fruits);


// manual way of assigning
const a = fruits[0];
const b = fruits[1];
const c = fruits[2];


console.log('fruits', a, b, c)


// ARRAY ES6 modern
const tropical = ["apple", "banana", "orange"];

const [a1, b2, c3] = fruits;

console.log('fruits', a1, b2, c3)

// OBJECT ES6
const info = {
    name: "John",
    lastName: "Doe",
    age: 38,
    country: "USA",
    address: {
        street: "123 main st.",
        city: "New York",
        states: "NY",
        zip: "10001"
    }
}

console.table(info);

const {name, lastName, age, country, address: { street }} = info;

const fullName = `${name} ${lastName} lives at ${street}`
console.log

// reasigning to a new varible name
const person = {
    fName: 'Juan',
    lName: 'Cruz'
}

const {fName : firstName, lName: lastNamee} = person;