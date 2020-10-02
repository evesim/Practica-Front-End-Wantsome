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
// 	- Teme: array og string
// 	- Note: list of numbers
// 	- Actiune: salut //"Buna ziua, sunt XXXXX"
// 	- Actiune: showsGrade //"Notele lui XXXXX sunt YYYY"

// Profesori > Oameni
// 	- Materie: string
// 	- Actiune: salut //"Buna ziua, sunt domnul/doamna (nume de familie) XXX si predau YYY"
// 	- Actiune: evaluare // Chooses a random number from 1 to 10 and returns to an elev X the grade

function People(firstName, lastName, age, sex, hoobies,) {
    this.name = {
        firstName: firstName,
        lastName: lastName,
    };
    this.age = age;
    this.sex = sex;
    this.hoobies = hoobies;

    this.presentYourself = () => {
        console.log(`Salut! Sunt ${this.name.firstName}`);
    }
    this.showBiography = () => {
        console.log(`${this.name.lastName}${this.name.firstName} in varsta de ${this.age} are hobby-urile ${this.hoobies} `);
    }
}

const evelina = new People("Evelina", "Simion", 24, "M", ["music", "reading"]);
evelina.presentYourself();
evelina.showBiography();

