/**
 * Sorts an array by comparing adjacent values and swapping.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the INPUT array (ie. sorts "in place")
 * BONUS: fast exit if portion already sorted
 */

function bubbleSort(arr) {
    // counter only counts when you don't swap (way of knowing if the whole array is sorted or not)
    var counter = 0;
    while (counter < arr.length) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let x = arr[i];
                let y = arr[i + 1];
                arr[i] = y;
                arr[i + 1] = x;
                counter = 0;
            } else {
                counter += 1
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]


/**
 * Sorts an array by cycling through and selecting the minimum value.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the INPUT array (ie. sorts "in place")
 */

function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

// console.log(selectionSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]

var arr = [89, 8, 6, 9, 5, 1, 2, 3, 6, 4, -5];
console.log("bubble sort: " + bubbleSort(arr));
console.log("selection sort: " + selectionSort(arr));