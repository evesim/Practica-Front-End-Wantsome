function multiply(a, b = 1) { //you can add a value in the funtion and if it's not assignated, will take that
    console.log(a * b);
}
multiply(2, 3);
multiply(2);

//

function slice(startIndex, endIndex = String.length) {
    console.log(a * b);
}
multiply(2, 3);
multiply(2);

//

function sum(a, b, c = 0) {
    console.log(a + b + c)
}
sum(1, 2, 3); //6
sum(1 + 2) //3

//

var txt1 = "ASD";
var txt2 = "BCD";
var txt3 = "QVE";

console.log(txt1 + " " + txt2 + " " + txt3); //ASD BCD QVE

//Literal String

var name = "Robert";
var age = 32;
var sex = "M";

console.log("Bine ai venit" + name + ". Momentan ai " + age + " si sexul " + sex);
console.log(`Bine ai venit ${name}. Momenatn ai ${age} si sexul de tip: ${sex}`); //string literals
console.log(`Bine ai venit ${name}. Momenatn mai ai de trait ${100 - age} si sexul de tip: ${sex}`);

//

var obj = {
    name: "Robert",
    age: 32,
    sex: "M",
    city: "Bucharest",
    country: "Romania",
}

var obj2 = {
    name: "Cloude",
    age: 16,
    sex: "M",
    city: "Paris",
    country: "France",
}
function logDetails(paramThatFunctionReceive) {
    let countryCode = paramThatFunctionReceive.country; //1
    let personSex = paramThatFunctionReceive.sex; //2 
    let personAge = paramThatFunctionReceive.age; //3

    const finalMark = obj.country === "Romania" ? "!" : "."
    console.log(`${obj.name} are varsta de ${obj.age} ani, sexul ${obj.sex} si este din ${obj.city}, ${obj.country}`);
    console.log(`${paramThatFunctionReceive.name} are varsta de ${paramThatFunctionReceive.age} ani, sexul ${paramThatFunctionReceive.sex} si este din ${paramThatFunctionReceive.city}, ${obj.country}`)
}

function logDetails() { //shorthand for 1,2,3
    let { country, sex, age } = paramThatFunctionReceive;
    console.log(country, sex, age);
}

logDetails(obj);
logDetails(obj2);

//Spread Operators

var a = [1, 2, 3, 4, 5];
var b = [6, 7];

console.log(a, concat(b)); //1234567
console.log([...a, ...b]); //1234567 = spread operators

//
function test(a, b, c, d, e) {
    let sum = a + b + c + d + e;
    console.log(sum);
}

function test2(...rest) {
    let sum = 0;
    for (var i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    console.log(rest);
}

test(1, 2, 3, 4, 5); //15
test(1, 2, 3, 4, 10); //25
test(1, 2, 3, 4, 10, 15, 1, 2, 3, 4, 10, 15, 1, 2, 3, 4, 10, 15); //40

//
function sum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
var arr1 = [1, 2, 3];
sum(...arr1);

//
function math(num1, num2, ...rest) {
    var sum = num1 + num2;

    console.log(num1 * num2);

    for (var i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    console.log(sum);
}
math(2, 3, 4);
math(2, 3, 4, 5);

//
let str = "Hello";
console.log(str.split(""));
console.log([...str]);

//Arrow Function

var b = [1, 12, 3, 5];
var c = b.map(entry => entry * 2);
console.log(c);
