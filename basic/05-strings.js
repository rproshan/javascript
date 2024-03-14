const name = "Roshan"

const repoCount = 50

// console.log(name + " " + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Roshan')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString =gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Roshan    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https:/roshan.com/roshan%20patil"

console.log(url.replace('%20', '_'));

console.log(url.includes('sundar'));

console.log(gameName.split('_'));








