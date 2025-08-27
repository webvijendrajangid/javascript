let count = 1;

while (count <= 10) {
    console.log(`While loop count value is ${count}`);
    count = count + 2
}

let myHeros = ["Batman", "Superman", "Wonder Woman"];
let arrValue = 0;

while(arrValue < myHeros.length){
    console.log(`My hero name is ${myHeros[arrValue]}`);
    arrValue = arrValue + 1;
}


let score = 1
do {  // work first / then check condition
    console.log("do  While Loop:  ",score);
    score++;

} while (score <= 10);


let score2 = 11
do {  // work first / then check condition
    console.log("do  While Loop:  ",score);
    score++;

} while (score <= 10);   // this will not execute because the do while loop checks the condition after executing the block