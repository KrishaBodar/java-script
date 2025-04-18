

if (true) {
    let a = 100
    const b = 200
    var c = 300
    console.log(a, b, c) // 100 200 300
}                                 
// var is not block scoped, so it will be accessible outside the block
// let and const are block scoped, so they will not be accessible outside the block

//scope


console.log(a, b, c) // ReferenceError: a is not defined, ReferenceError: b is not defined, 300 // 300



// nested scope/function

function one() {
    let a = 10
    function two() {
        let b = 20
        function three() {
            let c = 30
            console.log(a, b, c) // 10 20 30
        }
        three()
    }
  
    two()
}
one() // 10 20 30

// output of above code is 10 20 30 because of closure
// closure is a feature in javascript where inner function has access to outer function variables even after the outer function has returned
// closure is a combination of function and lexical environment within which that function was declared

if(true){
    const username = "John Doe"
    if(username === "John Doe"){
        const password = "12345"
        console.log(`Username: ${username}, Password: ${password}`) // Username: John Doe, Password: 12345      
    }
}
// console.log(username) // ReferenceError: username is not defined


/******************************************************************************************************************************************************************************** */

// interesting

function addone(num){
    return num +1
}
addone(5) // 6

//variable hoisting
const addTwo = function(num){
    return num + 2
}       
addTwo(5) // 7


//differene betwwen function and var function

