/**
 * Creates an intersection (elements in both) of two sorted arrays.
 * 
 * @param {number[]} arr1 a sorted array of numbers
 * @param {number[]} arr2 a sorted array of numbers
 * @returns {number[]} a NEW SORTED array of the shared elements
 */

function intersectSortedArrays(arr1, arr2) {
    let newarr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                newarr.push(arr1[i])
                // ends for nested for loop
                break;
            }
        }
    }
    return newarr;
}

// 2 for loops
// 1st for loop goes thru arr 1 
// within the 1st for loop we go thru arr 2
// check if 1st for loop index matches 2nd for loop index 
// (example arr1[i] is equal to arr2[j])
// if match, then push into new arr and end forloop 
// return new arr 

/**
 * BONUS: ensure that each element in the returned array is unique
 * 
 * @param {number[]} arr1 a sorted array of numbers
 * @param {number[]} arr2 a sorted array of numbers
 * @returns {number[]} a NEW SORTED array of the shared elements
 */

function intersectSortedArraysDedupe(arr1, arr2) {
    let newarr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            // if newest # in newArr does not match, push
            if (arr1[i] == arr2[j] && newarr[newarr.length - 1] != arr1[i]) {
                newarr.push(arr1[i])
                break;
            }
        }
    }
    return newarr;
}

console.log(intersectSortedArraysDedupe([1, 2, 2, 3], [2, 2, 4]));
  // should log [2]
