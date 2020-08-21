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
    for (var i= 0; i < Object.values(myObj).length; i++) {
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
        console.log (objInfo = myObj[key] + ",");
        
    }
    //console.log(myObj[key]); //or this
}
var myObj = {
    name: "Gogu",
    city: "Paris",
};
goOverObject2(myObj);

