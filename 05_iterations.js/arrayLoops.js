// for of

["", "", ""]
[{}, {}, {}]


const arr = [1, 2, 3, 4, 5];
for (let element of arr) {
    console.log(element);
}
//  output: 1 2 3 4 5


const greetings = ["Hello", "Hi", "Hey"];
for (let greeting of greetings) {
    console.log(greeting);
}
//  output: Hello Hi Hey




// maps and sets
const myMap = new Map([
    ["name", "Alice"],
    ["age", 25],
    ["city", "New York"]
]);
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}
// output: 
// name: Alice 
// age: 25 
// city: New York

