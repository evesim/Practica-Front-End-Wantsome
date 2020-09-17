//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function myFunction(a, b) {
    if (a == b)
        return (a + b) * 5;
    else
        return a + b;
};
console.log(myFunction(10, 5));
console.log(myFunction(10, 10));


//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function testFunction(a, b) {
    if ((a == b) || (a + b == 30))
        return true;

    return false;
};
console.log(testFunction(30, 30));
console.log(testFunction(15, 15));
console.log(testFunction(10, 15));


//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function checkString(str) {
    if (!str) //if  the string is false e.g. undefineed, null
        return 'JS';

    if (str.startsWith('JS')) //if the string starts with
        return str;
    else {
        return 'JS' + str;
    }
}

console.log(checkString('JSisAwsome'));
console.log(checkString('isEasy'));
console.log(checkString(null));

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function removeDuplicates(input) {
    let inputStr = input;
    if (!isNaN(input)) //if returns true means it is number
        inputStr = input + ''; // if it number, will become string to then transform it in array to be able to iterate over it

    let inputArray = inputStr.split(''); 
    let outputArray = inputArray.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    })

    let output = outputArray.join('');
    if (!isNaN(input))
        return parseInt(output);

    return output;
}

console.log(removeDuplicates('aabcdeef'))// - 'abcdef'
console.log(removeDuplicates(122334))// - 1234

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

function findLongestString(phrase) {
    let words = phrase.split(" ");
    let max = 0;
    let position = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > max) {
            max = words[i].length;
            position = i;
        }
    }
    return words[position];
}

console.log(findLongestString('Wantsome is Awsomeeee today'));


//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

function printStarts(rows) {

    for (i = 0; i < rows; i++) {
        let row = '';
        for (j = 0; j <= i; j++)
            row = row + '* ';
        console.log(row);
    }

}
printStarts(5)

//ex7
// append any negative numbers found in the numbers array 
// into the negativeNumbers array constant variable above

const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) negativeNumbers.push(numbers[i]);
    }

}
extractNegativeNumbers([1, 2, -5, 4, -6])
console.log(negativeNumbers);

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

function calculate(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b;

        case 'substract':
            return a - b;

        case 'multiply':
            return a * b;

        case 'divide':
            if (b == 0)
                return 'Second number cannot be 0';
            else {
                return a / b;
            }

        default: return 'Unknown operator';

    }
}

console.log(calculate(2, 5, "add"));
console.log(calculate(10, 8, "substract"));
console.log(calculate(10, 0, "divide"));


//Ex9
// //Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function isDiv(number) {
    if (number % 3 == 0 && number % 5 == 0)
        return 'BOTH';
    else {
        if (number % 3 == 0)
            return 'THREE';
        else {
            if (number % 5 == 0)
                return 'FIVE';
            else {

                return number;
            }
        }
    }
}

console.log(isDiv(15))
console.log(isDiv(9))
console.log(isDiv(7))