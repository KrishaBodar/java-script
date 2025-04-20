/**
 * This file demonstrates the use of an Immediately Invoked Function Expression (IIFE).
 * 
 * An IIFE is a JavaScript function that is executed immediately after it is defined.
 * It is commonly used to create a private scope, avoiding polluting the global namespace.
 * 
 * Syntax:
 * (function() {
 *     // Code here runs immediately
 * })();
 * 
 * Benefits of using IIFE:
 * - Encapsulation: Variables and functions inside the IIFE are not accessible from the outside.
 * - Avoids global scope pollution: Helps prevent naming conflicts in larger codebases.
 * - Useful for initialization: Can be used to execute setup code or initialize variables.
 */
// immediately invoked function expression (IIFE)



// named IIFE
(function chai(){
  console.log(`DB connected`)
})();
// // DB connected


(() => {
  console.log(`DB connected`)
})();
// // DB connected

((name) => { 
  console.log(`DB connected for ${name}`)
})('krisha'); 
//  DB connected for krisha`