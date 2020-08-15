//Scrieti o functie de tip IIFE care:
//- sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
//- afiseaza in consola array-ul sortat
//Veti crea un fisier javascript separat pe care il veti include intr-un fisier html. Verificarea se va face prin deschiderea paginii html in browser.
(function () {
    var cars = [
        { name: "John", salary: 20000 },
        { name: "Danny", salary: 30500 },
        { name: "Bekker", salary: 15000 },
    ];
    cars.sort(function (a, b) { return a.salary - b.salary });
    console.log(cars);
})();
        //Pseudocod
        // functie
        //array cars - nume [john,danny,bekker] - salariu [20000,30500,15000]
        //sortare.cars si functie de a si b in care returneaza salariul de la cel mai mic la cel mai mare
        //scrie cars