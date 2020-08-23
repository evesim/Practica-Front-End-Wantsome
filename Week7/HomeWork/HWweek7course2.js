//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

function myFunction(email) {
    var termsArray = email.split("@");
    console.log(termsArray[0].slice(0, 6) + "...@" + termsArray[1]);
}
myFunction("ovidiu.grigoras@test.com");

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

function myFunction(str) {
    var stringToArray = str.split(" ");
    var result = "";
    for (i = 0; i < stringToArray.length; i++) {
        result += stringToArray[i].slice(0, 1).toUpperCase().concat(stringToArray[i].slice(1)).concat(" ");
    }
    console.log(result);
}
myFunction("i am superman")

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function isUpperCaseAt(myVar, position) {
    return myVar.charAt(position).toUpperCase() == myVar.charAt(position);
}
function myFunction(str) {
    var finalString = "";
    for (i = 0; i < str.length; i++) {
        if (isUpperCaseAt(str, i) == false) {
            finalString += str[i].toUpperCase();
        } else {
            finalString += str[i].toLowerCase();
        }
    }
    console.log(finalString);
}
myFunction("xxXyYzZZ");

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function myfunction(str, count) {
    var result = "";
    for (i = 0; i < count; i++) {
        result += str;
    }
    console.log(result);
}
myfunction("wantsome", 5);

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

//var1
function isPalindrome(str) {
    if ((str == str.split('').reverse().join('')) == true) {
        return "is palindrom";
    } else {
        return "is not palindrom";
    }

}
console.log(isPalindrome("level"));

//var2

function isPalindrome(str) {
    var flag = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] != str[str.length - i - 1]) {
            flag = 1;
            break;
        }
    }
    console.log(flag);
    if (flag === 0) {
        return "is palindrome";
    } else {
        return "is not palindrome";
    }
}
console.log(isPalindrome("level"));

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
//contine ca si elemente cele mai mari numere din fiecare array

function myfunction(arr) {
    var finalArray = [];
    var arrayItems = [];
    for (i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        arrayItems = arr[i];
        var max = 0;
        for (j = 0; j < arrayItems.length; j++) {
            if (max < arrayItems[j]) {
                max = arrayItems[j];
            }
        }
        finalArray.push(max);
    }
    console.log(finalArray);
}
myfunction(myInputArray);

//Ex7
// Implementati o functie care face reverse la un string

function reverseString(str) {
    var result = str.split("");
    return result.reverse().join("");
}

console.log(reverseString("hello"));


//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

function factorial(number) {
    var result = 1;
    for (i = number; i >= 1; i--) {
        result = result * i;
    }
    console.log(result);
}
factorial(4);

//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

function myFunction(firstStr, secondStr) {
    var endFirstStrLast = firstStr.slice(firstStr.length - secondStr.length);
    if (secondStr == endFirstStrLast) {
        return "Se termina";
    } else {
        return "Nu se termina";
    }
}

console.log(myFunction("Mama are mere", "mere"));


//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care 
//trece testul specificat

function testFunction(nr) {
    return nr % 2 === 0;
}
function myFunction(arr, testFunction) {
    for (var i = 0; i < arr.length; i++) {
        if (testFunction(arr[i]))
            return arr[i];
    }
}
console.log(myFunction([1, 2, 3, 4], testFunction));

//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
//string

function verifCharacters(str1, str2) {
    var string2ToArray = str2.split("");
    var string1ToArray = str1.split("");
    var flag = 0;
    for (var i = 0; i < string2ToArray.length; i++) {
        if (string1ToArray.includes(string2ToArray[i])) {
            continue;
        } else {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(verifCharacters("gartbpoc", "bpocscxvxcvxcv"));

// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
//cand intalneste elementul cu valoarea specificata



/*
12. Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare
element al array-ului pana cand intalneste elementul cu valoarea specificata
*/
myFunction([1, 2, 3, 4], 3)

//13

//14