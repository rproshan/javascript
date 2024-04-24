// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "roshan",
    "full name" :"roshan patil",
    [mySym] : "mykey1",
    age:25,
    location: "Andheri",
    email : "rproshan07@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym])


JsUser.email = "roshan.patil@kissht.com"
// Object.freeze(JsUser)
//JsUser.email = "roshan.patil@paywithring.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



