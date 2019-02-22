console.log("It works!");

// Assigning Types

// if you don't assign a value at init, TS sees var as type = any
let myRealAgeName: any;
myRealAgeName = 'Sam';
myRealAgeName = 62;    // this compiles

// we can be explicit about a type using : <type>
let mySuperRealAge: number;
mySuperRealAge = 27;
// mySuperRealAge = 'Nick';    // fails to compile

// array
let hobbies: string[] = ['Cooking', 'Sports'];
console.log(hobbies[0]);    // Cooking

// tuples
// arrays with mixed types
let address: [string, number] = ['Main Street', 99];

// enums
enum Color{
    Gray,
    Green,
    Blue,
    Yellow
}
let myColor: Color = Color.Gray;
console.log(myColor);   // 0

// var string helloString = "hello";
// let helloString: string = "hello";

// any, should be used sparingly, when extreme flexibility is needed
let car: any = "BMW";
car = { brand: "BMW", series: 3};

// functions
function returnMyName(): string {   // type declaration after function() defines return type (string)
    return myRealAgeName;
}

console.log(returnMyName());

// void functions
function sayHello(): void {
    console.log("Hello!");
}

sayHello();

// functions with typed arguments
function multiply(firstValue: number, secondValue: any): number {
    return firstValue * secondValue;
}

console.log(multiply(2, "Max"));    // NaN


// function types
let myMultiply;
myMultiply = sayHello;
myMultiply();   // Hello!
myMultiply = multiply;
console.log(myMultiply(5 , 2)); // 10

let myMultiplyWithArguments: (arg1: number, arg2: number) => number;    // works like a delegate definition
    // let myFunction: () => number     // defines a function that takes no parameters and returns a number

let voidFunction: (arg1: boolean) => void;

myMultiplyWithArguments = multiply;
    // myMultiplyWithArguments = sayHello;      // compile error


// objects
let user: { name: string, age: number } = {     // object: {propertyName: propertyType, ...} is blueprint for object
    name: "Jim",
    age: 45
};
user = {
    name: "Hello",
    age: 22
}


// complex object
// var complex, which has two properties, data is a number array,
// output is a function, that takes a single boolean argument, and returns a number array
// { object data }
let complex: {data: number[], output: (arg1: boolean) => number[]} = {
    data: [100, 2.2, 10],
    output: function(isHappy: boolean): number[] {
        if (isHappy) {
            return this.data;
        }
        return [1];
    }
};

console.log(complex.output(true));
console.log(complex.output(false));


// complex objects built on the fly like above is not sustainable, can use classes
// can also use a 'type alias'
type ComplexObject = {data: number[], output: (arg1: boolean) => number[]};

let complex2: ComplexObject = {
    data: [100, 2.2, 10],
    output: function(isHappy: boolean): number[] {
        if (isHappy) {
            return this.data;
        }
        return [1];
    }
};


// sometimes you want to define a property that can be of only a certain few types - data is number array or string array
// union types
let myData: number[] | string[] = [1];  // myData is of type number array OR string array
myData = ["Hello"];

// checking types
let finalValue = "A string";

if (typeof finalValue == "string"){
    console.log(finalValue);
}

if (typeof finalValue == "number"){
    console.log(finalValue + 1);
}


// never (rarely used)
function neverReturns(): never {    // never returns anything, makes your intention clear
    throw new Error("An error!");
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;

