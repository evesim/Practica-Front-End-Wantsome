var myName = "Eve";
typeof (1); //to figure out the type of value 
console.log(); //show me in the console


//functions
function sumOfTwoNumbers(a, b) {
    var c = a + b;
    return c;
}
sumOfTwoNumbers(2, 3); //you have to call the function in order to work

setTimeout(function () {
    console.log("Buna Dimineata");
}, 5000); //the function is called and showed after 5000ms

//
function myFunction1() {

}

function myFunction2() {
    return "test";
}

console.log(myFunction1()); //will return undefined
console.log(myFunction2());

//
function sumAndMultiply(a, b) {
    console.log(a + b);
    return "Se face o adunare si o inmultire"; //will stop the execution in the middle of the function, will return the sum, but not the multiply (it doesn't reach it)
    console.log(a * b);
}
sumAndMultiply(2, 3)

//strings
var myString = "Vreau sa stiu \"JS\" ";
alert(myString); //will show Vreau sa stiu "JS"  \"= escape

//
var myString = "Sambata este o zi buna";
console.log(myString.indexOf("o"));
//return the position of the string ex. will return 13 - because the spaces are considered too, 
//counting the position is starting from 0, will return -1 if the string is not found
console.log(myString.indexOf("o", 5)); //will start to search from the 5th position and return the first find after the 5th position 
console.log(myString.length()); //will show the length of the string
console.log(myString.slice(2, 7)); //will slice the string from the 2nd position until the 7th position, we can add negative index
console.log(myString.substring(2, 6)); // the same as slice without the nnegative index
console.log(myString.substr(2, 5)); // will slice from th 2nd position for 7 characters
console.log(myString.replace("buna", "proasta")); // will switch buna with proasta
console.log(myString.toLowerCase()); // transforms the string in lower case characters
console.log(myString.toUpperCase()); // transforms the string in upper case characters
var regEx

//
var myString1 = "Azi";
var myString2 = "este";
var myString3 = "sambata";
var strSpace = " ";
var userInput = "            Textul este acesta";
var myProp = "Azi este sambata";
var wordsList = "scaun,masa,casa"
console.log(myString1.concat(strSpace, myString2, strSpace, myString3)); // concatentions
console.log(userInput.trim()); // removes the white spaces
console.log(myString1.charAt(1)); // will return the character from the 1ft position
console.log(myProp.split("")); // splits the string after the spaces ex. the outcome will e ["Azi" ,"este" ,"sambata"]
console.log(wordsList.split(",")); // splits the string after the "," ex. the outcome will e ["scaun" ,"masa" ,"casa"]
console.log(myString1.charCodeAt(2)); // will return the unicode from the 2nd position

//
console.log(Number.isFinite(352)); // is the number finite or not - will return true or false

//
var myNumber = 123.7654;
console.log(myNumber.toFixed(2)); // will round the number to 2 decimals
console.log(myNumber.toString()); // will transform the number into string

//
// how to restrict the number of characters introduces
var MAX_CHARS = 10;
var myStr = prompt("Introduce textul:"); // like alert but with writable area
var textLength = myStr.length;
var ramainingLength = MAX_CHARS - textLength;
var cuttedText = myStr.slice(0, MAX_CHARS);
console.log("Ai introdus" + textLength + "caractere si mai pot fii introduse" + ramainingLength + "caractere");
console.log("Mesajul taiat este: " + cuttedText); // cuts the introduced text

//
//* UpperChar on the first character of each name
var myStr = "gheorghe popescu";
var nameSplit = myStr.split(" ");
var firstName = nameSplit[0].charAt(0).toUpperCase().concat(nameSplit(0).slice(1));
var lastName = nameSplit[1].charAt(0).toUpperCase().concat(nameSplit(1).slice(1));
var formattedName = firstName.concat("" + lastName);
console.log(formattedName);


