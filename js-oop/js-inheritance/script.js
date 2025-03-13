// this is a sample of an object to comapare with OOP
const obj = {
    //key //value
    name: "Hanna",
    age: 30,

    greet: () => {
        // method or function
        return "hello";
    },

    // greet: function() {//
    //     return 'hello';
    // }
};

// thats why this is called OOP its because its more on Object
class Book {
    // CLASS declaration
    // constructor is a native method, isa syang malaking function
    // A constructor is a special method inside a class that initializes an object’s properties.
    // It runs automatically when an object is created using new ClassName().
    // isang instance from a class
    // holds the properties of the object
    //constructor
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.sampleVar = "Test";
        console.log("book initiated");
    }

    // Method
    getSummary() {
        const greet = () => {
            return `Hello ${this.author}`;
        };

        return `${greet()} - ${this.title} was written by ${this.author} in ${this.year
            }`;
    }

    //Method
    getAge() {
        // is this function or method? function is when it is outside the class and has no access to the
        // object properties
        const years = new Date().getFullYear() - this.year;
        console.log("this is a test");
        return `${this.title} is ${years} years old`;
    }
}

// Instantiate an object
const book1 = new Book("Book One", "Hanna", 2013);
const book2 = new Book("Book Two", "Rizza", "1998");
const book3 = new Book("Book 3", "Malana", "2017");
const book4 = new Book("Book 3", "Malana", "2017");

console.log(book1);
console.log(book1.getAge());
console.log(book1.getSummary());

console.log("=======");

// this is usually used in users

// Class
class User {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emaillll = email;
    }

    //method
    getUserInfo() {
        return `User ${this.firstName} ${this.lastName} with email ${this.emaillll}`;
    }
}

//Instantiate
const userOne = new User("John", "Doe", "johndoe@email");
console.log(userOne.getUserInfo());

// ----------------------

console.log("=================INHERITANCE==============+=====");

// Inheritance

// Parent Class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.color = "Light Brown"; // static
    }

    eat() {
        return `${this.name} is eating`;
    }
    makeSound() {
        return `Making sound`;
    }
    old(){
        return `${this.name} is ${this.age} years old`;
    }
}

// Instantiate
const animal = new Animal("Dog", 12);
console.log(animal.eat());
console.log(animal.old());

// Sub class - child class inherits
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    // Overriding a metthod
    makeSound(){
        return `${this.name} is Barking`;
    }
    dogInfo(){
        return `${this.name} is a ${this.breed} that has as ${this.color} fur color and is ${this.age} years old`;
    }
}

const dog = new Dog("Dog", 12, "Golden Retriever");
console.log(dog.makeSound());
console.log(dog.dogInfo());
console.log(dog.eat());


// Hoisting 
// Histing is a JavaScript mechanism where variables and function declarations are 
// mooved to the top of their scope before code execution.

// works only with function declaration
printName();

function printName(){ // works only wiith function declaration
    console.log('Hanna');
}


// sample of function expression 
printFirtName();

const printFirstName = function(){ // this will not work with function expression 
    console.log(`rizza`);
}


// sample of arrow function
printLastName();

const printLastName = () => {
    console.log(`Malana`);
}
