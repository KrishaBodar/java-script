// numbers

const score = 400
const balance = new Number(100)
console.log(score); // 400
console.log(balance); // [Number: 100] 

console.log(balance.toString()); // 100
console.log(balance.toString(2)); // 1100100
console.log(balance.toString(16)); // 64
console.log(balance.toString(8)); // 144
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00
console.log(balance.toPrecision(2)); // 100
console.log(balance.toPrecision(5)); // 100.000
console.log(balance.toExponential(2)); // 1.00e+2

const otherNumber = 100.123456789

// toPrecision is give the answer in round off
console.log(otherNumber.toPrecision(2)); // 100
console.log(otherNumber.toPrecision(5)); // 100.12

const one = 1000000
console.log(one.toLocaleString()); // 1,000,000
console.log(one.toLocaleString('en-IN')); // 10,00,000

/************************************************************************************************* */
// Math

console.log(Math)
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.abs(-10)); // 10
console.log(Math.round(10.5)); // 11
console.log(Math.round(10.4)); // 10
console.log(Math.ceil(10.1)); // 11
console.log(Math.floor(10.9)); // 10
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.random()); // 0.123456789
console.log(Math.random() * 100); // 12.3456789
console.log(Math.floor(Math.random() * 100)); // 12
console.log(Math.floor(Math.random() * 100) + 1); // 12
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.max(10, 20, 30)); // 30


const min = 10
const max = 20

const random = Math.floor(Math.random() * (max - min + 1)) + min
console.log(random); // 10 - 20

