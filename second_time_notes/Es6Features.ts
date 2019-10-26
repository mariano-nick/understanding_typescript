// var is global scoped, let is block scoped
var globalVariable: string = "globie boy";
let localVariable: string = "test";
const maxLevels: number = 100;

const multiplyNumbers = (num1: number, num2: number): number => {
    return num1 * num2;
};

const greet = () => {
    console.log("hi");
};

const countdown = (start: number = 10): void => {
    while (start > 0){
        start--;
    }
};

// the spread ('...') operator breaks apart arrays into lists
// not sure I really understand this tbh
let numbers = [1, 2, 3, 4];
Math.max(...numbers);

// destructuring arrays
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

//destructuring objects
const userDater = {username: "Max", age: 27};
const {username, age} = userDater;
console.log(username, age);

// template literals
const usieName = "Max";
const greeting = `Hello, my name is ${usieName}. I come in peace`;

