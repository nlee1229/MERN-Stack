/**
 * Removes every element until the invoked callback returns true.
 * 
 * @param {number[]} arr an array of integers
 * @returns {number[]} the SAME array (ie. WORKING IN PLACE)
 * 
 * If it never returns true, the array should ultimately be empty
 */

function dropIt(arr, callback) {
    // your code here
    function dropIt(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i]) === true) {
                arr.splice(0, i)    //modify the original array
                return arr   //return the original array... now shortened.
            }
        }
        arr.splice(0, i) //If no even numbers found, returns empty array.
        return arr
    }

    const isEven = num => num % 2 === 0

    const firstArr = [1, 3, 5, 7, 2, 4, 1, 6];
    const firstResult = dropIt(firstArr, isEven)

    console.log(firstResult); // should log [2, 4, 1, 6]
    console.log(firstArr === firstResult); // should log true

    const secondArr = [1, 3, 5, 7, 9];
    const secondResult = dropIt(secondArr, isEven);

    console.log(secondResult); // should log []
    console.log(secondArr === secondResult); // should log true
}

const isEven = num => num % 2 === 0

const firstArr = [1, 3, 5, 7, 2, 4, 1, 6];
const firstResult = dropIt(firstArr, isEven);

console.log(firstResult); // should log [2, 4, 1, 6]
console.log(firstArr === firstResult); // should log true

const secondArr = [1, 3, 5, 7, 9];
const secondResult = dropIt(secondArr, isEven);

console.log(secondResult); // should log []
console.log(secondArr === secondResult); // should log true


/**
 * Determines whether a string can be rearranged to make a palindrome.
 * 
 * @param {string} str the original string
 * @return {boolean}
 * 
 * palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nursesrun.
 */


function couldBePalindrome(word) {
    // your code here
    function couldBePalindrome(str) {
        let freqCounter = {};
        for (let i = 0; i < str.length; i++) {
            freqCounter[str[i]] ? freqCounter[str[i]]++ : freqCounter[str[i]] = 1;
        }
        let oddCount = 0;
        for (const key in freqCounter) {
            if (freqCounter[key] % 2 !== 0) {
                oddCount++
            }
            if (oddCount > 1) {
                return false;
            }
        }

        return true;
    }
}


console.log(couldBePalindrome('PPo'));
// should log true - could be 'PoP'

console.log(couldBePalindrome('oooPP'));
// should log true - could be 'PoooP'

console.log(couldBePalindrome('Yuuyuu'));
  // should log false; `Yuuuuy` is not due to casing
