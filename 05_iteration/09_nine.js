const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`Acc = ${acc}, Current Value = ${currval}`);
//     return acc + currval;
// }, 0)


// Arrow function
const myTotal = myNums.reduce( (acc, currval) => acc + currval , 0);

console.log(myTotal);


const shopingCart = [
    {item: 'Book', price: 120, quantity: 2},
    {item: 'Pen', price: 20, quantity: 5},
    {item: 'Bag', price: 500, quantity: 1},
    {item: 'Shoe', price: 2000, quantity: 1},
    {item: 'Shirt', price: 800, quantity: 3},
]

const shopingTotal =  shopingCart.reduce((acc, item) => acc + item.price , 0)

console.log(shopingTotal);