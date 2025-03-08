const convertPesoToUSD = (peso, rate) => {
    // rate = 50;
    return peso * rate;
};
console.log(convertPesoToUSD(1_000, 50));

console.log("------------");

const test = (x) => {
    console.log("hello");
    return x + 5;
    return x; //everything under return is not executeable.
};
console.log(test(10));

console.log("------------");

//ternary
const voterAge = (age) => {
    // let age = 23;
    return age >= 18
        ? "You are eligible to vote"
        : "You are not eligible to vote";
};

console.log(voterAge(18));

console.log("------------");

const voter = (age) => {
    if (age >= 18) {
        console.log("You are eligible");
    } else {
        console.log("you are not eligible");
    }
};

voter(18); // Calling the function




