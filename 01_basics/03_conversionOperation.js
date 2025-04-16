let score = "10";

console.log(typeof score); // number
console.log(typeof (score)); // number

let valueInNumber = Number(score); // convert string to number
console.log(typeof score); // number
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 10

// score = null then output of this will be 0
// "33" => 33
// "33abc" => NaN
// "abc" => NaN
// true => 1
// false => 0
// undefined => NaN

let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn); // convert number to boolean
console.log(booleanLoggedIn); // true

// 1 => true
// 0 => false
// "" => false
// " " => true
// null => false

let someNumber = 10;
let someString = String(someNumber); // convert number to string
console.log(someString); // "10"
console.log(typeof someString); // string 



/***********************************Operations**********************************/

let value = 3
let negativeValue = -value; // unary operator
// console.log(negativeValue); // -3

/*
console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4  
console.log(2/2); // 1
console.log(2%2); // 0
console.log(2**2); // 4
console.log(2**3); // 8 2^3 = 2*2*2 = 8
*/

let str1 = "Hello";
let str2 = " World";

let str3 = str1 + str2; // string concatenation
// console.log(str3); // Hello World
// console.log(str1 + str2); // Hello World
// console.log(str1 + 2); // Hello2
// console.log(str1 + true); // Hello true
// console.log(str1 + null); // Hellonull
// console.log(str1 + undefined); // HelloundefinedArjuna said: O Madhusoodana (Annihilator of demon Madhu)! How
// console.log("1" + 2); // 12
// console.log(2 + "1"); // 21
// console.log(2 + 2 + "1"); // 41
// console.log(2 + "1" + 2); // 212
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

console.log(true); // true
console.log(+true); // 1
console.log(-true); // -1
console.log(+""); // 0

//let num 1, num2, num3; // declare multiple variables


// num1 = num2 = num3 = 10; // assignment operator

let gameCounter = 100;
gameCounter++
// console.log(gameCounter); // 101
gameCounter--
// console.log(gameCounter); // 100 

gameCounter += 10; // gameCounter = gameCounter + 10
// console.log(gameCounter); // 110
++gameCounter; // gameCounter = gameCounter + 1
// console.log(gameCounter); // 111
--gameCounter; // gameCounter = gameCounter - 1
// console.log(gameCounter); // 110
gameCounter -= 10; // gameCounter = gameCounter - 10
// console.log(gameCounter); // 100

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-abstract-relational-comparison