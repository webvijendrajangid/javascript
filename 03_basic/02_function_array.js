
function calculateCartPrice(cartItem) {
    return cartItem;
}
console.log("Calculate cart price: ", calculateCartPrice(100));


function calculateCartPrice2(...cartItem) {  // ...cartItem Its called rest operator / how to pass multiple vaule in a functinon
    return cartItem;
}
console.log("Calculate cart price2: ", calculateCartPrice2(200, 300, 400, 500));

function calculateCartPrice3(val1, val2, ...cartItem3) {  
    return cartItem3;
}
console.log("Calculate cart price3: ", calculateCartPrice3(500, 700, 900, 1200, 2000));



const user = {
    username: "Vijendra",
    email: "vijendra@example.com",
    age: 30
}

function handleObj(anyobj) {
    console.log(`User name is ${anyobj.username} and age is ${anyobj.age}`); 
    
}   
handleObj(user)

handleObj({
    username: "Amit",
    age: 25
})


// =====  Arrays  =====
const myArray = [100, 200, 300, 400, 500];

function handleArray(arr) {
    return arr[2];
}

console.log(handleArray(myArray));
console.log(handleArray([100, 200, 300, 400, 500]));

