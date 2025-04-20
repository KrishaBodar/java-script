// if
/* 
if (condition) {
     code to be executed if condition is true 
}

if (condition = false) {
      code to be executed if condition is false
}
*/

// comparision operators
// ==, ===, !=, !==, >, <, >=, <=
// logical operators
// &&, ||, !
// ternary operator
// condition ? true : false
// switch statement
/*
switch (expression) { 
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}
*/
// for loop
/*
for (initialization; condition; increment/decrement) {
    // code block
}
*/
// while loop
/*
while (condition) {
    // code block
}
*/
// do while loop
/*
do {
    // code block
}
while (condition);
*/
// forEach loop
/*
array.forEach(function(item, index) {
    // code block
});
*/
// for in loop
/*  
for (variable in object) {
    // code block
}
*/
// for of loop
/*
for (variable of iterable) {
    // code block
}
*/
// break statement
/*
break; // exits the loop or switch statement
*/
// continue statement
/*
continue; // skips the current iteration of the loop and continues with the next iteration
*/

if(2=="2"){
    console.log("true")
} // true because == only checks for value not type

if(2==="2"){
    console.log("true")
} // false because === checks for value and type

if(num % 2 == 0){
    console.log("even")
}
else{
    console.log("odd")
} // if else statement

const score = 85;

if (score >= 90) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
}
else if (score >= 70) {
    console.log("C");
} 
else if (score >= 60) { 
    console.log("D");
}
else {
    console.log("F");
} // if else if statement


// {} is used to define a block of code



// shorthand notation
const balance = 1000;

if (balance > 500) console.log("You have a good balance.");
else console.log("You need to save more money."); // shorthand if else statement



// nested if statement
const age = 20;
const hasPermission = true;
if(age >= 18) {
    if (hasPermission) {
        console.log("You can enter the club.");
    } else {
        console.log("You need permission to enter the club.");
    }
}
else {
    console.log("You are too young to enter the club.");
} // nested if statement
// output: You can enter the club.



const userLoggedIn = true;
const debitcard = true;
const creditcard = false;
const cash = false;

if(userLoggedIn && debitcard) {
    console.log("You can make a purchase.");
}
// output: You can make a purchase.


if(userLoggedIn || creditcard) {
    console.log("You can make a purchase.");
}
// output: You can make a purchase.

