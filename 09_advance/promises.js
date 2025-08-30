const promiseOne = new Promise(function(resolve, reject) {
    // Do async task
    // DB calls, cryptography, network
    
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log('Promise consumed')
})


new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
    
}).then(function(){
    console.log('Promise consumed 2')
})

// Three Promise 

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: 'Viju', email:'viju@testing.com'})
    }, 1000);
})

promiseThree.then(function(user){
    console.log("promise then 3", user);
})


const promiseFour = new Promise(function(resolve, reject){
    console.log("Promise Four");
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: 'ajay', password:'viju@testing.com'})
        } else {
            reject('Error: Somthing went going wrong')
        }
    }, 1000);
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("The promise is eigher resolved or rejected"));


const promiseFive = new Promise(function(resolve, reject){
    console.log("Promise Five");
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: 'ajay', password:'viju@testing.com'})
        } else {
            reject('Error: Somthing went going wrong')
        }
    }, 1000);
})


async function consumePromiseFive() {
    

    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
    
}

consumePromiseFive()


//  Actual call fucntion with api response

/* async function getAllUsers() {
    try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        console.log("Get All User Data", data);
    } catch (error) {
        console.log("Get All User Data", error);
    }
   
}

getAllUsers(); */


const userAllData = fetch('https://dummyjson.com/users')
.then((response) => {
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error));

console.log(userAllData);