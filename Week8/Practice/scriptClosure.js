/*function foo() {
    var a = 5;
    var b = 2;
    function bar() {
        console.log(a + b);
    }
    return bar();
}

var test = foo();

console.log(test);
test = test();
console.log(test);
*/

/*
var i = 0;
while (i < 10) { //will go always up until will find the variables declaration
    //instructiuni
    i++;
}
*/

/*
function Animal(){
    var name;
    var whatShoudIsay;

    function _giveAName(giveAName){
        name = giveAName;
    }

    function _learnToTalk(words){
        whatShoudIsay = words;
    }

    function _tellMeAboutYou(){
        console.log("My name is " + name + " and I say " + whatShoudIsay);
    }

    return{
        setName: _giveAName,
        learnToTalk: _learnToTalk,
        speak: _tellMeAboutYou,
    };
}

var dog = Animal();
var cat = Animal();

dog.setName("Rex");
dog.learnToTalk("ham ham");
cat.setName("Tom");
cat.learnToTalk("miau miau");

dog.speak();
cat.speak();
*/
