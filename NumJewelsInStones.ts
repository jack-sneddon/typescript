/*
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

     // ways to declare an array
    /*
    let arr1: boolean[] = [];
    let arr2: boolean[] = new Array();
    let arr3: boolean[] = Array();

    let arr4: Array<boolean> = [];
    let arr5: Array<boolean> = new Array();
    let arr6: Array<boolean> = Array();

    let arr7 = [] as boolean[];
    let arr8 = new Array() as Array<boolean>;
    let arr9 = Array() as boolean[];

    // array6 and arr7 seem to be weird
    */


var numJewelsInStones = function(J, S) {

    // TODO: interate on the larger array first instead of the smaller one
    let jList: Array<string> = J.split('');
    let sList: Array<string> = S.split('');

    let i=0;
    let count=0;
    while(i< jList.length) {
        let k = 0;
        while(k < sList.length) {
            // console.log("i=" + i + ", Jewel = " + J.charAt(i));
            // console.log("k=" + k + ", Stone = " + S.charAt(i));
            if(sList[k] === jList[i]) {
                count++;
            }
            k++;
        }
        i++;
    }

    return count;
};

// Input: J = "aA", S = "aAAbbbb"
let J = "aA";
let S = "aAAbbbb";

console.log("Input: Jewels = " + J + ", Stones = " + S);
var start = new Date().getMilliseconds();
console.log("Number of Jewels = " + numJewelsInStones(J, S));
var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + "ms");


//Input: J = "z", S = "ZZ"
J = "z";
S = "ZZZZ";

console.log("Input: Jewels = " + J + ", Stones = " + S);
var start = new Date().getMilliseconds();
console.log("Number of Jewels = " + numJewelsInStones(J, S));
var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + "ms");

// Input: J = "aAbc", S = "aAAbbbbeeeecsssssvvvvrrrrrzbyyyyA"
J = "aAbc";
S = "aAAbbbbeeeecsssssvvvvrrrrrzbyyyyA";

console.log("Input: Jewels = " + J + ", Stones = " + S);
var start = new Date().getMilliseconds();
console.log("Number of Jewels = " + numJewelsInStones(J, S));
var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + "ms");
