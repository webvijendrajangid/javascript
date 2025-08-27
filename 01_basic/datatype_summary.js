// Data Types in JavaScript
// 1. Primitive Types  - 7   => - Number - String - Boolean - Null - Undefined - Symbol (ES6) - BigInt




const score = 100;
const scoreValue = 100.5

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('1234');
const id2 = Symbol('1234');

// console.log(id === id2);

const bigNumber = 1234567890123456789012345678901234567890n;


// 2. Reference Types / Non-Primitive Types  - 3 => - Object - Array - Function

const herosArray = ["Shaktiman", "Naagraj", "Doga", "Bhokal"];

let myObj = {
    name: "Shaktiman",
    age: 30,
    powers: ["Super strength", "Flight", "Telepathy"]
}

const myFunction = function() {
    console.log("Hello from myFunction");
}

const myArrowFunction = () => {
    console.log("Hello from myArrowFunction");
}

// How to check the Data Type in javascript

console.log(typeof myArrowFunction);

    