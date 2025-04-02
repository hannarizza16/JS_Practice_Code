
// Using function
const output = (num) => {
    return num.map((number) => {
        return number * 2;
    });
};

const numbers = [1, 2, 3, 4, 5, 6];
console.log(output(numbers));

// another way

const output2 = (num) => num.map((number) => number * 2);
console.log(output2([1, 2, 3, 4, 5]));

//another way

const numbers1 = [1, 2, 3, 4, 5, 6];
const doubleNumber = numbers1.map(number => {
    return number * 2;
})
console.log(doubleNumber);


// exercise 
const numbers2 = (num) => num.map(number => number + 2);
console.log(numbers2([1, 2, 3, 4, 5]));

// exercise 2 whats x? 
const x = ["zzz1", "2", "3"].map(s => s.length);
console.log(x); // (3) [4, 1, 1]

// nested array of objects
const array = [
    { name: "jill", age: 23, subjects: ["math", "science"] },
    { name: "jill", age: 23, subjects: ["math", "science"] },
    { name: "jill", age: 23, subjects: ["math", "science", "programming"] },
];
const subjects = array.map(item => item.subjects.length);
console.log(subjects); // [2,2,3]

// exercise 3 what is y?
const y = [1, 2, 3].map(s => s.length);
console.log(y); // [undefined, undefined, undefined ]

//exercise 4 use map to square the value of every
//element in the array
const input = [1, 2, 3, 4, 5]
const square = input.map(s => s ** 2);
console.log(square); // [1, 4, 9, 8, 10]

//exercise 5  use map to lowercase the strings in the given array
const letters = ["A", "b", "C"];
const transformLetters = letters.map(letter => letter.toLowerCase())
console.log(transformLetters); // ['a', 'b', 'c']

// exercise 5 convert letters
const conditionLetters = letters.map(letter => {
    if (letter === letter.toLowerCase()) {
        return letter = letter.toUpperCase();
    } else {
        return letter = letter.toLowerCase();
    }
    // return letter // return the original letter if it's already uppercase
})
console.log(conditionLetters)


// exercise 6 fizzbuzz
const input1 = [1, 3, 6, 5, 4, 15];
const fizzbuzz = input1.map(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz'
    } else if (num % 3 === 0) {
        return 'fizz'
    } else if (num % 5 === 0) {
        return 'buzz'
    } else {
        return num //return the original number
    }
})

console.log(fizzbuzz); //[1, 'fizz', 'fizz', 'buzz', 4, 'fizzbuzz']

// using function 
const input2 = [1, 3, 6, 5, 4, 15, 30, 1];
const fizzbuzz1 = (input) => {
    return input.map(num => {
        if (num % 3 === 0 && num % 5 === 0) {
            return 'fizzbuzz'
        } else if (num % 3 === 0) {
            return 'fizz'
        } else if (num % 5 === 0) {
            return 'buzz'
        } else {
            return num //return the original number
        };
    })
}
console.log(fizzbuzz1(input2)); // [1, 'fizz', 'fizz', 'buzz', 4, 'fizzbuzz', 'fizzbuzz', 1]

// using function and ternary
const input3 = [1, 3, 6, 5, 4, 15, 30, 1];
const fizzbuzz2 = (input) => {
    return input.map(num => {
        return  (num % 3 === 0 && num % 5 === 0) ? 'fizzbuzz' :
                (num % 3 === 0) ? 'fizz' :
                (num % 5 === 0) ? 'buzz' :
                num;
    })
}
console.log(fizzbuzz2(input3));