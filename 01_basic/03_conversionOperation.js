let score = "33"  // output is string  and type is string
let score1 = "33ad" // output is string and type is string
let score2 = 33 // output is number and type is number
let score3 = null // output is object and type is object
let score4 = undefined // output is undefined and type is undefined
let score5 = true // output is boolean and type is boolean
let score6 = false // output is boolean

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);  // Convert string value in number
console.log(typeof valueInNumber); // Checking the type of valueInNumber and it will show "number"
console.log(valueInNumber); // It will show NaN because "33adfsdf" is not a valid number


// When we conver the number the following result showing
// "33" => 33
// "33abaf" => Nan
// true => 1
// false => 0



let isLoggedIn = true;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// 1 => true
// 0 => false
// "" => false
// "Vijendra" => true



let someNumber = 50
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // "string"


