console.log("It works!");

// Assigning Types

// if you don't assign a value at init, TS sees var as type = any
let myRealAge: any;
myRealAge = 'Nick';
myRealAge = 27;    // this compiles

// we can be explicit about a type using : <type>
let mySuperRealAge: number;
mySuperRealAge = 27;
// mySuperRealAge = 'Nick';    // fails to compile

// array
let hobbies: string[] = ['Cooking', 'Sports'];
console.log(hobbies[0]);    // Cooking

// tuples
// arrays with mixed types and limited number of items
let address: [string, number] = ['Main Street', 99];

