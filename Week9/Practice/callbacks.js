//ex1
function one() {
    console.log('one');
}
function two() {
    console.log('two');
}

one();
two();

//ex2
function first() {
    console.log('first');
}
function second() {
    console.log('second');
}
function third() {
    console.log('third');
    first();
    second();
}
third();

//ex3
function ana() {
    console.log('ana')
}
function are() {
    setTimeout(() => console.log('are'), 500); //setTimeout will appear after 500ms - will excute the function with a delay
}
function mere() {
    console.log('mere')
}
ana();
are();
mere();

//ex4
const subject = 'math';
const doHomework = (subject, callback) => {
    console.log(`I started to do my ${subject} homework`);
    callback();
}

const callback = () => {
    console.log(`I finished my ${subject} homework`);
}
doHomework(subject, callback);

//ex5
const repairCar = (car, nextStep) => {
    console.log(`Am dus masina ${car} la reparat`);
    nextStep();
}
const inService = () => {
    setTimeout(() => console.log('Masina a fost preluata de un mecanic'), 1000);
}

repairCar('BMW', inService);



//ES6 EXAMPLE!!!
const functionES6 = () => {
    const name = 'baby';
    console.log(`this is ES6, ${name}`);
}
functionES6();
