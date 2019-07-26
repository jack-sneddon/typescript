function hasUpperCase(str) {
   return (/[A-Z]/.test(str));
}
function hasLowerCase(str) {
   return (/[a-z]/.test(str));
}

function hasLowerCase2(str) { 
   return str ? (/[a-z]/.test(str)) : false; 
}

function hasLowerCase3(str) {
   return str.toUpperCase() != str;
}


/*
 * @param {string} str
 * @return {string}
 */
 var toLowerCase = function(str) {
   
   // see if there are any upper case strings
   if (hasUpperCase(str) === false) {
      return str;
   }

   return str.toLowerCase();



   /*
   let returnStr:String;
   
   // spread syntax
   // let returnArray = [...str];

   // 'for of' array rather than 'for in' array
   for (var char of str) {
      // console.log(char); 
      returnStr 
   }
   
    return returnStr = str.toLowerCase();
    */
};

let myStr:string = 'Hello';

// time to lower
var start = new Date().getMilliseconds();
console.log(myStr + " ==> " + myStr.toLowerCase());
var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + "ms\n\n");

// time char array to string
console.log("HELLO JACK" + ' hasLowerCase = ' + hasLowerCase2("HELLO"));
console.log("hello jack" + ' hasLowerCase = ' + hasLowerCase2("hello jack"));
console.log("Hello Jack" + ' hasLowerCase = ' + hasLowerCase2("Hello Jack"));
console.log("hello Jack" + ' hasLowerCase = ' + hasLowerCase2("hello Jack"));


// console.log('toLower HELLO JACK ==>  ' + toLowerCase ('HELLO JACK'));
// console.log('toLower hello jack ==>  ' + toLowerCase ('hello jack'));
// console.log('toLower heLLo  jAck ==>  ' + toLowerCase ('heLLo jAck'));
// console.log('toLower hellO jacK ==>  ' + toLowerCase ('hellO jacK'));

// time string append
start = new Date().getMilliseconds();
console.log('toLower HeLlo JaCk ==>  ' + toLowerCase ('HeLlo JaCk'));
var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + "ms");


