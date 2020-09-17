//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/

function sum(maxNumber) {
    let sum = 0;
    for (i = 1; i <= maxNumber; i++)
        sum += i;

    return sum;
}
console.log(sum(5));


/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/

function findLongestString(str) {
    return str.split(' ').reduce((a, b) => {
        if (a.length > b.length)
            return a;
        else
            return b;
    });

}
console.log(findLongestString('Wantsome is Awsomeeee today'));

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse('Wantsome'));
/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/
function replace(str) {
    let strArray = str.split('');
    for (i = 0; i < strArray.length; i++)
        strArray[i] = String.fromCharCode(strArray[i].charCodeAt(0) + 1);
    return strArray.join('');

}
console.log(replace('Wantsome'));

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

function convert(number) {
    return `${Math.floor(number / 60)}:${number % 60}`
}
console.log(convert(64));

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/

function order(str) {
    return str.split('').sort().join('');
}
console.log(order('zixcozhxciaaas'));
/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/

function check(str) {
    let strArray = str.split('');
    let checkFlag = true
    for (i = 0; i <= strArray.length; i = i + 2)
        if (strArray[i] != '+') {
            checkFlag = false;
            break;
        }

    return checkFlag;
}

console.log(check('+a+b+c+'));
console.log(check('+ab+c+d+'));