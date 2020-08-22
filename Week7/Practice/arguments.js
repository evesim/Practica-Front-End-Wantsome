/*  
    param1: nr
    param2: nr
    param3: S sau "scadere", A sau "adunare", I sau "inmultire", D sau "impartire"

    functia intoarce rezultatul
*/


var substractOperation = ["S", "subtract", "SS", "SSS","sub"];
var sumOperation = ["A", "adunare"];
var multiplyOperation = ["I", "inmultire"];
var devideOperation = ["D", "imparire"];

function calculator(number1, number2, mathOperation) {
    var result; 
    var unifyMathOperation = detectMathOperation(mathOperation); //detect what kind of operation we need to do
    result = unifyMathOperation(number1,number2);
    /*
        var unifyMathOperation = substract();
    */
    return result;
}

function detectMathOperation(mathOperation){ //return the funtion
    if (substractOperation.includes(mathOperation)){
        return substract; //function from lower
    }else if (sumOperation.includes(mathOperation)){
        return sum;
    }else if (multiplyOperation.includes(mathOperation)){
        return multiply;
    }else if (devideOperation.includes(mathOperation)){
        return devide;
    }
}

function sum(number1, number2) { //function for operation
    return number1 + number2;
}

function substract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function devide(number1, number2) {
    return number1 / number2;
}

console.log(calculator(5,2,"inmultire"));
console.log(calculator(6,3,"devide"));

/*console.log(calculator(4, 2, "S")); //2
console.log(calculator(4, 2, "scadere")); //2

console.log(calculator(4, 2, "A")); //6
console.log(calculator(4, 2, "I")); //8
console.log(calculator(4, 2, "D")); //2
console.log(calculator(4, 2, "H")); //not */
