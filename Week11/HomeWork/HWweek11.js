//Returnati id, title, si 150x200 box art url pentru fiecare video
//hint aveti de folosit map,filter

let movieLists = [
    {
        name: "Instant Queue",
        videos: [
            {
                id: 70111470,
                title: "Die Hard",
                boxarts: [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                url: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 4.0,
                bookmark: []
            },
            {
                id: 654356453,
                title: "Bad Boys",
                boxarts: [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                ],
                url: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 5.0,
                bookmark: [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                id: 65432445,
                title: "The Chamber",
                boxarts: [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                url: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 4.0,
                bookmark: []
            },
            {
                id: 675465,
                title: "Fracture",
                boxarts: [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                url: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 5.0,
                bookmark: [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];
const returnStuff = (movieLists => {
    const result = movieLists.map(function videoFinder(element) {
        const videosArray = element.videos;
        const idTitle = videosArray.map(function videoArrayMapCallback(video) {

            const boxartArray = video.boxarts;
            const filterBoxart = boxartArray.filter(function filterCallback(boxartItem) {
                if ((boxartItem.width == 150) && (boxartItem.height == 200)) return true;
            })

            return { id: video.id, titlu: video.title, boxart: filterBoxart };
        })
        return idTitle;
    })
    return result;
})

console.log(returnStuff(movieLists));

//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()

const moveLetters = function (string) {
    const stringToArray = string.split("");
    const futureWords = stringToArray.map((letter) => String.fromCharCode(letter.charCodeAt(0) + 1))
    return futureWords.join("");
}

console.log(moveLetters('hello'))
console.log(moveLetters('abcxy'))

// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"

let changeWordCase = function (string) {
    const stringToArray = string.split(" ");
    const result = stringToArray.map(function uppercaseLetter(word, index) {
      if (index % 2 == 0) word = word.toUpperCase();
      return word;
    })
    return result;
  }
  
  console.log(changeWordCase('hey ppl, lets learn javascript together sometime'))

  // ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
  ];
  
  let allCats = arr.filter((item) => item.species == 'cat')
  console.log(allCats);
  let allHumans = arr.filter((item) => item.species == 'human')
  console.log(allHumans);
  let allFemales = arr.filter((item) => item.sex == 'f')
  console.log(allFemales);
  let totalOfAllAges = arr.reduce((acc, curent) => acc + curent.age, 0)
  console.log(totalOfAllAges);
  let averageAgeOfCats = arr.filter((item) => item.species == 'cat').reduce((acc, curent) => acc + curent.age, 0)
  let ageNumberCats = averageAgeOfCats / arr.filter((item) => item.species == 'cat').length;
  console.log(ageNumberCats);
  let averageAgeOfHumans = arr.filter((item) => item.species == 'human').reduce((acc, curent) => acc + curent.age, 0)
  let ageNumberHuman = averageAgeOfHumans / arr.filter((item) => item.species == 'human').length;
  console.log(ageNumberHuman);
  let avgLengthOfNames = arr.map(item => item.name.length).reduce((acc, current)=> acc +current, 0)/arr.length
  console.log(avgLengthOfNames);
  
//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

function composedValue(first, second, arg){
    return first(second(arg))
}
const square = (nr)=> nr* nr;
const double = (nr)=> nr* 2;
console.log(composedValue(square, double, 5))

//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc

//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

const isOdd = (nr) => nr % 2 == 1
function find(arr, isOdd){
    return arr.filter(isOdd);
}
console.log(find([1,2,3,4,5], isOdd));

