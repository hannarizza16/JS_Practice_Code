// Debug this

// function getSumOfDigits(integer){
//     var sum = null; // this should be 0
//     var digits = Math.floor(integer).toString();  
//     for(var ix = 1; ix < digits.length; ix = sum + 1){
//         sum =+ digits[ix + 1]);

//     }
//     return sum;
// }

// Answer

let getSumOfDigits = (integer) => {
    let sum = 0; 
    let digits = Math.floor(integer).toString();

    for(let ix = 0; ix < digits.length; ix++){
        sum += parseInt(digits[ix]);
    }
    return sum;
}

// parseInt() is used to convert a string to an integer. 
// this ignores any decimal points and returns only the integer part of the number. 3.14 will return 3.
// this ignores any non-numeric characters and returns the first number in the string. "3.14" will return 3. 
//this stops at the first non-numeric character and returns the number up to that point. 123abc will return 123.

// console.log(parseInt("123"));   // 123 (same as Number)
// console.log(parseInt("123abc"));// 123 (stops at 'abc')
// console.log(parseInt("3.14"));  // 3 (removes decimal)
// console.log(parseInt("00123")); // 123 (removes leading zeroes)
// console.log(parseInt("010", 10)); // 10 (explicit base 10)
// console.log(parseInt("010", 8));  // 8  (explicit base 8)


// while 

// Nummber() is used to convert a string to a number.
// It will return NaN if the string is not a number.
// It will return 0 if the string is empty.
// it will return the number if the string is a number.


// console.log(Number("123"));   // 123 (converted to a number)
// console.log(Number("123abc")); // NaN (invalid number)
// console.log(Number("3.14"));  // 3.14 (preserves decimals)
// console.log(Number(true));    // 1 (true converts to 1)
// console.log(Number(false));   // 0 (false converts to 0)