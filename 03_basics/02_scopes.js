

if (true) {
    let a = 100
    const b = 200
    var c = 300
    console.log(a, b, c) // 100 200 300
}                                 
// var is not block scoped, so it will be accessible outside the block
// let and const are block scoped, so they will not be accessible outside the block

//scope


console.log(a, b, c) // ReferenceError: a is not defined, ReferenceError: b is not defined, 300


