//  Array

const myArr = [0,1, 2, 3, 4, 5];
const myHeros  = ["Iron Man", "Spider Man", "Thor", "Hulk", "Captain America"];
const myArr2 =  new Array(1,2,3,4,5,6);

console.log(myArr[0]);


// Array Mothods
myArr.push(6);  // add element at end
myArr.push(7);  // add element at end
myArr.pop();  // remove last element

myArr.unshift(9);  // add element at start
myArr.shift();  // remove first element

console.log(myArr.includes(9));  // check element is present or not in array
console.log(myArr.indexOf(3));  // get index of element


const newArr = myArr.join();

console.log(myArr);
console.log(newArr);


// === slice, splice === 
console.log("A. ", myArr);

const myn1 = myArr.slice(1,3);

console.log("Slice array ", myn1);
console.log("B. ", myArr);

const myn2 = myArr.splice(1,3);

console.log("C. ", myArr);
console.log("Splice array ", myn2);
