//singleton
//constructor se singleton
//object.create

// object literal




const JsUser = {

    name: "Krisha",
    age: 22,
    isLoggedIn: true,
    score: 100,
    courseCount: 4,
    getInfo: function () {
        return `${this.name} is ${this.age} years old and has ${this.courseCount} courses.`
    }
}
console.log(JsUser); // { name: 'Krisha', age: 22, isLoggedIn: true, score: 100, courseCount: 4, getInfo: [Function: getInfo] }
console.log(JsUser.getInfo()); // Krisha is 22 years old and has 4 courses.
console.log(JsUser.name); // Krisha
console.log(JsUser.age); // 22
console.log(JsUser.isLoggedIn); // true
console.log(JsUser.score); // 100
console.log(JsUser.courseCount); // 4

// 2nd type of object 
console.log(JsUser["name"]); // Krisha
console.log(JsUser["age"]); // 22   
console.log(JsUser["isLoggedIn"]); // true

const symbol = Symbol("id")

const sy = {
  [symbol]: "id",
}
console.log(sy); // { [Symbol(id)]: 'id' }
console.log(sy[symbol]); // id
console.log(sy[symbol]); // id
console.log(sy[symbol]); // id


JsUser.name = "John" // change the value of name
Object.freeze(JsUser) // freeze the object
JsUser.name = "Doe" // change the value of name
console.log(JsUser); // { name: 'John', age: 22, isLoggedIn: true, score: 100, courseCount: 4, getInfo: [Function: getInfo] }
console.log(JsUser.getInfo()); // John is 22 years old and has 4 courses.


JsUser.greeting = function () {
    console.log("Hello " + this.name); // Hello John
}

console.log(JsUser.greeting()); // Hello John
console.log(JsUser.greeting); // [Function: greeting]

JsUser.greetingTwo = function () {
    console.log("Hello " + this.name); // Hello John
}
console.log(JsUser.greetingTwo()); // Hello John    

// valur execution ma . thi thai che but also value also excute []


