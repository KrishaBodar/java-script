// this method used in cart menu

const myNums = [1, 2, 3]
/*
const myTotal = myNums.reduce(function (accumanator, currentvalue){
    console.log(`acc: ${accumanator} and currval: ${currentvalue}`);

    return accumanator + currentvalue
}, 0)
*/
// No additional code is needed at $PLACEHOLDER$ for the current functionality.
console.log(myTotal);
// output
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 2 and currval: 3
// 6

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)





const shoppingCart = [
  { itemName: "Apple", price: 1.5 },
  { itemName: "Banana", price: 0.75 },
  { itemName: "Orange", price: 1.25 },
  { itemName: "Milk", price: 3.0 },
  { itemName: "Bread", price: 2.5 }
];


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
//9.0