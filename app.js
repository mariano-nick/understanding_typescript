"use strict";
console.log("It works!");
// Assigning Types
// if you don't assign a value at init, TS sees var as type = any
var myRealAgeName;
myRealAgeName = 'Sam';
myRealAgeName = 62; // this compiles
// we can be explicit about a type using : <type>
var mySuperRealAge;
mySuperRealAge = 27;
// mySuperRealAge = 'Nick';    // fails to compile
// array
var hobbies = ['Cooking', 'Sports'];
console.log(hobbies[0]); // Cooking
// tuples
// arrays with mixed types
var address = ['Main Street', 99];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
var myColor = Color.Gray;
console.log(myColor); // 0
// var string helloString = "hello";
// let helloString: string = "hello";
// any, should be used sparingly, when extreme flexibility is needed
var car = "BMW";
car = { brand: "BMW", series: 3 };
// functions
function returnMyName() {
    return myRealAgeName;
}
console.log(returnMyName());
// void functions
function sayHello() {
    console.log("Hello!");
}
sayHello();
// functions with typed arguments
function multiply(firstValue, secondValue) {
    return firstValue * secondValue;
}
console.log(multiply(2, "Max")); // NaN
// function types
var myMultiply;
myMultiply = sayHello;
myMultiply(); // Hello!
myMultiply = multiply;
console.log(myMultiply(5, 2)); // 10
var myMultiplyWithArguments; // works like a delegate definition
// let myFunction: () => number     // defines a function that takes no parameters and returns a number
var voidFunction;
myMultiplyWithArguments = multiply;
// myMultiplyWithArguments = sayHello;      // compile error
// objects
var user = {
    name: "Jim",
    age: 45
};
user = {
    name: "Hello",
    age: 22
};
// complex object
// var complex, which has two properties, data is a number array,
// output is a function, that takes a single boolean argument, and returns a number array
// { object data }
var complex = {
    data: [100, 2.2, 10],
    output: function (isHappy) {
        if (isHappy) {
            return this.data;
        }
        return [1];
    }
};
console.log(complex.output(true));
console.log(complex.output(false));
var complex2 = {
    data: [100, 2.2, 10],
    output: function (isHappy) {
        if (isHappy) {
            return this.data;
        }
        return [1];
    }
};
// sometimes you want to define a property that can be of only a certain few types - data is number array or string array
// union types
var myData = [1]; // myData is of type number array OR string array
myData = ["Hello"];
// checking types
var finalValue = "A string";
if (typeof finalValue == "string") {
    console.log(finalValue);
}
if (typeof finalValue == "number") {
    console.log(finalValue + 1);
}
// never (rarely used)
function neverReturns() {
    throw new Error("An error!");
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
