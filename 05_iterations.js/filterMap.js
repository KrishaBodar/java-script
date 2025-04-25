const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach((item) => {
  console.log(item);
})

console.log(values)

 
// output: 
// js
// ruby
// java
// python
// cpp
// undefined
// for each does not return anything


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNum.filter( (num) => num > 4 )
console.log(newNums);
// output:
// [5, 6, 7, 8, 9, 10]

const mappedNums = newNums.map((num) => num * 2);
console.log(mappedNums);
// Output:
// [10, 12, 14, 16, 18, 20]

/*
const newNums = myNum.filter( (num) => {
  return num > 4
} )
  */
// output:
// [5, 6, 7, 8, 9, 10]
// in the filter if you write code in the {} then you have to write return key word to print the output
// if you are not using return key word then it will return empty arrsy []
//{} it called scope


const newNums = []
myNum.forEach((num) => {
  if(num > 4){
    newNums.push(num)
  }
})
// output:
//[5, 6, 7, 8, 9, 10]

const books = [
  { title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960 },
  { title: "1984", genre: "Dystopian", publish: 1949 },
  { title: "The Great Gatsby", genre: "Classic", publish: 1925 },
  { title: "The Catcher in the Rye", genre: "Fiction", publish: 1951 },
  { title: "Moby Dick", genre: "Adventure", publish: 1851 },
  { title: "Pride and Prejudice", genre: "Romance", publish: 1813 },
  { title: "The Hobbit", genre: "Fantasy", publish: 1937 },
  { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: 1997 },
  { title: "The Lord of the Rings", genre: "Fantasy", publish: 1954 },
  { title: "The Alchemist", genre: "Philosophical", publish: 1988 }
];

let userbooks = books.filter((bk) => bk.genre === 'Fantasy')

userbooks = books.filter((bk) => bk.publish >= 2000)
//userbooks = books.filter((bk) => bk.publish >= 2000 && bk.genre => Fantacy)

console.log(userbooks);
// output:
// [
//   { title: "The Hobbit", genre: "Fantasy", publish: 1937 },
//   { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: 1997 },
//   { title: "The Lord of the Rings", genre: "Fantasy", publish: 1954 }
// ]

// output:
// [
//   { title: "The Hobbit", genre: "Fantasy", publish: 1937 },
//   { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: 1997 },
//   { title: "The Lord of the Rings", genre: "Fantasy", publish: 1954 }
// ]

// []


