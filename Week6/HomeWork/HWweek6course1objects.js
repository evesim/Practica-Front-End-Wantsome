// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name
var car = {
    name: 'Tesla',
    wheels: 4,
};
console.log(car);
car.name = 'Mercedes';
console.log(car);
delete car.name;
console.log(car);

//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
var song = {
    title: 'Hit em up',
    artist: '2Pac',
    year: 1995,
    label: 'Death Row',
};
var myKeys = Object.keys(song);
var myKeysUp = myKeys.join().toUpperCase(); // will transform the array of  the keys into string and then make it uppeercase
console.log(myKeysUp);
var myValues = Object.values(song);
var myValuesDwon = myValues.join().toLowerCase();
console.log(myValuesDwon);
var finalString = 'The song ' + song.title + ' is sung by ' + song.artist + ' and it was released in the year ' + song.year + ' labelled by ' + song.label + '.';
console.log(finalString);

//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
var animal = {
    name: 'Rex',
    age: 6,
    describePet: function () {
        console.log('He is ' + animal.name + ' and has ' + animal.age + ' years old')
    }
}
animal.describePet();

//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
var myHouse = {
    rooms: 3,
    zone: "Bucium",
    animals: 1
}

var car = {
    wheels: 4,
    color: 'white',
}
var myCar = {}
Object.assign(myCar, car); //deep copy from an object into another object
myCar.doors = 5;
myCar.seats = 6;
console.log(myCar);
var ultimateThing = Object.assign(myHouse, myCar);
console.log(ultimateThing)

// Ex5 
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
var user = {
    name: {
        first: 'John',
        last: 'Doe',
    },
}
var objKeys = Object.keys(user.name);
console.log(objKeys);
var userNameArray = objKeys.join();
console.log(userNameArray);
var userNameArray = objKeys.join(' si ');
console.log(userNameArray + ' apartin obiectului name');

//Ex6
// Avem obiectul : 
//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
myObject = {
    name: "John",
    surname: "Applegate",
}
var objValues = Object.values(myObject);
console.log(objValues);
objValues.sort();
console.log(objValues);

  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.
  
function flower(model, color) {
    this.model = model;
    this.color = color;
    this.upper = function () {
        return this.model.toUpperCase() + ',' + this.color.toUpperCase()
    }
}

var myFirstFlower = new flower('rose', 'red');
console.log(myFirstFlower);
var mySecondFlower = new flower('liliac', 'purple'); 
console.log(mySecondFlower); 
var myThirdFlower = new flower('lily', 'white'); 
console.log(myThirdFlower); 
console.log(myFirstFlower.upper());
console.log(mySecondFlower.upper());
console.log(myThirdFlower.upper());


