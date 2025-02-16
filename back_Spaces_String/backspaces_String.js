const processString = (s) => {
    let stack = [];
    
    for (let char of s) {
        if (char === '#') {
            if (stack.length > 0) {
                stack.pop(); // Remove last character if stack is not empty
            }
        } else {
            stack.push(char); // Add character to stack
        }
    }
    
    return stack.join('');
}

// Test cases
console.log(processString("abc#d##c"));      // "ac"
console.log(processString("abc##d######"));  // ""
console.log(processString("#######"));       // ""
console.log(processString(""));              // ""
