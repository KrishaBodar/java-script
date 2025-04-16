// array

const arr = [1, 2, 3, 4, 5];
const myHeros = ["Ironman", "Spiderman", "Thor", "Hulk", "Captain America"]; // array of strings

console.log(arr); // [1, 2, 3, 4, 5]

console.log(arr[0]); // 1
console.log(arr[1]); // 2



// array methods
arr.push(6); // add 6 to the end of the array
arr.push(7); // add 7 to the end of the array
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]


arr.pop(); // remove the last element of the array
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr.unshift(0); // add 0 to the beginning of the array
console.log(arr); // [0, 1, 2, 3, 4, 5, 6]


arr.shift(); // remove the first element of the array
console.log(arr); // [1, 2, 3, 4, 5, 6]


console.log(arr.includes(3)); // true
console.log(arr.includes(10)); // false
console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(10)); // -1
console.log(arr.length); // 6


const newArr = arr.join() // convert array to string
console.log(newArr); // 1,2,3,4,5,6
console.log(typeof newArr); // string


// slice, splice
console.log("A", arr); // [1, 2, 3, 4, 5, 6]

const myn1 = arr.slice(1, 4); // slice from index 1 to 4 (not included)
console.log("B", myn1); // [2, 3, 4]
console.log(myn1); // [2, 3, 4]


const myn2 = arr.splice(1, 4); // slice from index 1 to 4 (not included)  
console.log("C", myn2); // [2, 3, 4, 5]
console.log(myn2); // [2, 3, 4, 5]


// difference between slice and splice
// slice returns a new array, splice modifies the original array
// slice does not modify the original array, splice modifies the original array
// slice returns a new array, splice returns the removed elements
// slice does not modify the original array, splice modifies the original array


console.log("D", arr); // [1, 6]
console.log("E", myn1); // [2, 3, 4]
console.log("F", myn2); // [2, 3, 4, 5]


// inspect array
// there is lots of array methods in javascript