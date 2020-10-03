//ex1
// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

// var Vehicle = function (driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.drive = function (mph) {
//         this.speed = mph;
//         return this.driver + ' driving at ' + mph + ' miles per hour';
//     };
// };

// var Car = function () {
//     this.driver = driver;
//     this.speed = 0;
//     this.drive = function (mph) {
//         this.speed = mph;
//         return this.driver + ' driving at ' + mph + ' miles per hour';
//     };
// };

// var Truck = function (driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.cargo = [];

//     this.drive = function (mph) {
//         this.speed = mph;
//         return this.driver + ' driving at ' + mph + ' miles per hour';
//     };

//     this.loadCargo = function (cargo) {
//         this.cargo.push(cargo);
//         return this;
//     };

//     this.unloadCargo = function () {
//         return this.cargo.pop();
//     };
// };

//ex1
// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

var Vehicle = function (driver) {
    this.driver = driver;
    this.speed = 0;
};

Vehicle.prototype.drive = function (mph) {
    this.speed = mph;
    return this.driver + ' driving at ' + mph + ' miles per hour';
};

var Car = function (driver) {
    Vehicle.call(this, driver);

};
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var Truck = function (driver) {
    Vehicle.call(this, driver);
    this.cargo = [];
    this.loadCargo = function (cargo) {
        this.cargo.push(cargo);
        return this;
    };

    this.unloadCargo = function () {
        return this.cargo.pop();
    };

};
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

var truck1 = new Truck("Maria");
console.log(truck1.drive(15));

//es6
// class Vehicle{
//     constructor(driver){
//       this.driver = driver;
//     };
  
//     drive(mph){
//       this.speed = mph;
//       return this.driver + ' driving at ' + mph + ' miles per hour'
//     }
//   }
  
//   class Car extends Vehicle{
//     constructor(driver){
//       super(driver);
//     }
//   }
  
//   class Truck extends Vehicle{
//     constructor(driver, cargo){
//       super(driver);
//       this.cargo = [];
//     }
  
//      loadCargo(cargo) {
//           this.cargo.push(cargo);
//           return this;
//       }
  
//      unloadCargo () {
//           return this.cargo.pop();
//       };
//   }
  
//   var truck1 = new Truck("Maria");
//   console.log(truck1.drive(15));


//ex2
var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

var Trainer = function (){
  Person.call(this);

  this.teach = function (subject){
    console.log(`${this.name} is now teaching ${subject}`)
  }
}

Trainer.prototype = Object.create(Person.prototype);
Trainer.prototype.constructor = Trainer;

var firstTeacher = new Trainer();
firstTeacher.initialize("Ana", 25)

console.log(firstTeacher.teach("English"))

//es6
// class Person{
//     initialize(name,age){
//       this.name = name;
//       this.age = age;
//     }
//   }
  
//   class Trainer extends Person{
//     teach(subject){
//       console.log(`${this.name} is now teaching ${subject}`)
//     }
//   }
  
//   var firstTeacher = new Trainer();
//   firstTeacher.initialize("Ana", 25)
  
//   console.log(firstTeacher.teach("English"))

// Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]



//ex3
// triunghi.constructor;                 // Triangle(a, b, c)   
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"


//cand dau console.log(triunghi.constructor) tre sa printeze Triangle(a,b,c)

