// Clasa de studiu:
// 	1.Profesor
// 	2.Elev

// Profesorii si elevii sunt OAMENI

// Omul:
// 	- Nume (Prenume + Nume de familie): string
// 	- Varsta: number
// 	- Sex: string
// 	- Hobby-uri: array of string
// 	- Actiune: salut //"Salut, sunt XXXXXX"
// 	- Actiune: afiseazaBiografie //"XXXXX in varsta de YYYY are hobby-urile ZZZZZZ"

// Elev > Oameni
// 	- Teme: array of string
// 	- Note: list of numbers
// 	- Actiune: salut //"Buna ziua, sunt XXXXX"
// 	- Actiune: showsGrade //"Notele lui XXXXX sunt YYYY"

// Profesori > Oameni
// 	- Materie: string
// 	- Actiune: salut //"Buna ziua, sunt domnul/doamna (nume de familie) XXX si predau YYY"
// 	- Actiune: evaluare // Chooses a random number from 1 to 10 and returns to an elev X the grade

/*
variabile:
-trebuie sa aiba numele sugestiv
-camelCase

const:
-UPPERCASE
-despartite cu _ cuvintele ex. const CONST_RADIUS

clase:
- upperCase prima litera
*/
//Utilis
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Classes
function People(firstName, lastName, age, sex, hoobies) {
    this.name = {
        firstName: firstName,
        lastName: lastName,
    };
    this.age = age;
    this.sex = sex;
    this.hoobies = hoobies;
}

People.prototype.presentYourself = () => {
    console.log(`Salut! Sunt ${this.name.firstName}`);
}

People.prototype.showBiography = () => {
    console.log(`${this.name.lastName}${this.name.firstName} in varsta de ${this.age} are hobby-urile ${this.hoobies} `);
}

//Mare grija cand suprascrieti functionalitatea din prototip. Ea se modifica pentru toate instantele existente si viitoare.

// const evelina = new People("Evelina", "Simion", 24, "F", ["music", "reading"]);
// const marius = new People("Marius", "Simion", 29, "M", ["basket", "gym"]);


function Student(firstName, lastName, age, sex, hoobies, homework, grades) {
    People.call(this, firstName, lastName, age, sex, hoobies); // call the atributes from people - call parent constructor
    this.homework = homework;
    this.gardes = grades;

    Student.prototype = Object.create(People.prototype) //set parent prototype
    Student.prototype.constructor = Student; //reasign the constructor

    Student.prototype.presentYourself = function () {
        console.log(`Buna ziua, sunt ${this.name.firstName}`);
    }
    Student.prototype.showGrades = function () {
        console.log(`Notele lui ${this.name.firstName} ${this.name.lastName} sunt ${this.grades}`);
        console.log(`Ultima nota a fost ${this.grades[this.grades.length - 1]}`)
    }
}

function Teacher(firstName, lastName, age, sex, hoobies, className) {
    People.call(this, firstName, lastName, age, sex, hoobies); // call the atributes from people - call parent constructor
    this.className = className;

    Teacher.prototype = Object.create(People.prototype) //set parent prototype
    Teacher.prototype.constructor = Teacher; //reasign the constructor

    Teacher.prototype.presentYourself = function () {
        let noun = "";
        if (this.sex === "M") {
            noun = "domnul";
        } else {
            noun = "doamna";
        }
        console.log(`Buna ziua, sunt ${noun} ${this.name.lastName} si predau ${this.className}`)
    }

    Teacher.prototype.evaluate = function (student) {
        let grade = getRndInteger(1, 10);
        student.grades.push(grade);
        console.lastName(student);
        console.log(`Felicitari! ${student.name.lastName} ${student.name.lastName}, ai luat nota ${grade}`);

    }
}

var student1 = new Student("Radu", "Vasile", 18, "M", ["filme", " calatorii"], ["informatica"], [10, 9])
var student2 = new Student("Alex", "Vasile", 18, "M", ["filme", " engleza"], ["informatica"], [5, 7])
var student3 = new Student("Cristi", "Vasile", 18, "M", ["muzica", " calatorii"], ["informatica"], [6, 5])
var student4 = new Student("Ionut", "Vasile", 18, "M", ["desen", " fotbal"], ["informatica"], [8, 8])

student1.presentYourself();
student1.showGrades();
student1.showBiography();

var teacher1 = new Teacher("Alex", "Popescu", 54, "M", ["reading", " teaching"], "informatica")
var teacher2 = new Teacher("Andrei", "Ionescu", 30, "M", ["fotbal"], "sport")

teacher1.presentYourself();
teacher1.evaluate(student1);


// evelina.presentYourself(); //console.log  -> Salut! Sunt Evelina
// evelina.showBiography();

// marius.presentYourself(); //console.log  ->  Hey yo! Sunt Marius
// marius.showBiography();

