const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newMyNumb = myNums.map((num) => {
//     return num + 10;
// })
// console.log(newNumbs);

const newNumbs = myNums
                    .map((item) => item * 10 )
                    .map((item) => item + 1)
                    .filter((item) => item > 50);
                    

console.log(newNumbs);