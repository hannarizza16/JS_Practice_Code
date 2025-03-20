// Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result. Most loops can be rewritten in a recursive style, and in some functional languages this is the default way to write loops.

// Recursive Function - Factorial
// Factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
// Another way to write loops
// fatorial(8) = 8
// fatorial(8) = 8 * 7
// fatorial(8) = 8 * 7 * 6
// fatorial(8) = 8 * 7 * 6 * 5
// fatorial(8) = 8 * 7 * 6 * 5 * 4
// fatorial(8) = 8 * 7 * 6 * 5 * 4 * 3
// fatorial(8) = 8 * 7 * 6 * 5 * 4 * 3 * 2
// fatorial(8) = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
// fatorial(8) = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 * 1
// fatorial(8) = 40320
function factorial(n) {
    if (n === 0) {
      return 1; // Base Case
    }
    
    return n * factorial(n - 1); // Recursive Case
  
    // Example: 
    // factorial(5) = 5 * 
    // factorial(4) = 5 * 4 * 
    // factorial(3) = 5 * 4 * 3 * 
    // factorial(2) = 5 * 4 * 3 * 2 * 
    // factorial(1) = 5 * 4 * 3 * 2 * 1 * 
    // factorial(0) = 5 * 4 * 3 * 2 * 1 * 1 = 120
  }
  
  console.log(factorial(8)); // 40320
   
  // Recursive Function - Fibonacci
  // Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.
  // 1st Fibonacci number is 0
  // 0 + 1 = 1
  // 2nd Fibonacci number is 1
  // 1 + 1 = 2
  // 3rd Fibonacci number is 1
  // 1 + 2 = 3
  // 4th  Fibonacci number is 2
  // 2 + 3 = 5
  // 5th Fibonacci number is 3
  // 3 + 5 = 8
  // 6th Fibonacci number is 5
  // 5 + 8 = 13
  // 7th Fibonacci number is 8
  // 8 + 13 = 21
  // 8th Fibonacci number is 13
  // 9th Fibonacci number is 21
  function fibonacci(n) {
    if (n <= 1) {
      return n; // Base Case
    }
  
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive Case
  
    // Example: 
    // fibonacci(6) = fibonacci(5) + fibonacci(4) = fibonacci(4) + fibonacci(3) + fibonacci(3) + fibonacci(2) = fibonacci(3) + fibonacci(2) + fibonacci(2) + fibonacci(1) + fibonacci(2) + fibonacci(1) + 1 + 1 = 8
  }
  
  console.log(fibonacci(8)); // 21
  