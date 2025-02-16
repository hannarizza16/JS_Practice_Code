const unusualFive = () => 'abcde'.length;

const unusualFive1 = () => 'abcde'.split('').length;

const unusualFive2 = () => 'abcde'.split('').map((char) => char).length;

const unusualFive3 = () => {
    return 'abcde'.length;
};

console.log(unusualFive()); // 5
console.log(unusualFive1()); // 5
console.log(unusualFive2()); // 5   
console.log(unusualFive3()); // 5