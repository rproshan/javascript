// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggdIn = false

// console.log(tinderUser);

const regularUser ={
    email: "sam@gmail.com",
    fullname: {
        userfullname:{
            firstname: "roshan",
            lastname:"patil"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}



// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = Object.assign({}, obj1, obj2, obj4 )

const obj3 ={ ...obj1, ...obj2, ...obj4 }

// console.log(obj3);


const users = [
    {
        id:1,
        email: 'abc@gmail.com'
    },
]


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "js in hindi",
    price : "999",
    corseInstructor : "hitesh"
}

// course.corseInstructor

const { corseInstructor: Instructor } = course

console.log(Instructor);





