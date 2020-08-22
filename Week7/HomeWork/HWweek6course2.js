/*
6. Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si
returneaza un array care contine ca si elemente cele mai mari numere din fiecare array
*/

var myInputArray = [[1, 2, 3], [8, 9, 5], [52, 42, 21, -7, 3]];
// [3,9,52]

/*
 declara finalArray
 parcurge myInputArray
    declara o variabila X care contine array-urile din array
    declara o variabila max undefined
    parcurge array-ul X pentru a vede maximul
     daca mx < x(i) atunci max = x[i]
    punem max in finalArray //google: how to add a new elemt into an array
 print finallArray
*/

/*
8. Implementati o functie care calculeaza factorialul unui numar
*/
factorial(3);
/*
 declara o variabila nr
 cream o functie factorial
    declara variabila result
    facem un for de la i=nr; i>=i; i--
        result = result*i
    return result
 apelam functia factorial cu varibila nr
*/

/*
11. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele
celui de-al doilea string
*/
testEx11("gartbpoc", "abc")//true
testEx11("gartbpoc", "125")//false
/*
    declara o functie cu doua argumente string1 si string2
        declara variabila string2ToArray care va fi un array cu toate caracterele din string2
        //string1="gartbpoc"
        //string2=["a","b","c"]
        parcurgi string2ToArray
            daca string2ToArray[i] nu se afla in string1
                 continue
             return false
        retur true
*/

/*
2. Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
 de ex: myFunction("i am superman") sa printeze "I Am Superman"
*/
myFunction("i am superman") // print "I Am Superman"
/*
 declara o funtie care accepta un string ca si parametru
    impartim string-ul intr-un array (stringToArray) cu fiecare cuvant din proprozitie folosind split 
    declara o variabila result ca si string gol
    parcurgem stringToArray
        //stringToArray[i] o sa fie pe rand "i", "am", "superman"
        result = result.concat(stringToArray[i].slice(0,1).toUpperCase().concat(stringToArray[1].slice(i)))
        result = result.concat(" ")    
*/

/*
10. Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul
element din array care trece testul specificat
*/

function testFunction(nr) {
    return nr % 2 === 0;
}
function myFunction(arr, testFunction) {
    for (var i = 0; i < arr.length; i++) {
        if (testFunction(arr[i]))
            return arr[i];
    }
}

myfunction([1, 2, 3, 4], testfunction())

/*
12. Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare
element al array-ului pana cand intalneste elementul cu valoarea specificata
*/
myFunction([1, 2, 3, 4], 3)