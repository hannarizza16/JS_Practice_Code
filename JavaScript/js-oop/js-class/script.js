
// this is a sample of an object to comapare with OOP
const obj = { 
    //key //value
    name: "Hanna",
    age: 30,
    
    greet: () => {// method or function
        return 'hello';
    }

    // greet: function() {// 
    //     return 'hello';
    // }

}

// thats why this is called OOP its because its more on Object
class Book { // CLASS declaration 
    // constructor is a native method, isa syang malaking function 
    // A constructor is a special method inside a class that initializes an object’s properties.
    // It runs automatically when an object is created using new ClassName().
    // isang instance from a class
    // holds the properties of the object
    //constructor 
    constructor(title, author, year){ 
        this.title = title;
        this.author = author
        this.year = year;
        this.sampleVar = 'Test'
        console.log('book initiated')
    }

    // Method
    getSummary() {
        const greet = ()=>{
            return `Hello ${this.author}`
        }
        
        return `${greet()} - ${this.title} was written by ${this.author} in ${this.year}`;
    }
    

    //Method
    getAge() { // is this function or method? function is when it is outside the class and has no access to the
        // object properties
        const years = new Date().getFullYear() - this.year; 
        console.log('this is a test');
        return `${this.title} is ${years} years old`;
    }
    
}


// Instantiate an object
const book1 = new Book('Book One', 'Hanna', 2013);
const book2 = new Book('Book Two', 'Rizza', '1998');
const book3 = new Book('Book 3', 'Malana', '2017');
const book4 = new Book('Book 3', 'Malana', '2017');


console.log(book1);
console.log(book1.getAge())
console.log(book1.getSummary())

console.log("=======")

// this is usually used in users

// Class
class User {
    constructor(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.emaillll = email;
    }

    //method
    getUserInfo (){
        return `User ${this.firstName} ${this.lastName} with email ${this.emaillll}`
    }
}

//Instantiate
const userOne = new User ('John', 'Doe', 'johndoe@email')
console.log(userOne.getUserInfo());

// ----------------------

