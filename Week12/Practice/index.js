//First Methode
// var person1 = {
//     name: "Gheorghe",
//     age: 17
// }
// console.log(`Numele meu este:${person1.name} si am ${person1.age}ani`)

// var person2 = {
//     name: "Viorel",
//     age: 77
// }
// console.log(`Numele meu este:${person2.name} si am ${person2.age}ani`)

//Second Methode
// function person(name, age) {
//     let obj = {};
//     obj.name = name;
//     obj.age = age;
//     obj.sayHello = () => {
//         console.log(`Numele meu este: ${name} si am ${age}ani`)
//     }
//     return obj;
// }

// person1 = person("Gheorghe", 17)
// person2 = person("Gheorghe", 17)

// person1.sayHello();
// person2.sayHello();

//Third Methode - OOP 
function Person(name, age, sex = "") { // a class will always have the first letter CAPPITAL
    this.name = name;
    this.age = age;
    this.personSex = sex;
    this.sayHello = () => {
        let msg = `Numele meu este: ${name} si am ${age}ani`;
        if (this.personSex !== "") {
            msg = msg.concat(`Sexul meu este: ${this.personSex}`)
        }
        console.log(msg)
    }
    this.getOld = () => {
        this.person3 += 1;
    }
}

person1 = new Person("Gheorghe", 17) // a class will always have the first letter CAPPITAL and we will create a new person
person2 = new Person("Gheorghe", 17)

person1.sayHello();
person2.sayHello();


var person3 = new Person("Rares", 15);
person3.sayHello();
person3.getOld();
person3.sayHello();

var person4 = new Person("Claudia", 25, "feminin");
person4.sayHello();










