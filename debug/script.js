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