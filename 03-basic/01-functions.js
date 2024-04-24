function sayMyName(){
    console.log("R")
    console.log("O")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("N")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumbers(2, 5)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("roshan"))

// console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "roshan",
    price: 199
}

function handleObject(anyoject){
    console.log(`Username is ${anyoject.username} and price is ${anyoject.price}`);
}

handleObject(user);

const myNewArray =[200, 400 ,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));