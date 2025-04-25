

// maps

const map = new map()
map.set("name", "Alice")
map.set("age", 25)      
map.set("city", "New York")
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}
// output:
// name: Alice  
// age: 25
// city: New York


const myObject1 ={
    'game1': 'chess',   
    'game2': 'football',
    'game3': 'cricket'
}
for (let [key, value] of Object.entries(myObject1)) {
    console.log(`${key}: ${value}`);
}
// output:
// game1: chess
// game2: football
// game3: cricket



// object in maps by using for in loop
const myObject = {
    name: "Alice",
    age: 25,
    city: "New York"
};
for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}
// output:  
// name: Alice
// age: 25
// city: New York



const programming = {
    language1: "JavaScript",
    language2: "Python",
    language3: "C++"
};


for(const key in programming){
    console.log(key)
}
// output:
// language1
// language2
// language3

// in the java script there is defined value for each 




const map1 = new Map();


map1.set("firstName", "John");
map1.set("lastName", "Doe");
map1.set("age", 30);

for (let [key, value] of map1) {
    console.log(`${key}: ${value}`);
}
// output:
// firstName: John
// lastName: Doe
// age: 30
// if i apply {} scope then return value

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNum = myNumbers.map((num) => num + 20)
// output:
// [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

const newNum = myNumbers.
                map((num) => num * 10)
                .map((num) => num +1 )

// output:
// [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]


console.log(newNum)





