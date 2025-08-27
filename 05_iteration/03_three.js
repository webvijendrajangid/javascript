// [1, 2, 3, 4, 5]

// [{}, {}, {}, {}, {}, {}, {}]


const myArray = [1, 2, 3, 4, 5];

for (const element of myArray) {
    console.log(element);
}

const greeting ="Hello World";

for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}


// Map

const map = new Map();   // Map not show the dublicate entries. Its show only unique keys
map.set('IN', "India");
map.set('US', "United States");
map.set('FR', "France");
map.set('DE', "Germany");
map.set('IN', "India");

// console.log(map);

for (const element of map) {
    console.log(element);
}


for (const [key, value] of map) {
    console.log(key, ':-', value);
}



// const myObj = {
//     game: "Game One",
//     game2: "Game Two",
//     game3: "Game Three",
//     game4: "Game Four"
// }

// for (const {key, value} of myObj) {
//     console.log(key, ':-', value);
// }
