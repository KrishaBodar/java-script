const userEmail = "k@hhsajw.ai"

if(userEmail) {
    console.log("User email is present")
}
else {
    console.log("User email is not present")
}

// falsy values in JavaScript
// 0, "", null, undefined, NaN, false, BigInt, -0, -0, 0n, -0n, 0.0, -0.0, 0.00, -0.00, 0e-10, -0e-10, 0x0, -0x0, 0b0, -0b0

//truthy values in JavaScript
// "0", "false", [], {}, [0], [false], [""], [null], [undefined], [NaN], [0n], [-0n], [0.0], [-0.0], [0.00], [-0.00], [0e-10], [-0e-10], [0x0], [-0x0], [0b0], [-0b0], [Infinity], [-Infinity], [1], [-1], [2], [-2], [3], [-3], [4], [-4], [5], [-5], [6], [-6], [7], [-7], [8], [-8], [9], [-9]
// " ", function(){}, new Date(), new RegExp(), new Map(), new Set(), new WeakMap(), new WeakSet(), Symbol(), Symbol.iterator, Symbol.asyncIterator, Symbol.hasInstance, Symbol.isConcatSpreadable, Symbol.match, Symbol.matchAll, Symbol.replace, Symbol.search, Symbol.split, Symbol.toPrimitive, Symbol.toStringTag, Symbol.unscopables, Symbol.species, Symbol.observable, Symbol.asyncIterator, Symbol.isConcatSpreadable, Symbol.matchAll, Symbol.replace, Symbol.search, Symbol.split, Symbol.toPrimitive, Symbol.toStringTag, Symbol.unscopables

// truthy values in JavaScript are values that evaluate to true in a boolean context. These values include non-empty strings, non-zero numbers, objects, arrays, and functions. In contrast, falsy values are values that evaluate to false in a boolean context. These values include 0, "", null, undefined, NaN, and false.
// In JavaScript, the following values are considered falsy:


const emptyobject = {}
if(Object.keys(emptyobject).length) {
    console.log("Object is not empty")
}
// output: Object is not empty

// nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand. It is useful for providing default values for variables that may be null or undefined.

let val1;
val1 = 5??10; // 5
val1 = null??10; // 10
val1 = undefined??10; // 10
val1 = 0??10; // 0
val1 = false??10; // false
val1 = ""??10; // ""
val1 = NaN??10; // NaN
val1 = 0n??10; // 0n
val1 = null ?? 10 ?? 20; // 10
val1 = undefined ?? 10 ?? 20; // 10



// ternary operator (?:) is a shorthand for an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. The syntax is as follows:
// condition ? valueIfTrue : valueIfFalse

// Example:
const ice =100
ice > 0 ? console.log("Ice is present") : console.log("Ice is not present")
// output: Ice is present

