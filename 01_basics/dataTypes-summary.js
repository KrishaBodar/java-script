// primitive data types
// 7 types of data types
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined 
// 6. symbol
// 7. bigint


const score = 100; // number
const scoreValue = 100.3; // number
const isLoggedIn = true; // boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol('123'); // symbol
const anotherId = Symbol('123'); // symbol

console.log(id === anotherId); // false, symbol is unique

const bigIntValue = 9012345678901234567890n; // bigint
// bigint is used to store large integers



// reference data types(non-primitive data types)
// 1. object
// 2. array 
// 3. function


const heros = ["spiderman", "batman", "superman"]; // array

const myObj = { // object
    name: "John",
    age: 30,
    isLoggedIn: true,
    score: 100
}
// here myObj is variable which is storing object
// myObj is reference data type
// object is a collection of key-value pairs  


const myFunction = function () { // function
    console.log("Hello World");
} // function
// here myFunction is variable which is storing function
// myFunction is reference data type
// function is a first class citizen in javascript
// function is a collection of code which can be executed
// function is a block of code which can be executed

console.log(typeof bigIntValue); // bigint
console.log(typeof score); // number  
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol); // function
console.log(typeof Array); // function
console.log(typeof Object); // function
console.log(typeof Function); // function
console.log(typeof Boolean); // function
console.log(typeof Number); // function
console.log(typeof String); // function
console.log(typeof Math); // object


/*********************************************************************************/


//  Stack(primitive), heap(non primitive)

//  Stack is used to store primitive data types and reference data types
//  Heap is used to store reference data types
//  Stack is used to store value types and reference types

//  Heap is used to store reference types
//  Stack is used to store value types


let myName = "krisha"
let myName2 = myName; // copy by value
myName2 = "John" // change the value of myName2

console.log(myName); // krisha
console.log(myName2); // John

let user1 = {
    name: "John",
    age: 30,
    isLoggedIn: true,
    score: 100
} // object

let user2 = user1; // copy by reference


user2.name = "Doe" // change the value of user2

console.log(user1); // { name: 'Doe', age: 30, isLoggedIn: true, score: 100 }
console.log(user2); // { name: 'Doe', age: 30, isLoggedIn: true, score: 100 }

