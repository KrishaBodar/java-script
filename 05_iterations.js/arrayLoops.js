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
}//  output: Hello Hi Hey   



const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number * 2);
}//  output: 2 4 6 8 10
