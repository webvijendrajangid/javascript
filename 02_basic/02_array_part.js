const marvel_heros = ["Iron Man", "Spider Man", "Thor", "Hulk", "Captain America"];
const dc_heros = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[5][1]);


// const all_heros = marvel_heros.concat(dc_heros);  // Is old method for merge the two and more array
// console.log(all_heros);


const all_heros = [...marvel_heros, ...dc_heros];  // Best for array merge
console.log(all_heros);


const another_arry = [1,2,3, [4,5,6], 7, [6,7,[4,5]] ]
 
const real_another_arry = another_arry.flat(Infinity);

console.log(real_another_arry);

console.log(Array.isArray("Vijendra"));
console.log(Array.from("Vijendra"));
console.log(Array.from({name: "Vijendra"})); // Intention was to create an array from an object


let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log("Make array from set of element", Array.of(score1, score2, score3, score4));

 