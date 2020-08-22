//Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul: “Sunt la iteratia
//numarul [index]” - Scrieti codul in doua variante

function countIndex(n) {
    for (i = 0; i <= n; i++) {
        console.log("Sunt la interatia numarul " + i);
    }
}
countIndex(3);

function countIndex2(n) {
    var nr = 0;
    while (n >= nr) {
        console.log("Sunt la interatia numarul " + nr);
        nr++;
    }
}
countIndex2(3);

//Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia prin parcurgerea sa -
//Scrieti codul in doua variante

function goOverArray(arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
        console.log(arr[i]);
    }
}
var myArray = [1, 2, 3, 4, 5];
goOverArray(myArray);

function goOverArray2(arr) {
    var i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}
var myArray = [1, 2, 3, 4, 5];
goOverArray(myArray);

//Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia prin parcurgerea sa -
//scrieti codul in doua variante

function goOverObject(myObj) {
    console.log(Object.values(myObj));
    for (var i = 0; i < Object.values(myObj).length; i++) {
        console.log(Object.values(myObj)[i])
    }
}
var myObj = {
    name: "Gogu",
    city: "Paris",
};
goOverObject(myObj);

function goOverObject2(myObj) {
    for (var key in myObj) {
        console.log(objInfo = myObj[key] + ",");

    }
    //console.log(myObj[key]); //or this
}
var myObj = {
    name: "Gogu",
    city: "Paris",
};
goOverObject2(myObj);

//1. 0 100 200 300 400 500 600 700 800 900 1000
for (i = 0; i <= 1000; i = i + 100) {
    console.log(i);
}

//2. 1 2 4 8 16 32 64 128
var i = 0;
while (i <= 7) {
    console.log(Math.pow(2, i));
    i++;
}

//3. 0 2 4 6 8 10
for (var i = 0; i <= 10; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}

//4. 3 6 9 12 15
for (var i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

//Implementati functia stream. Trebuie sa:
//● accepte ca argumente 2 functii: conditionalFn, actionFn.
//● apeleaza actionFn pana cand conditionalFn returneaza fals
//● nu returneaza nimic

function stream(condition, callback) {
    while (condition() === true) {
        callback();
    }
    //Exemplu 1:
    conditionalFn = function () { return false; };
    actionFn = function () { console.log("Vreau sa ies la tabla!"); };
    stream(conditionalFn, actionFn); // Nu afiseaza nimic
    //Exemplu2:
    counter = 10;
    conditionalFn = function () {
        counter--;
        return counter >= 0;
    };
    stream(conditionalFn, actionFn);
}// Afiseaza “Vreau sa ies la tabla” de 10 ori

//Implementati functia computeSumOfArrayElements.
//Trebuie sa:
//● accepte ca argument un array format din numere
//● returneze suma numerelor din array
//● foloseasca instructiunea while
function computeSumOfArrayElements(arr) {
    var sum = 0;
    var i = 0;
    while (i < arr.length) {
        sum = sum + arr[i];
        i++;
    }
    console.log(sum);
}
//Exemplu 1:
computeSumOfArrayElements([]); // returneaza 0f
//Exemplu 2:
computeSumOfArrayElements([1, 2, 3, 4]); // returneaza 10