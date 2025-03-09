// simple object
let person = {
    FirstName: "Juan",
    lastName: "Dela Cruz",
    age: 30,
    eyeColor: "brown",
    hobbies: ["bike", "swim", "basketball"],
};

console.log(person);
console.log(person.hobbies[0]); // bike

// function inside an object;
let student = {
    studentName: "Hanna",
    studentLastName: "Malana",
    age: 18,
    bloodType: "0+",
    subject: ["English", "Math"],

    introduce: function () {
        return `Hello my name is ${this.studentName} ${this.studentLastName
            } I am age 
        ${this.age} my favorite subject are ${this.subject.join(", ")}`;
    },
};
console.log(student.introduce());

//multiple objects inside an array
let students = [
    {
        studentName: "Hanna",
        studentLastName: "Malana",
        age: 16,
        bloodType: "0+",
        subject: ["English", "Math"],
    },
    {
        studentName: "John",
        studentLastName: "Paul",
        age: 18,
        bloodType: "0+",
        subject: ["Science", "Math"],
    },
    {
        studentName: "Maria",
        studentLastName: "Garcia",
        age: 20,
        bloodType: "B+",
        subject: ["History", "Psychology"],
    },
];

let studentAdult = students
    .filter((student) => student.age <= 18)
    .map((student) => `${student.studentName} ${student.studentLastName}`);



console.log(studentAdult);
