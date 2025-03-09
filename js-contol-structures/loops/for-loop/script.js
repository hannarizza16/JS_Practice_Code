// for loop 
//initialization; condition; increment
for ( let x = 1; x < 10; x++){
    console.log(x);
}
console.log(" Example 1=== ")

const number = [1, 2, 3, 4, 5];
for (let count = 0; count < number.length; count++){
    const numberArr = number[count];
    console.log(`Array ${numberArr}`);
}
console.log(" Example 2=== ")

const numbers = [1, 2, 3, 4, 5];
for (let count = 0; count < numbers.length; count++){
    console.log(`Array ${numbers}`);
}
console.log(" Example 3=== ")

const numbersz = [1, 2, 3, 4, 5];
for (let count = 0; count < numbersz.length; count++){
    console.log(numbersz)
}



// *****
// ****
// ***
// **
// *
console.log("activity 1 =====");
for(let count = 5; count > 0; count-- ) {
    let asterisk = "";
    for( let num = 0; num < count; num++){
        asterisk = asterisk + "*";
    }
    console.log(asterisk);
}

console.log("activity 2 =====");
for(let count = 5; count > 0; count--){
    console.log('*'.repeat(count));
}

