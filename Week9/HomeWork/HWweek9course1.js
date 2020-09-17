// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
    console.log('1')
}

const func2 = () => {
    console.log('2')
}

const func3 = () => {
    console.log('3')
}

const func4 = () => {
    console.log('4')
}

const func5 = () => {
    console.log('5')
}

setTimeout(() => func1(), 30)
setTimeout(() => func2(), 20)
setTimeout(() => func3(), 0)
setTimeout(() => func4(), 40)
setTimeout(() => func5(), 10)

// 1

function customMap(array, callback) {
    var arr = [];
    for (var index in array) {
        arr.push(callback(array[index]));
    }
    return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const increment = (input) => {
    return input = input + 1;
}
const double = (input) => {
    return input = input * 2;
}
const square = (input) => {
    return input = input * input;
}

console.log(customMap(randomArray, increment));  // Implement the function named increment so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
console.log(customMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(customMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// 2

/*
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
var filter = function(____, ____) {
  var filteredArray = [];
  for (var ____ = ____; ____ < ____.____; ____++) {
    var ____ = ____[____];
    if (____(____)) {
      filteredArray.push(____);
    }
  }
  return filteredArray;
};

Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var filter = function (array, callback) {
    var filteredArray = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (callback(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
};


const isOddNumber = (input) => {
    return input % 2 == 1;
}
const isEvenNumber = (input) => {
    return input % 2 == 0;
}
const isDivisibleByThree = (input) => {
    return input % 3 == 0;
}
const isDivisibleByFive = (input) => {
    return input % 5 == 0;
}
const isPrimeNumber = (input) => {
    if (input === 1) {
        return false;
    }
    else if (input === 2) {
        return true;
    } else {
        for (var x = 2; x < input; x++) {
            if (input % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(filter(numbers, isOddNumber))
console.log(filter(numbers, isEvenNumber))
console.log(filter(numbers, isDivisibleByThree))
console.log(filter(numbers, isDivisibleByFive))
console.log(filter(numbers, isPrimeNumber))
// 3

/*
Write a function named multipleCallbacks that accepts 3 arguments:
    - an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/

function multipleCallbacks(statusObj, success, error) {
    if (statusObj.status == 'success')
        success();
    else
        error();
}

const success = () => {
    console.log('Success!!!')
}
const error = () => {
    console.log('Error!!!')
}

multipleCallbacks({ status: 'success' }, success, error);
multipleCallbacks({ status: 'error' }, success, error);

