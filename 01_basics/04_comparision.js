/*

the reason is that an equality check == and comparision check >, <, >=, <=

comparisom convert null to a number and treating it as 0
null >= 0 => true
null <= 0 => true
null > 0 => false

*/// Comparision Operators


//console.log(2>1); // true
// console.log(2<1); // false
// console.log(2>=1); // true
// console.log(2<=1); // false
// console.log(2==1); // false
// console.log(2!=1); // true
// console.log(2===1); // false


console.log(2=="2"); // true
console.log(2==="2"); // false
console.log("2" > 1); // true
console.log("2" < 1); // false
console.log("02" >= 1); // true

// do not compair string with number
// which means do not compare different data types

console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// null is not equal to 0


console.log(undefined > 0); // false  
console.log(undefined < 0); // false
console.log(undefined == 0); // false  

// avoid using undefined in comparision
// avoid using null in comparision

// === is strict equality operator

console.log(2 == "2"); // true
console.log(2 === "2"); // false
console.log(2 != "2"); // false