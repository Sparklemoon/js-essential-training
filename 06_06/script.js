/**
 * Data types in JavaScript
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */

// String:
let stringDemo = "A string of text.";
console.log("String:", stringDemo);
// string it's defined by using quotation marks at the beginning and end wrapping around the string.

// Numbes:
let integerDemo = 4;
console.log("Integer:", integerDemo);
// integer this is just a number without quotation marks

let floatDemo = 5.6;
console.log("Floating point number:", floatDemo);
// floating point number so that's a number with a decimal to it the reason why it's called a floating point is you can imagine a number and then you float a points in between the numbers to indicate where the decimal starts

// Boolean:
let booleanDemo = true;
console.log("Boolean value:", booleanDemo);
// true or false

// Null value (nothing):
let nullDemo = null;
console.log("Null value:", nullDemo);
// there is a no value so nothing saying that this value contains nothing it's just a clarity using the word null

// Undefined:
let undefinedDemo;
console.log("Undefined:", undefinedDemo);
//  have two types of undefined one is when you create a variable but don't assign anything to it it automatically becomes undefined or if you 
// want to you can actively assign the word undefined to a variable and that means the variable again is undefined.

let undefinedAssignedDemo = undefined;
console.log("Undefined assigned:", undefinedAssignedDemo);

// Object:
const objectDemo = {
  dance: "Mambo",
  number: 5,
};
console.log("Object:", objectDemo);
// object is defined by putting curly brackets around some different properties and values

// Array:
const arrayDemo = ["tango", "foxtrot", "waltz", "rumba", "bolero"];
console.log("Array:", arrayDemo);
// arrays are are likewise defined by using a square bracket at the beginning and end and then inside the array we 
// have a comma separated list of items and these items can then be any one of the other data types.