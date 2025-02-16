String.prototype.alternatingString - function(){
    return this.split('')
    .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');

};

console.log("hello WORLD".toAlternatingCase());  // "HELLO world"
console.log("JavaScript".toAlternatingCase());   // "jAVAsCRIPT"
console.log("HanNa RiZzA".toAlternatingCase());  // "hANnA rIzZa"