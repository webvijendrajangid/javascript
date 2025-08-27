// Singleton
// const tinderUser = new Object();  // this is a Singleton object
const tinderUser = {};  // this is non Singleton object

tinderUser.id = "124"
tinderUser.name = "Vijendra Jangid"
tinderUser.idsLoggedIn = false
tinderUser.age = 24

// console.log(tinderUser);

const rgularUser = {
    email: "vijendra@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Vijendra", 
            lastName: "Jangid"
        }
    }
}

console.log("Object access with dot noation:", rgularUser.fullname.userFullName.firstName);
console.log("Object access with bracket notation:", rgularUser["fullname"]["userFullName"]["firstName"]);


const obj1 = {1: "a", 2: "b"};  // here key is number
const obj2 = {3: "c", 4: "d"}; 
const obj3 = {5: "e", 6: "f"};

// Object merge method 1
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log("Merge three object in the new object:-", obj4)

// Object merge method 2 => This is best way

const obj5 = {...obj1, ...obj2, ...obj3};
console.log("Merge best way:-", obj5);


``
const userList = [
    {
        name: "Ajay",
        age: 30,
        email: "ajay@example.com"
    },
    {
        name: "Vijay",
        age: 25,
        email: "vijay@example.com"
    },
    {
        name: "Suresh",
        age: 28,
        email: "suresh@example.com"
    }
]

console.log("UserList Object in Array: ",userList);
console.log("How to access the one objec from array ",userList[1].name);

console.log(tinderUser);
console.log("Access key of object:", Object.keys(tinderUser)); // this method is convert object key in an array
console.log("Access value of object:", Object.values(tinderUser)); // this method is convert object value in an array
console.log("Access entries of object:", Object.entries(tinderUser)); // this method is convert object entries in an array













