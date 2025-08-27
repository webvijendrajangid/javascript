function addToNumber(num1, num2) {
    return num1 + num2;
}

console.log("Add two Numbers function: ", addToNumber(5, 10));


function loginUserMessage(username) {
    if(!username ){
        console.log("Please enter username to login");
        return
    }
    return `${username} just logged in.`;

}

function loginUserMessage2(username = "Viju") {
    if(!username ){
        console.log("Please enter username to login");
        return
    }
    return `${username} just logged in.`;

}
// console.log(loginUserMessage("Vijendra"));
console.log("Login user function 1: ", loginUserMessage());
console.log("Login user function 2: ", loginUserMessage2());
console.log("Login user function 2: ", loginUserMessage2("Vijendra"));





