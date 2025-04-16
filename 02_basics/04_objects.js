//const tinderUser = new Object() // singleton object
// console.log(tinderUser); // {}

const tinderUser = {} // non singleton object
tinderUser.id = "abc1234"

console.log(tinderUser); // { id: 'abc1234' }
console.log(tinderUser.id); // abc1234
console.log(tinderUser["id"]); // abc1234
console.log(tinderUser.name); // undefined

tinderUser.name = "John Doe"
tinderUser.age = 30
tinderUser.isLoggedIn = true
console.log(tinderUser); // { id: 'abc1234', name: 'John Doe', age: 30, isLoggedIn: true }


const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstName: "John",
      lastName: "Doe"
    }
  }
} // nested object

console.log(regularUser.fullname.userfullname.firstName); // John Doe
console.log(regularUser.fullname) // { userfullname: { firstName: 'John', lastName: 'Doe' } }


const obj1 = {1: "one", 2: "two", 3: "three"}
const obj2 = {1: "one", 2: "two", 3: "three"}

const obj3 = {obj1, obj2}
console.log(obj3); // { obj1: { '1': 'one', '2': 'two', '3': 'three' }, obj2: { '1': 'one', '2': 'two', '3': 'three' } }

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4); // { '1': 'one', '2': 'two', '3': 'three' }
console.log(obj4[1]); // one



const obj5 = Object.assign({}, obj1, {2: "four"})
console.log(obj5); // { '1': 'one', '2': 'four', '3': 'three' }


const obj3 = {...obj1, ...obj2}
console.log(obj3); // { '1': 'one', '2': 'two', '3': 'three' }



//database value

const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Jack", age: 35 }

] // array of objects 

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'age', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ 'abc1234', 'John Doe', 30, true ]
console.log(Object.entries(tinderUser)); // [ [ 'id', 'abc1234' ], [ 'name', 'John Doe' ], [ 'age', 30 ], [ 'isLoggedIn', true ] ]
console.log(Object.entries(users)); // [ [ '0', { id: 1, name: 'John', age: 30 } ], [ '1', { id: 2, name: 'Jane', age: 25 } ], [ '2', { id: 3, name: 'Jack', age: 35 } ] ]

console.log(tinderUser.hasOwnProperty("id")); // true
console.log(tinderUser.hasOwnProperty("email")); // false



