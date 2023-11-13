var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// define a string
var myString = "My String";
// concatinate strings
var str1 = 'string 1';
var dash = '-';
var str2 = new String('string 2');
var str3 = str1 + dash + str2;
var str4;
str4 = str2.concat(str1.toString());
console.log(str1);
console.log(str2);
console.log(dash);
console.log(str3);
console.log(str4);
// string length
console.log("Length of str1 = " + str1.length);
// character loop
console.log("----characterAt");
for (var i = 0; i < str1.length; i++) {
    console.log(str1.charAt(i));
}
// Use ES5 for char loop
// $ tsc --target ES5 string_basics.ts
for (var _i = 0, str1_1 = str1; _i < str1_1.length; _i++) {
    var char = str1_1[_i];
    console.log(char);
}
// duplicate strings
console.log("----duplicate strings");
var str5 = "str5";
var str6;
str6 = str5;
str6.concat(str1);
console.log(str5);
console.log(str6);
// strings as an array
var str7 = "Wisconsin";
var usingSplit = str7.split('');
var usingSpread = __spreadArray([], str7, true);
var usingArrayFrom = Array.from(str7);
var usingObjectAssign = Object.assign([], str7);
/*
console.log("arr1 type = " + typeof arr1);
console.log(arr1);

console.log("arr2 type = " + typeof arr2);
console.log(arr2);

console.log("arr3 type = " + typeof arr3);
console.log(arr3);

console.log("arr4 type = " + typeof arr4);
console.log(arr4);
*/
// substrings
// cut out leading / trailing whitepace
// replace letter
// strip out character
// replace substring
// strip out substring
// long strings
// letters or numbers?
// case functions
// 
