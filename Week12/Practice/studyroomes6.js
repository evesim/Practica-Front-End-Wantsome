//Utilis
class Utils {
    //if the constructor is empty or doesn't do something is not mandatory
    static getRndInteger(min, max) { //doesn't need a new instance -  it will always be here
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

//Classes
// function People(firstName, lastName, age, sex, hoobies) {
//     this.name = {
//         firstName: firstName,
//         lastName: lastName,
//     };
//     this.age = age;
//     this.sex = sex;
//     this.hoobies = hoobies;
// }

// People.prototype.presentYourself = () => {
//     console.log(`Salut! Sunt ${this.name.firstName}`);
// }

// People.prototype.showBiography = () => {
//     console.log(`${this.name.lastName}${this.name.firstName} in varsta de ${this.age} are hobby-urile ${this.hoobies} `);
// }

class People {
    constructor(firstName, lastName, age, sex, hoobies) {
        this.name = {
            firstName: firstName,
            lastName: lastName,
        };
        this.age = age;
        this.sex = sex;
        this.hoobies = hoobies;
    }

    presentYourself() {
        console.log(`Salut! Sunt ${this.name.firstName}`)
    }

    showBiography() {
        console.log(`${this.name.lastName}${this.name.firstName} in varsta de ${this.age} are hobby-urile ${this.hoobies} `);
    }
}


// function Student(firstName, lastName, age, sex, hoobies, homework, grades) {
//     People.call(this, firstName, lastName, age, sex, hoobies); // call the atributes from people - call parent constructor
//     this.homework = homework;
//     this.gardes = grades;

//     Student.prototype = Object.create(People.prototype) //set parent prototype
//     Student.prototype.constructor = Student; //reasign the constructor

//     Student.prototype.presentYourself = function () {
//         console.log(`Buna ziua, sunt ${this.name.firstName}`);
//     }
//     Student.prototype.showGrades = function () {
//         console.log(`Notele lui ${this.name.firstName} ${this.name.lastName} sunt ${this.grades}`);
//         console.log(`Ultima nota a fost ${this.grades[this.grades.length - 1]}`)
//     }
// }

class Student extends People {
    constructor(firstName, lastName, age, sex, hoobies, homework, grades) {
        super(firstName, lastName, age, sex, hoobies);  //calls the constructor from the extended class eg People
        this.homework = homework;
        this.gardes = grades;
    }

    presentYourself() {
        console.log(`Buna ziua, sunt ${this.name.firstName}`);
    }

    //if you want it to be part of prototype you don't use arrow function
    showGrades() {
        console.log(`Notele lui ${this.name.firstName} ${this.name.lastName} sunt ${this.grades}`);
        console.log(`Ultima nota a fost ${this.grades[this.grades.length - 1]}`)
    }
}


// function Teacher(firstName, lastName, age, sex, hoobies, className) {
//     People.call(this, firstName, lastName, age, sex, hoobies); // call the atributes from people - call parent constructor
//     this.className = className;

//     Teacher.prototype = Object.create(People.prototype) //set parent prototype
//     Teacher.prototype.constructor = Teacher; //reasign the constructor

//     Teacher.prototype.presentYourself = function () {
//         let noun = "";
//         if (this.sex === "M") {
//             noun = "domnul";
//         } else {
//             noun = "doamna";
//         }
//         console.log(`Buna ziua, sunt ${noun} ${this.name.lastName} si predau ${this.className}`)
//     }

//     Teacher.prototype.evaluate = function (student) {
//         let grade = getRndInteger(1, 10);
//         student.grades.push(grade);
//         console.lastName(student);
//         console.log(`Felicitari! ${student.name.lastName} ${student.name.lastName}, ai luat nota ${grade}`);

//     }
// }

class Teacher extends People {
    constructor(firstName, lastName, age, sex, hoobies, className) {
        super(firstName, lastName, age, sex, hoobies);
        this.className = className;
    }

    get className() { //to return a value
        return this._className;
    }
    // getClassName(){
    //     return this._className;
    // }
    set className(value) { //sets a new value 
        return this._className = value;
    }
    // setClassName(){
    //     return this._className = value;

    // }

    presentYourself() {
        let noun = "";
        if (this.sex === "M") {
            noun = "domnul";
        } else {
            noun = "doamna";
        }
        console.log(`Buna ziua, sunt ${noun} ${this.name.lastName} si predau ${this.className}`)
    }
    evaluate(student) {
        let grade = Utils.getRndInteger(1, 10);
        student.grades.push(grade);
        console.log(`Felicitari! ${student.name.lastName} ${student.name.lastName}, ai luat nota ${grade}`);
    }

    static yellThatYouAreTeacher() {
        console.log("YEAAA, I AM A TEACHER!");
    }
}

var student1 = new Student("Radu", "Vasile", 18, "M", ["filme", " calatorii"], ["informatica"], [10, 9]);
var student2 = new Student("Alex", "Vasile", 18, "M", ["filme", " engleza"], ["informatica"], [5, 7]);
var student3 = new Student("Cristi", "Vasile", 18, "M", ["muzica", " calatorii"], ["informatica"], [6, 5]);
var student4 = new Student("Ionut", "Vasile", 18, "M", ["desen", " fotbal"], ["informatica"], [8, 8]);
student1.presentYourself();
student1.showGrades();
student1.showBiography();

var teacher1 = new Teacher("Alex", "Popescu", 54, "M", ["reading", " teaching"], "informatica");
var teacher1 = new Teacher("Alex", "Popescu", 54, "M", ["reading", " teaching"], "franceza"); //a big no no
var teacher2 = new Teacher("Andrei", "Ionescu", 30, "M", ["fotbal"], "sport");
teacher1.presentYourself();
teacher1.evaluate(student1);

