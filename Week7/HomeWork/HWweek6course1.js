//1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
//raporta acest lucru in consola. (exemplu: “2 este numar par”);
//Scrieti functia in doua variante: while si for

//loop function - for which will go from 0 to 20 with i being incremented +1
for (i = 0; i <= 20; i++) {
    //if the rest from the i%2 is 0 the will print (show in console) "i (- being the numar that will be between 0 and 20) este numar par"
    if (i % 2 === 0) {
        console.log(i + " este numar par");
    }
}


//declare i
var i = 0;
//loop function- while i is smaller or equal to 20 
while (i <= 20) {
    //if the rest from the i%2 is 0 the will print (show in console) "i (- being the numar that will be between 0 and 20) este numar par"
    if (i % 2 === 0) {
        console.log(i + " este numar par");
    }
    //incremnet i with +1
    i++;
}

//2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
//rezultatul. (exemplu: “3*9=27”).
//Scrieti functia in doua variante: while si for

//loop function - for which will go from 0 to 10 with i being incremented +1
for (i = 0; i <= 10; i++) {
    //print multiplication of i with 9
    console.log(i + "*9=" + (i * 9));
}

//declare i
var i = 0;
//loop function- while i is smaller or equal to 20 
while (i <= 10) {
    //print multiplication of i with 9
    console.log(i + "*9=" + (i * 9));
    //increment i with +1 
    i++;
}

//3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
//(exemplu: 1 * 0 = 0
//    1 * 1 = 1
//    …
//    1 * 10 = 10 )
//   Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”

//loop function - for which will go from 1 to 10 with i being incremented +1
for (i = 1; i <= 10; i++) {
    ////loop function - for which will go from 1 to 10 with j being incremented +1
    for (j = 1; j <= 10; j++) {
        //multiplication between i and j
        result = i * j;
        //print the multiplication under the format i*j=(i*j)
        console.log(i + "*" + j + "=" + result + "\n");
    }
}

//4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
//poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
//calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
//dezvoltate la tema anterioara ! 
