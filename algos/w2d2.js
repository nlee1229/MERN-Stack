/**
 * Creates a union (elements in either) from two sorted arrays.
 * 
 * @param {number[]} arr1 a SORTED array of numbers
 * @param {number[]} arr2 a SORTED array of numbers
 * @returns {number[]} a NEW SORTED array with elements from either
 */

function unionSortedArrays(arr1, arr2) {
    // ---------- ONE WAY TO DO IT ---------- //
    let newArr = [];
    let freqTable = {};
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        count++;
        if (arr1[i] === arr1[i + 1]) {
            continue;
        }
        freqTable[arr1[i]] = count;
        count = 0;
    }
    for (let j = 0; j < arr2.length; j++) {
        count++;
        if (arr2[j] === arr2[j + 1]) {
            continue;
        }
        if (freqTable.hasOwnProperty(arr2[j]) && freqTable[arr2[j]] < count) {
            freqTable[arr2[j]] = count;
        }
        else if (!freqTable.hasOwnProperty(arr2[j])) {
            freqTable[arr2[j]] = count;
        }
        count = 0;
    }
    for (let key in freqTable) {
        let number = parseInt(key);
        for (let k = 0; k < freqTable[key]; k++) {
            newArr.push(number);
        }
    }
    return newArr;
}

console.log(unionSortedArrays([1, 2, 2], [2, 3, 3]));
// should log [1, 2, 2, 3, 3]
console.log(unionSortedArrays([1, 2], [3, 4]));
// should log [1, 2, 3, 4]


// -------- SECOND WAY TO DO IT -------- //

function unionSortedArrays(arr1, arr2) {
    // Allow a newarr to be returned
    let newArr = [];
    // Used for index marker
    let i = 0;
    let j = 0;

    // While i or j is less than the length value of array run a loop
    while (i < arr1.length && j < arr2.length) {

        // If the arr1 idx(i) matches arr2 idx(j) then push into newArr and increase i and j by 1
        if (arr1[i] == arr2[j]) {
            newArr.push(arr1[i]);
            i++;
            j++;
            // If arr1 idx is smaller than arr2 idx then push to newArr and increase i by 1
        } else if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
            // Vice versa 
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }

    // Undefined condition checks incase one arr run out of length
    while (i < arr1.length) {
        newArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        newArr.push(arr2[j])
        j++
    }

    return newArr;
}

console.log(unionSortedArrays([1, 2, 2, 2], [2, 3, 3]));
// should log [1, 2, 2, 3, 3]

console.log(unionSortedArrays([1, 2], [3, 4]));
// should log [1, 2, 3, 4]



/**
 * Calculates the absolute difference between the sum of two diagonals.
 * 
 * @param {Array<Array<number>>} twoDArray a 2-dimensional array of numbers
 * Note that the outer and inner arrays will all be equal in length.
 */

function diagonalDifference(twoDArray) {
    var sum1 = 0;
    var sum2 = 0;
    var final = 0;
    for (var i = 0; i < arr.length; i++) {
        sum1 += arr[i][arr.length - i - 1];
    }
    for (i = 0; i < arr.length; i++) {
        sum2 += arr[i][i];
        console.log('sum2 is', sum2);
    }
    final = sum1 - sum2;
    return Math.abs(final);
}

Math.abs(5 - 10); // returns 5

console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
  // should log 0: (1 + 5 + 9) - (3 + 5 + 7)