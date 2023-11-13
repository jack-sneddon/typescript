// [let|var|any|const] [name] : [type] = [value]

// var is the original JavaScript declaration
// var has some weird scoping issues, so use let and const
var myVar : string = "myVar";
console.log(myVar + " type = " + typeof myVar);

// let is used
// unlike var, let follows block scoping rules
let myLet : string = "myLet";
console.log(myLet + " type = " + typeof myLet);

// const is a var but it cannot be changed
// has the same scoping as let
const myConst : string = "myConst";
console.log(myConst + " type = " + typeof myConst);

// No type annotation needed -- 'myName' inferred as type 'string'
// treated as a var
let myName = "Jack";
console.log(myName + " type = " + typeof myName);
