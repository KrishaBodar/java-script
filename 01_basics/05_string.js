const name = "krisha"
const repocount = 100

console.log(`Hello ${name}, your repo count is ${repocount}`); // Hello krisha, your repo count is 100

const gameName = new String("cricket")

// methods of string object

console.log(gameName); // [String: 'cricket']
console.log(typeof gameName); // object
console.log(gameName.length); // 7
console.log(gameName[0]); // c
console.log(gameName.charAt(0)); // c
console.log(gameName.charAt(1)); // r
console.log(gameName.toUpperCase()); // CRICKET
console.log(gameName.toLowerCase()); // cricket
console.log(gameName.indexOf("c")); // 0

const newString = gameName.substring(0, 3) // cricket
console.log(newString); // cri

const anotherString = gameName.slice(0, 3) // cricket
console.log(anotherString); // cri
console.log(gameName.slice(-3)); // ket
console.log(gameName.slice(0, -3)); // cri  
console.log(gameName.slice(3)); // cket
console.log(gameName.slice(0)); // cricket
console.log(gameName.slice(-1)); // t



console.log(gameName.split("")); // [ 'c', 'r', 'i', 'c', 'k', 'e', 't' ]
console.log(gameName.split("c")); // [ '', 'ricket' ]
console.log(gameName.split("cr")); // [ '', 'icket' ]
console.log(gameName.split("cricket")); // [ '' ]


const newString1 = gameName.replace("c", "C") // cricket
console.log(newString1); // Cricket
console.log(gameName); // cricket
console.log(gameName.replace(/c/g, "C")); // Cricket

const newString2 = "       krisha   "
console.log(newString2); //        krisha
console.log(newString2.trim()); // krisha
console.log(newString2.trimStart()); // krisha
console.log(newString2.trimEnd()); //        krisha
console.log(newString2.trimLeft()); // krisha
console.log(newString2.trimRight()); //        krisha
console.log(newString2.trim().length); // 6
console.log(newString2.length); // 13


console.log();




 