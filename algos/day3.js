/**
 * Creates a new sorted array from two sorted arrays.
 * 
 * @param {number[]} arr1 a sorted array of numbers
 * @param {number[]} arr2 a sorted array of numbers
 * @returns {number[]} a sorted array with all elements from both input arrays
 */

/////////////// This works for the first 2 arrays ////////////////
// function combineSortedArrays(arr1, arr2) {
//     var new_arr = [];
//     var low_num = arr1[0];
//     // finds shortest arr
//     if (arr1.length < arr2.length) {
//         var arrLength = arr1.length;
//     } else {
//         var arrLength = arr2.length;
//     }
//     // finds lowest num
//     if (arr1[0] > arr2[0]) {
//         for (let i = 0; i < arrLength; i++) {
//             let x = arr2[i];
//             let y = arr1[i];
//             new_arr.push(x);
//             new_arr.push(y);
//         }
//     } else {
//         for (let i = 0; i < arrLength; i++) {
//             let x = arr1[i];
//             let y = arr2[i];
//             new_arr.push(x);
//             new_arr.push(y);
//         }
//     }
//     return new_arr;
// }

// console.log(combineSortedArrays([1, 3, 5], [2, 4, 6]));

function combineSortedArrays(arr1, arr2) {
    var new_arr = [];
    var low_num = arr1[0];
    // finds shortest arr
    if (arr1.length < arr2.length) {
        var arrLength = arr1.length;
    } else {
        var arrLength = arr2.length;
    }
    // finds lowest num
    if (arr1 == 0) {
        for (let i = 0; i < arrLength; i++) {
            new_arr.push(arr2[i])
        }
    } else if (arr2 == 0) {
        for (let i = 0; i < arrLength; i++) {
            new_arr.push(arr1[i])
        }
    } else if (arr1[0] > arr2[0]) {
        for (let i = 0; i < arrLength; i++) {
            let x = arr2[i];
            let y = arr1[i];
            new_arr.push(x);
            new_arr.push(y);
        }
    } else if (arr1[0] < arr2[0]) {
        for (let i = 0; i < arrLength; i++) {
            let x = arr1[i];
            let y = arr2[i];
            new_arr.push(x);
            new_arr.push(y);
        }
    }
    return new_arr;
}

// console.log(combineSortedArrays([1, 3, 5], [2, 4, 6]));
// should log [1, 2, 3, 4, 5, 6]
// console.log(combineSortedArrays([1], [3])); // should log [1, 3]
console.log(combineSortedArrays([1], [])); // should log [1]

///////////////////// THIS WORKS FOR EVERYTHING THAT ADRIENNE DID //////////////////////
// /**
//  * Creates a new sorted array from two sorted arrays.
//  * 
//  * @param {number[]} arr1 a sorted array of numbers
//  * @param {number[]} arr2 a sorted array of numbers
//  * @returns {number[]} a sorted array with all elements from both input arrays
//  */

// function combineSortedArrays(arr1, arr2) {
//     // your code here
//     let returnArray = [];
//     let i1 = 0;
//     let i2 = 0;
//     while(i1 < arr1.length && i2 < arr2.length) {
//         if(arr1[i1] < arr2[i2]) {
//             returnArray.push(arr1[i1]);
//             i1++;
//         } else {
//             returnArray.push(arr2[i2]);
//             i2++;
//         }
//     }
//     while(i1 < arr1.length) {
//         returnArray.push(arr1[i1]);
//         i1++;
//     }
//     while(i2 < arr2.length) {
//         returnArray.push(arr2[i2]);
//         i2++;
//     }

//     return returnArray;
// }




/**
 * Sorts an array with a "divide and conquer" approach.
 * Uses combineSortedArrays internally.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the new sorted array
 */

function mergeSort(arr) {
    // your code here
}

[1, 2, 3, 4, 5].slice(); // returns [1, 2, 3, 4, 5]
[1, 2, 3, 4, 5].slice(2); // returns [3, 4, 5]
[1, 2, 3, 4, 5].slice(2, 4); // returns [3, 4]

// console.log(mergeSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]