/**
 * @param {string} str the input string
 * @returns {number} the length of the longest substring with distinct (non-repeating) characters
 */

function lengthOfLongestSubstring(str) {
    let index1 = 0;
    let index2 = 0;
    let maxLength = 1;
    while (index1 <= index2) {
        index2++
        for (let i = index1; i < index2; i++) {
            if (str[i] == str[index2]) {
                index1 = i + 1;
            }
        }

        let presentString = str.slice(index1, index2 + 1);
        if (presentString.length > maxLength) {
            maxLength = presentString.length;

        }
        if (index2 == (str.length - 1)) {
            return maxLength
        }
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
// should log 3: 'abc'

console.log(lengthOfLongestSubstring('bbbbb'));
// should log 1: 'b'

console.log(lengthOfLongestSubstring('pwabcdefwxyzkew'));
// should log 3: 'wke'


/**
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 * Ignoring case, can the characters from string 2 build string 1?
 */

function canBuildString1FromString2(str1, str2) {
    // your code here
    function canBuildString1FromString2(str1, str2) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        const str1Obj = getFrequencyObject(str1);
        const str2Obj = getFrequencyObject(str2);

        // compoare keys of the two freq objs

        for (const key in str1Obj) {
            if (!str2Obj.hasOwnProperty(key) || str2Obj[key] < str1Obj[key]) {
                return false;
                // } else if (str2Obj[key] < str1Obj[key]) {
                //   return false;
            }

        }
        return true;
    }
}

'HELLO'.toLowerCase(); // returns 'hello'

console.log(canBuildString1FromString2('Hello World', 'lloeh wordl')); // should log true
console.log(canBuildString1FromString2('Hey', 'hello')); // should log false
console.log(canBuildString1FromString2('hello', 'helo')); // should log false
console.log(canBuildString1FromString2('hello', 'lllheo')); // should log true


/**
 * @param {number} hours
 * @param {number} minutes
 * @returns {string}
 */

function timeInWords(hours, minutes) {
    // your code here
}

console.log(timeInWords(5, 15)); // should log 'quarter past five'
console.log(timeInWords(5, 30)); // should log 'half past five'
console.log(timeInWords(5, 40)); // should log 'twenty minutes to six'
console.log(timeInWords(5, 45)); // should log 'quarter to six'
console.log(timeInWords(12, 0)); // should log `twelve o'clock`
console.log(timeInWords(23, 28)); // should log 'twenty eight minutes past twenty three'
console.log(timeInWords(23, 45)); // should log 'quarter to zero'