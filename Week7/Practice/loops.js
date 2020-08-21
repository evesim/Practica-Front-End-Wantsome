//FOR
for (i = 0; i < 5; i++) {
    console.log("valoarea lui i: ", i);
}


var user = ["Ana", "George", "Tibi"];
for (i = 0, len = user.length; i < len; i++) {
    console.log(i);
}

//FOR...IN - objects
var userDetails = {
    name: "Daniel",
    age: 22,
    gender: "M",
}
var userInfo = "Detaliile utilizatorului sunt: ";
for (var key in userDetails) {
    userInfo = userDetails[key] + ","; //will show the values from the object
}

//WHILE
var i = 0;
while (i < 10) {
    console.log(i); //log i - infinite loop
    i++; // will increment
}

//DO..WHILE
var i = 100;
do {
    console.log(i);
    i++;
} while (i < 0)

//BREAK
//var numberList = [7, 9, -2, 1, -13, 40, 24, 15];
//for (var i = 0; i<numberList.length; i++) {
//    console.log(numberList[i]);
//}
var numberList = [7, 9, -2, 1, -13, 40, 24, 15];
for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] < 0) {
        break;
    }
    console.log(numberList[i]);
}

//CONTINUE
var numberList = [7, 9, -2, 1, -13, 40, 24, 15];
for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] < 0) {
        continue;
    }
    console.log(numberList[i]);
}

for (var i = 0; i < 100; i++) {
    //check if the number is even
    if (i%2 === 0){
        continue;
    }
    //if the code ends up here, it means that i in uneven and will print
    console.log(i + " numarul este impar");
}