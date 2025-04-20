// for

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// output: 0 1 2 3 4


for (let i = 0; i < 5; i++) { 

    if (i === 3) {
        console.log("Found 3!");   }
    console.log(i);
} // output: 0 1 2 Found 3! 3 4


for (let i = 0; i < 5; i++) {
  for(let j = 0; j < 5; j++) {
    console.log(i, j);
  }
} // output: 0 0 0 1 0 2 0 3 0 4 1 0 1 1 1 2 1 3 1 4 2 0 2 1 2 2 2 3 2 4 3 0 3 1 3 2 3 3 3 4 4 0 ...
// matrix from 0 to 4 in 5x5 grid


// table of multiplication 

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
// output:
//  1 * 1 = 1 
// 1 * 2 = 2 
// 1 * 3 = 3 ... 10 * 8 = 80 10 * 9 = 90 10 * 10 = 100



let myArray = ["apple", "banana", "cherry"];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
} 
// output: apple banana cherry
// if i write i<= myArray.length, it will give undefined for the last element
// output: apple banana cherry


// break and continue

for (let i = 0; i < 30; i++) {
    if (i === 10) {
        break; // exit the loop when i is 10
    }
    console.log(i);
} // output: 0 1 2 3 4 5 6 7 8 9


for (let i = 0; i < 30; i++) {  
    if (i === 10) {
        continue; // skip the iteration when i is 10
    }
    console.log(i);
} // output: 0 1 2 3 4 5 6 7 8 9 11 12 ... 29


