/*  
    param1: nr
    param2: nr
    param3: S (scadere), A(adunare), I(inmultire), D(impartire)

    functia intoarce rezultatul
*/

function calculator(number1, number2, mathOperation) {
    var result;
    switch (mathOperation) {
        case "S":
            result = number1 - number2;
            break;
        case "A":
            result = number1 + number2;
            break;
        case "I":
            result = number1 * number2;
            break;
        case "D":
            result = number1 / number2;
            break;
        default:
            console.log("Not valid. Try again!")
            break;
    }
    return result;
}
calculator(4, 2, "S"); //2
calculator(4, 2, "A"); //6
calculator(4, 2, "I"); //8
calculator(4, 2, "D"); //2