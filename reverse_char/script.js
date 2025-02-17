// const solve = (str) => {
//     return str.split(' ')
//     .map(word => word.split('').reverse().join(''))
//     .reverse().join(' ');
// };
// console.log(solve('hello worlds')); // olleh sdlrow



function solve(str) {
    let letters = []; // Store non-space characters
    let result = [];  // Store final string

    // Step 1: Store letters (ignore spaces)
    for (let char of str) {
        if (char !== ' ') {
            letters.push(char);
        }
    }

    // Step 2: Rebuild the string
    for (let char of str) {
        if (char === ' ') {
            result.push(' '); // Keep spaces in place
        } else {
            result.push(letters.pop()); // Take the last letter (reversed)
        }
    }

    return result.join('');
}

// Test cases
console.log(solve("i love code")); // "e doce voli"
console.log(solve("hello worlds")); // "d lrow olleh"
console.log(solve("abc def ghi")); // "i hg fed cba"
