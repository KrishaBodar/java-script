const user = {
  username: "John Doe",
  price: 100,

  welcomeMessage: function () {
    console.log(`Welcome ${this.username}, your price is ${this.price}`);
  }
}

user.welcomeMessage() // Welcome John Doe, your price is 100

// this keyword refers to the object that is calling the function
// in this case, this refers to the user object

user.username = "krisha"
user.welcomeMessage() // Welcome krisha, your price is 100

console.log(this) // {}  // Window { ... } // this refers to the global object in non-strict mode, and undefined in strict mode    


function chai(){
  let username = "John Doe"
  console.log(this.username) // undefined
  // this refers to the global object in non-strict mode, and undefined in strict mode  
}
chai() // undefined


const chai2 = function(){
  let username = "John Doe"
  console.log(this.username) // undefined
  // this refers to the global object in non-strict mode, and undefined in strict mode      
}

chai2() // undefined



const chai3 = () => {
  let username = "John Doe"
  console.log(this.username) // undefined
  // this refers to the global object in non-strict mode, and undefined in strict mode  
}
chai3() // undefined



// () => {} basic syntax of arrow function

const addthree = (num1, num2) => {
  return num1 + num2
}
addthree(5, 10) // 15


//implicit return
const addfour = (num1, num2) => num1 + num2
addfour(5, 10) // 15

const addfive = num => (num + 1)
addfive(5) // 6

// it is also used in react.js for functional components
const addSix = (num1, num2) => ({username: "krisha"})
addSix(5, 10) // { username: 'krisha' } // implicit return of object

