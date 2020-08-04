//EX1
function is_string(myVar) {
    if (typeof myVar == 'string') // - typeoff - shows the type of the input
        return true;
    else
        return false;
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

//EX2
function is_blank(myVar) {
    if (myVar.length == 0) // - If the length is 0 = no string
        return true;
    else
        return false;
}
console.log(is_blank(''));
console.log(is_blank('abc'));

//EX3
function string_to_array(myVar) {
    return myVar.split(" "); // - Splits at the " "
}
console.log(string_to_array("Robin Singh"));

//EX4 - mai gandeste-te!!!!!!
function abbrev_name(myVar) {

}

//EX5
function capitalize(myVar) {
    //return myVar.charAt(0).toUpperCase(); - First letter capitalized
    //return myVar.slice(1); - Shows the string without the first letter
    return myVar.charAt(0).toUpperCase() + myVar.slice(1); // - Back together
}
console.log(capitalize('js string exercises'));

//EX6
function truncate_string(myVar, specifiedNumber) {
    return myVar.slice(0, specifiedNumber); // -Slices the var to a specific position
}
console.log(truncate_string("Robin Singh", 4));

//EX7
function isUpperCaseAt (myVar, position) {
    return myVar.charAt(position).toUpperCase == myVar.charAt(position); // - Compare if the character at the position has an UpperCase with himself
}
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

//EX8
function insert (myVar, myWord, position) {
    var strSpace= " ";
    return myVar.slice(0, position) + myWord + strSpace + myVar.slice(position); // - Goes from 0 to the specified position, adds the word and a space and pulls it back together with the rest
}
console.log(insert('We are doing some exercises',  'Javascript' , 18));