//var test = "ceva";
//let test = "ceva";
//const TEST = "ceva"; ALWAYS NEED A VALUES! THE CONST WILL PE WRITTEN IN UPPERCASE

//1
var developer = "hey";
function myFunction() {
    var hello = "hello";
}
console.log(hello); //will show error - hello is not defined

//2
var greeter = "hey";
var times = 4;
if (times > 3) {
    var greeter = "hello";
}
console.log(greeter);//will print hello - the variables 

//3
for (var i = 0; i < 5; i++) { //will print only 5 - five times
    setTimeout(function () {
        console.log(i);
    }, 500);
}

//4
let greeter = "hey";
var times = 4;
if (times > 3) {
    let greeter = "hello";
    console.log(greeter);
}
console.log(greeter); //will print hello and then let - because let keeps the variable in the if and the will come back to the first greeter

//5
var myVar = 1;
var myVar = 2;
var myVar = 3;
var myVar = 4;

console.log(myVar); //will print the last myVar 

//6
let myVar = 1; //we define the variable only once
let myVar = 2;
let myVar = 3;
let myVar = 4;

console.log(myVar); //will show error , can not have a variable with the same name in let case

//7
let myVar = 1; //we define the variable only once in the block (eg in an if)
myVar = 2;

console.log(myVar); //will print 2

//8
const myVar = 1; //use it when the variable is constant
myVar = 2;

console.log(myVar);//will show error - can not change the value from a constant

//9
for (let i = 0; i < 5; i++) { //will show 1,2,3,4,5 because let is in a block
    setTimeout(function () {
        console.log(i);
    }, 500);
}

//THE CONST WILL PE WRITTEN IN UPPERCASE

const myObj = { //const is myObj, his content can be modified
    myNumber: 6,
    myText: "text"
};
myObj.myNumber = 6;
console.log(myObj);

//10
function myFunction() {
    var a = 2;
    if (true) {
        var a = 3;
        console.log(a);
    }
}
console.log(a);

function myFunction2(){
    let a = 2;
    if (true) {
        let a = 3;
        console.log(a);
    }
}

myFunction();
console.log("----------");
myFunction2();
