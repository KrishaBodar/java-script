/*
    Variables in JavaScript
    1. var
    2. let
    3. const

    prefer let and const over var
    var is function scoped and let is block scoped
*/


const accountId = 67667
let accountName = "John Doe"
var accountBalance = 1000.50
accountcity = "New York"
let accountState;

// accountId = 23 not allowed 
accountName = "krisha"
accountBalance = 2000.50
accountcity = "New Jersey"


console.log(accountId);

console.table([accountId, accountName, accountBalance, accountcity, accountState]);
