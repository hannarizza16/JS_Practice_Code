String.prototype.toAlternatingCase = function () {
    return this.split('').map(char => char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
     
   
    }; 
   
   console.log("hello World".toAlternatingCase());
   console.log("JavaScript".toAlternatingCase());
   console.log("HannA RiZzA".toAlternatingCase());