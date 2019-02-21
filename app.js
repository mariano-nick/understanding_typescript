"use strict";
console.log("It works!");
// Assigning Types
// if you don't assign a value at init, TS sees var as type = any
var myRealAge;
myRealAge = 'Nick';
myRealAge = 27; // this compiles
// we can be explicit about a type using : <type>
var mySuperRealAge;
mySuperRealAge = 27;
// mySuperRealAge = 'Nick';    // fails to compile
// array
var hobbies = ['Cooking', 'Sports'];
console.log(hobbies[0]); // Cooking
// tuples
// arrays with mixed types and limited number of items
var address = ['Main Street', 99];
