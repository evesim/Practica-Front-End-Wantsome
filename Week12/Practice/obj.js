var obj1 = {
    prop1: "valoarea1",
}

obj1.myMethod = () => {
    console.log("aaa");
}

var obj2 = {
    prop75: "valoarea685",
}

obj2.myMethod = () => {
    console.log("aaa");
}

console.log(obj1);
console.log(obj2);

Object.prototype.toString = () => {
    console.log("asdfghjk")
}

console.log(obj1.toString());
console.log(obj2.toString());

obj1.newProp = "rtfagvhjb";