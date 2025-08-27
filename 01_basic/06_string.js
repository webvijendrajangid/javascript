const userName = "Vijendra Jangid ";
const repoCount = 42;

console.log(userName + repoCount);  // This is old way to write javascript

console.log(`Hello i am ${userName} and i have ${repoCount}`);

// New way/Modern method to write string in javascript

const name = String("Vijendra Jangid");
console.log(name.length);
console.log(name.toUpperCase());  // Text show in Upper case
console.log(name[0]); // get first character value
console.log(name.charAt(2)); // get character value at index 2
console.log(name.indexOf("J")); // get index of character "J"

const newString = name.substring(0, 4); // get substring from index 0 to 4 and end index not count in this string funciton
console.log(newString);

const anotherString = name.slice(0, 4); // get start slicing from 0 to 4.
console.log(anotherString);

const anotherString2 = name.slice(-15, 4); // get slicing from index -15 to 4 and it will start from end instead of beginning
console.log(anotherString);

const anotherStringOne = "     Vijendra Sharma     ";
console.log(anotherStringOne);
console.log(anotherStringOne.trim());  // Removed start and end spacing in charators


const url = "https://www.vijendra$%#jangid";
console.log(url.replace("$%#","_")); // Replace the charactors in string



