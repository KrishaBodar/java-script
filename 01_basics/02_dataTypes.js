"use strict"; // treat all js code as newer version

// alert(3+3); // alert is a browser function and we are using node js

console.log(3 + 3) // code readability is important
console.log("Hello World") // string


let firstName = "John"
let age = 30
let isLoggedIn = true


// primitive data types
// number => 2 to power 53 - 1
// BigInt => 2 to power 53 - 1
// string => "John Doe" 
// boolean => true/false
// null => empty value => standalone value => not equal to 0 or false
//  undefined => variable is declared but not assigned any value
// symbol => unique and immutable value


// non-primitive data types
// object => collection of key-value pairs => reference data type


console.log(typeof undefined) // undefined
console.log(typeof null) // object => bug in js