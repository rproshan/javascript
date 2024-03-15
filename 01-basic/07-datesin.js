// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log("div")
// console.log(myDate.toDateString());
// console.log("div")
// console.log(myDate.toLocaleString());
// console.log("div")
// console.log(myDate.toLocaleDateString());


// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("2024-03-14")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

newDate.toLocaleString('default', {
    weekday:"long",
    timeZone: ''
})





