
function sayMyName() {
console.log("k");
console.log("r");
console.log("i");
console.log("s");
console.log("h");
console.log("a");
} // sayMyName() // k r i s h a

// sayMyName() // k r i s h a

function addTwoNumbers(num1, num2) {
    return num1 + num2
} // addTwoNumbers(2, 3) // 5

addTwoNumbers(2, 3) // 5
addTwoNumbers(10, 20) // 30
addTwoNumbers(3, "4") // 34
addTwoNumbers(3, true) // 4
addTwoNumbers(3, false) // 3
addTwoNumbers(3, null) // 3
addTwoNumbers(3, undefined) // NaN

// arguments are optional in javascript
//parameter is optional in javascript
// if you don't pass any argument then it will be undefined

const result = addTwoNumbers(2, 3) // 5
console.log("result: ", result); // result: 5

// if you return the values or output from the function then you can store it in a variable
// if you don't return the values or output from the function then you can't store it in a variable

// how many ways to possible to pass the values to the function
// 1. function declaration

function loginUserMEssage(userName = "", password) {
    console.log(`User logged in with username: ${userName} and password: ${password}`);
} // loginUserMEssage("krisha", "1234") // User logged in with username: krisha and password: 1234
loginUserMEssage("krisha", "1234") // User logged in with username: krisha and password: 1234
// when you not pass the arguments then it will be undefined



// shhoping cart example

function calculateCartTotalPrice(cartItems) {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
        totalPrice += cartItems[i].price;
    }
    return totalPrice;
} // calculateCartTotalPrice([{ price: 100 }, { price: 200 }, { price: 300 }]) // 600

 
// rest operator
function calculateCartTotalPrice(...cartItems) {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
        totalPrice += cartItems[i].price;
    }
    return totalPrice;
} // calculateCartTotalPrice([{ price: 100 }, { price: 200 }, { price: 300 }]) // 600
calculateCartTotalPrice({ price: 100 }, { price: 200 }, { price: 300 }) // 600  


const user = {
  username: "krisha",
  password: "1234"
}



function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and password is ${anyobject.password}`);
}
handleObject({username: "krisha", password: "1234"}) // Username is krisha and password is 1234



const myNweArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getEvenNumbers(array) {  
    const evenNumbers = array.filter((number) => number % 2 === 0);
    return evenNumbers;
} // getEvenNumbers(myNweArray) // [2, 4, 6, 8, 10]
getEvenNumbers(myNweArray) // [2, 4, 6, 8, 10]
