// const coding = ["js", "java", "python", "ruby"];

// coding.forEach((item) => {
//     console.log(item);
// });


// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// });

// console.log(values); // undefined


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const  newNumbs = myNums.filter( (num) => num > 4 )

// const  newNumbs = myNums.filter( (num) => {
//     return num > 4;
// });

const newNumbs =[];

myNums.forEach( (numb) => {
    if(numb > 4) {
        newNumbs.push(numb);
    }
})

console.log(newNumbs);




const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1995, edition: 2010},
    {title: 'Book Three', genre: 'History', publish: 2000, edition: 2015},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1995, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2010, edition: 2020},
    {title: 'Book Six', genre: 'Fiction', publish: 2005, edition: 2016},
    {title: 'Book Seven', genre: 'History', publish: 1989, edition: 1994},
    {title: 'Book Eight', genre: 'Science', publish: 2005, edition: 2007}
];


let userBookes = books.filter((bk) => bk.genre === 'History')
userBookes = books.filter((bk) => {
    return bk.publish >= 2000  && bk.genre === 'History';
});

console.log(userBookes);