const myData = new Date();
console.log(myData.toString());
console.log(myData.toDateString());
console.log(myData.toLocaleDateString());
console.log(myData.toISOString());
console.log(myData.toJSON());
console.log(myData.toLocaleString());
console.log(typeof myData);

const createMyDate = new Date(2023, 0, 21);
console.log(createMyDate.toDateString());

const createMyDate2 = new Date(2022, 0, 22, 5, 30, 20);
console.log(createMyDate2.toLocaleString());

const createMyDate3 = new Date("2024-01-25");
console.log(createMyDate3.toLocaleString());

const createMyDate4 = new Date("01-26-2025");
console.log(createMyDate4.toLocaleString());


let createMyDate5 = new Date("01-26-2000");
const myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(createMyDate5.getTime());
console.log(Math.floor(Date.now() / 1000));


let myOwnDate = new Date("01-26-2019");

myOwnDate.toLocaleString('default', {
    weekday: "long",


});
console.log(myOwnDate);




