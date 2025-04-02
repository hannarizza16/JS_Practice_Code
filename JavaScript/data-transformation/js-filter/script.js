//exercise 1
const number = [4, 3, 6, 8, 10, 7, 13];

const filterNumbers = number.filter(num => {
    return num % 2 === 0 ;
}) 
console.log(filterNumbers); // [4 6 8 10] 

//exercise 2 filtering the data and getting only what needed
const prospects = [
    {
        fullname: "John Doe",
        age: 25,
        isEmployed: true,
        isSingle: true,
    },
    {
        fullname: "Hanna Malana",
        age: 23,
        isEmployed: true,
        isSingle: false,
    },
    {
        fullname: "Jackie Chan",
        age: 50,
        isEmployed: false,
        isSingle: true,
    },
    {
        fullname: "Sammy G.",
        age: 80,
        isEmployed: false,
        isSingle: false,
    }
];

const employed = () => {
    return prospects.filter(prospect => prospect.isEmployed && prospect.isSingle)
}
const age = () => {
    return prospects.filter(prospect => prospect.age >= 50 )
}
console.log(age().map(prospect => `${prospect.fullname} (${prospect.age})`).join(", ")); 
console.log(employed());

// exercise 3
const n = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);
console.log(n); // [2, 4, 6]

// exercise 4 
const vowels = ['a', 'e', 'i', 'o', 'u'];
const inputString = "uplift";
const filteredString =  vowels.filter(string => inputString.includes(string));
console.log(filteredString);

//exercise 5 use filter to get all elements > 10
const input = [1, 2, 11, 10];
const filterElements = input.filter(s => {
    return s > 10;
})
console.log(filterElements);

//other way
const filterIt = input.filter(s => {
    if (s > 10){
        return s
    }
})
console.log(filterIt);

//other way 
const filterItAgain = input.filter(s => s > 10);
console.log(filterItAgain);

//exercise 6 use filter to get all non-empty strings
const stringInput = ['abc', '', 'd', ''];
const removeEmpty = stringInput.filter(s => s !== '');
console.log(removeEmpty);

//other way 
const myString = ['abc', '', 'd', ''];
const noEmptysTRING = myString.filter(string => string.length > 0 );
console.log(noEmptysTRING);

//use filter to get strings that starts with letter a
const chosenStrings = ['Apple', '', 'Banana', 'atis'];
const filteredWord = chosenStrings.filter(word => word[0] === "A" || word[0] === "a" );
console.log(filteredWord); // Apple

//other way
const filteredWordAgain = chosenStrings.filter(word => word.toLowerCase().startsWith("a"));
console.log(filteredWordAgain); // Apple