// Singleton
// object.create


// Object Literals

const mySymbol = Symbol("Key1"); // this is very important in interview questions
const jsUser = {
    name: "Vijendra",
    age: 24,
    [mySymbol]: "myKey",   // Its very important in interview quetions
    location: "Jaipur", 
    email: "vijendra@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]

}

// console.log(jsUser.name);
// console.log(jsUser["email"]);  // Accessing email using bracket notation. it is best way to access properties dynamically.
// console.log(typeof jsUser[mySymbol]);  // Accessing email using bracket notation. it is best way to access properties dynamically.

jsUser.email = "vijendra.sharma@gmail.com";
// Object.freeze(jsUser);  // It will not allow to change the object properties
jsUser.email = "viju.sharma@gmail.com";

// console.log(jsUser["email"]);
// console.log(jsUser);


jsUser.greeting = function() {
    console.log("Hello Js user");
}
jsUser.greeting2 = function() {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
