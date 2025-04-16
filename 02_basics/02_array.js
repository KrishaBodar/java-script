const marvel_heroes = ["thor", "ironman", "hulk", "spiderman", "black widow"];
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes) // add dc_heroes array to marvel_heroes array

console.log(marvel_heroes); // ["thor", "ironman", "hulk", "spiderman", "black widow", ["superman", "flash", "batman"]]
console.log(marvel_heroes[5]); // ["superman", "flash", "batman"]
console.log(marvel_heroes[5][0]); // superman

const allHeros = marvel_heroes.concat(dc_heroes) // concat two arrays

console.log(allHeros); // ["thor", "ironman", "hulk", "spiderman", "black widow", "superman", "flash", "batman"]
console.log(allHeros.length); // 8

// same as concat method
// spread operator to concat two arrays
const all_new_hros = [...marvel_heroes, ...dc_heroes] // spread operator to concat two arrays
console.log(all_new_hros); // ["thor", "ironman", "hulk", "spiderman", "black widow", "superman", "flash", "batman"]


const another_array = [1, 2, 3, [4, 5, 6], 7, 8, 9, [4, 5] ]
const real_another_array = another_array.flat(Infinity) // flat method to flatten the array
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5]



console.log(Array.isArray("krisha")) // false
console.log(Array.isArray([1, 2, 3])) // true
console.log(Array.isArray({})) // false
console.log(Array.from("krisha")) // [ 'k', 'r', 'i', 's', 'h', 'a' ];

// interesting part
console.log(Array.from({name: "krisha", age: 20})) // [ 'name', 'age' ];

let score1 = 100
let score2 = 200
let score3 = 300

console.log([score1, score2, score3]); // [ 100, 200, 300 ]
console.log([score1, score2, score3].reduce((acc, curr) => acc + curr)); // 600
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]


