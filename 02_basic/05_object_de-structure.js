const course = {
    courseName: "JavaScript Basics",
    duration: "3 weeks",
    courseinstructor: "John Doe",
    price: "1000"
}

course.courseinstructor;

const {courseinstructor} = course;
console.log(courseinstructor);

const {courseName: user} = course;
console.log(user);

