// Write a function that reverses a string

let reverse = (num) => {
    return num.reverse();
}
console.log(reverse(1, 2, 3));

let reverseAgain = (num) => {
    return parseInt(num.toString().split('').reverse().join(''));
}

console.log(reverseAgain(1,2,3))