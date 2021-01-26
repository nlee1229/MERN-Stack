/**
 * @param {string} str
 * @return {boolean}
 * Are there 2 digits separated by exactly 3 question marks that sum to 10?
 */

/**
 * @param {string} str
 * @return {boolean}
 * Are there 2 digits separated by exactly 3 question marks that sum to 10?
 */

function questionMarks(str) {
    // your code here
    let qmCount = 0;
    let lastNumIndex;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            if (qmCount === 3) {
                if (parseInt(str[lastNumIndex]) + parseInt(str[i]) === 10) {
                    return true;
                }
            } else {
                lastNumIndex = i;
                qmCount = 0;
            }
        } else if (str[i] === '?') {
            qmCount++
        }
    }
    return false;
}

// another way
function questionMarks(str) {
    var counter = 0;
    let temp1 = null;
    for (let i = 0; i < str.length; i++) {
        var val = parseInt(str[i]);
        if (temp1 === null && !isNaN(val)) {
            temp1 = val;
        } else if (temp1 !== null && str[i] === "?") {
            counter++
        }
        if (counter !== 3 && !isNaN(val)) {
            temp1 = val;
            counter = 0;
        }
        if (counter === 3 && !isNaN(val)) {
            return temp1 + val == 10
        }
    }
    return false
}

// some helpful functions
parseInt('s') // returns NaN
parseInt('5') // returns 5
isNaN(NaN) // returns true
isNaN(parseInt('9')) // returns false

console.log(questionMarks('aa6?9')); // should log false
console.log(questionMarks('acc?7??sss?3rr1??????5')); // should log true
console.log(questionMarks('?3?d?dad?7??????3')); // should log true
console.log(questionMarks('7??????3')); // should log false


/**
 * @param {string} str1
 * @param {string} str2
 * consisting of lowercase characters and backspaces (#)
 * @return {boolean} whether the two strings are equivalent after taking the backspaces into consideration
 * BONUS: solve in O(n)
 */

function backspaceStringCompare(str1, str2) {
    // your code here
}

console.log(backspaceStringCompare('ab#c', 'ad#c'));
// should log true - they both become 'ac'

console.log(backspaceStringCompare('ab##', 'c#d#'));
// should log true - they both become ''

console.log(backspaceStringCompare('a##c', '#a#c'));
// should log true - they both become 'c'

// some helpful functions
parseInt('s') // returns NaN
parseInt('5') // returns 5
isNaN(NaN) // returns true
isNaN(parseInt('9')) // returns false

console.log(questionMarks('aa6?9')); // should log false
console.log(questionMarks('acc?7??sss?3rr1??????5')); // should log true
console.log(questionMarks('?3?d?dad?7??????3')); // should log true
console.log(questionMarks('7??????3')); // should log false


/**
 * @param {string} str1
 * @param {string} str2
 * consisting of lowercase characters and backspaces (#)
 * @return {boolean} whether the two strings are equivalent after taking the backspaces into consideration
 * BONUS: solve in O(n)
 */

function backspaceStringCompare(str1, str2) {
    // your code here
    let arr1 = [], arr2 = [];
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== '#') {
            arr1.push(str1[i]);
        } else {
            arr1.pop();
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] !== '#') {
            arr2.push(str1[i]);
        } else {
            arr2.pop();
        }
    }
    return arr1.join('') === arr2.join('');
}

console.log(backspaceStringCompare('ab#c', 'ad#c'));
// should log true - they both become 'ac'

console.log(backspaceStringCompare('ab##', 'c#d#'));
// should log true - they both become ''

console.log(backspaceStringCompare('a##c', '#a#c'));
  // should log true - they both become 'c'

