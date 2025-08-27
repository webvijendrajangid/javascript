const score = 400
console.log(score);

const moneyCount =  new Number(1000);
console.log(moneyCount);

console.log(moneyCount.toString().length);
console.log(moneyCount.toFixed(3));

const otherNumber = 1234.85699;
console.log(otherNumber.toPrecision(4));


const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN")); // Convert number to Indian format



// ======================= Maths =============================
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(4, 2, 8));
console.log(Math.max(4, 2, 8));

// Most use the random in maths
console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);






