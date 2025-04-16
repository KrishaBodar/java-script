// Date and Time in JavaScript

// date object
let myDate = new Date(); // current date and time
console.log(myDate); // 2023-10-05T12:34:56.789Z
console.log(myDate.toString()); // Mon Oct 05 2023 12:34:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Mon Oct 05 2023
console.log(myDate.toTimeString()); // 12:34:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleDateString()); // 10/5/2023
console.log(myDate.toJSON()); // "2023-10-05T12:34:56.789Z" 
console.log(typeof myDate); // object
console.log(myDate instanceof Date); // true

let myCreatedDate = new Date(2023, 9, 5); // year, month (0-11), day
console.log(myCreatedDate); // 2023-10-05T00:00:00.000Z
console.log(myCreatedDate.toString()); // Mon Oct 05 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate.toDateString()); // Mon Oct 05 2023
console.log(myCreatedDate.toTimeString()); // 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate.toLocaleDateString()); // 10/5/2023
console.log(myCreatedDate.toJSON()); // "2023-10-05T00:00:00.000Z"
console.log(typeof myCreatedDate); // object

let myCreatedDate2 = new Date("2023-10-05T12:34:56.789Z"); // ISO 8601 format
console.log(myCreatedDate2); // 2023-10-05T12:34:56.789Z
console.log(myCreatedDate2.toString()); // Thu Oct 05 2023 12:34:56 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate2.toDateString()); // Thu Oct 05 2023
console.log(myCreatedDate2.toTimeString()); // 12:34:56 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate2.toLocaleDateString()); // 10/5/2023
console.log(myCreatedDate2.toJSON()); // "2023-10-05T12:34:56.789Z"
console.log(typeof myCreatedDate2); // object


let myCreatedDate3 = new Date(2023, 0, 23, 5, 3) // year, month (0-11), day, hour, minute
console.log(myCreatedDate3); // 2023-01-23T05:03:00.000Z
console.log(myCreatedDate3.toString()); // Mon Jan 23 2023 05:03:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate3.toDateString()); // Mon Jan 23 2023    
console.log(myCreatedDate3.toTimeString()); // 05:03:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate3.toLocaleDateString()); // 1/23/2023
console.log(myCreatedDate3.toJSON()); // "2023-01-23T05:03:00.000Z"
console.log(typeof myCreatedDate3); // object
console.log(myCreatedDate3 instanceof Date); // true


let myCreatedDate4 = new Date("2023-01-14") // ISO 8601 format
console.log(myCreatedDate4); // 2023-01-14T00:00:00.000Z
console.log(myCreatedDate4.toString()); // Sat Jan 14 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate4.toDateString()); // Sat Jan 14 2023  
console.log(myCreatedDate4.toTimeString()); // 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate4.toLocaleDateString()); // 1/14/2023


let myTimestamp = Date.now(); // current timestamp in milliseconds
console.log(myTimestamp); // 1696512896789  
console.log(myCreatedDate.getTime()); // 1696512896789
console.log(Math.floor(myCreatedDate.getTime() / 1000)); // 1696512896



let newDate = new Date(); // current date and time
console.log(newDate); // 2023-10-05T12:34:56.789Z
console.log(newDate.getFullYear()); // 2023
console.log(newDate.getMonth()); // 9 (October)
console.log(newDate.getDate()); // 5
console.log(newDate.getDay()); // 4 (Thursday)  

console.log(newDate().getHours()) // 12
console.log(newDate.getMinutes()); // 34
console.log(newDate.getSeconds()); // 56


newDate.toLocaleString('default', {
   timeZone: 'UTC',
   weekday: 'long',
   year: 'numeric',
    month: 'long',
   }); // 10/5/2023, 12:34:56 PM
   