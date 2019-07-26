/*
    Example 1:

    Input: ["flower","flow","flight"]
    Output: "fl"
    
    Example 2:

    Input: ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

    Note:

    All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.forEach(element => {
        console.log(element + '\n');
    });

    let longestPrefix: string; 

    // find a prefix with each 
    for (let i = 0; i < strs.length; i++) {
        var strPrefix;
        // console.log(strs[i]);

        for( let count = i+1; count < strs.length; count++) {
            // find longest commoninality, building an array or string
            let length = (strs[i].length > strs[count].lenght) ? strs[i].length : strs[count].length;
            console.log('compare ' + strs[i] + " with " + strs[count] + " -- " + length);
            
            // check each character
            let prefix:string;
            for(let pos = 0; pos < length; pos++) {
                if (strs[i][pos] === strs[count][pos]) {
                    console.log(strs[i][pos] + "===" + strs[count][pos]);
                    prefix+=strs[i][pos];
                }
                else {
                    console.log(strs[i][pos] + "!=" + strs[count][pos]);
                    break;
                }
            }
            //compare with longest prefix and replace if not
            console.log("check: " + prefix + " ?== " + longestPrefix);

        }
            

    }
        // if strPrefix is longer than longestPrefix, it becomes the longest prefix
}

let input = ["flower","flow","flight"];

longestCommonPrefix(input);
