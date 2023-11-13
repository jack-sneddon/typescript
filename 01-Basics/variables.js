// [let|var|any|const] [name] : [type] = [value]
// var is the original JavaScript declaration
// var has some weird scoping issues, so use let and const
var myVar = "myVar";
console.log(myVar + " type = " + typeof myVar);
// let is used
var myLet = "myLet";
console.log(myLet + " type = " + typeof myLet);
// const is a var but it cannot be changed
var myConst = "myConst";
console.log(myConst + " type = " + typeof myConst);
// No type annotation needed -- 'myName' inferred as type 'string'
var myName = "Jack";
console.log(myName + " type = " + typeof myName);
