// define a string
let myString = "My String";

// concatinate strings
let str1: string = 'string 1';
let dash: string = '-';
let str2 =  new String('string 2');
let str3: string = str1 + dash + str2;
let str4: string;

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
for(let i=0; i< str1.length; i++) {
    console.log(str1.charAt(i));
}

// Use ES5 for char loop
// $ tsc --target ES5 string_basics.ts
for(let char of str1) {
    console.log(char);
}

// duplicate strings
console.log("----duplicate strings");
let str5: string = "str5";
let str6: string;
str6 = str5;
str6.concat(str1);
console.log(str5);
console.log(str6);

// strings as an array
const str7: string = "Wisconsin";

const usingSplit = str7.split('');
const usingSpread = [...str7];
const usingArrayFrom = Array.from(str7);
const usingObjectAssign = Object.assign([], str7);

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

