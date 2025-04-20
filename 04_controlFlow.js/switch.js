// switch statement
// switch (expression) {
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     default:
//         // code block
// }


const month = 5; // May
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}
// output: May

// switch statement with multiple cases
const day = 3; // Wednesday
switch (day) {
    case 1:
    case 2:
    case 3:
        console.log("Weekday");
        break;
    case 4:
    case 5:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day number");
}
// output: Weekday

// switch statement with string values  
const fruit = "banana"; 
switch (fruit) {
    case "apple":
        console.log("Apple is red");
        break;
    case "banana":
        console.log("Banana is yellow");
        break;
    case "grape":
        console.log("Grape is purple");
        break;
    default:
        console.log("Unknown fruit color");
}
// output: Banana is yellow

