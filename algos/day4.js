/**
 * Picks a random pivot index and partitions the array's values around it.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @param {number} startIdx the starting index
 * @param {number} endIdx the end index
 * @returns {number} the final pivot index
 * 
 * Note: The array should be mutated (this is in place)
 */


/////////////DOES NOT FULLY WORK BUT THIS IS THE IDEA OF TACKLING THIS PROBLEM


function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
    let pivotIdx = Math.floor(Math.random() * arr.length);
    console.log(arr[pivotIdx]);
    const pivot = arr[pivotIdx];

    //compare left side with pivot until condition is not met
    //compart right side with pivot until condition is not met
    //swap left side with right side
    //if both left and right side points at the pivot, then return the pivot index

    while (startIdx != endIdx) {
        let temp;
        //Left side of pivot
        while (arr[startIdx] < pivot) {
            console.log('comparing ' + arr[startIdx] + ' : ' + pivot)
            startIdx++;
        }
        //Right side of pivot
        while (arr[endIdx] > pivot) {
            console.log('comparing ' + arr[endIdx] + ' : ' + pivot)
            endIdx--;
        }

        //swap values at pointers
        temp = arr[startIdx];
        console.log('swapping ' + arr[startIdx] + ' : ' + arr[endIdx]);
        arr[startIdx] = arr[endIdx];
        arr[endIdx] = temp;

    }
    return startIdx;
}

// Math.random() returns a number from 0 up to but excluding 1
// Math.floor(5.614) returns 5

const arr = [1, 2, 8, 4, 5, 6]
console.log(arrayPartition(arr)); // should log an index between 0 and 5
console.log(arr); // should be mutated and partitioned around the returned index


  // all values should be partitioned around the returned pivot index
  // for example, if your function chooses a pivot index of 3,
  // the returned pivot should be 2 (the updated pivot index)
  // the array might now be [1, 2, 4, 8, 5, 6]
  // 4 has all smaller values to its left and all greater values to its right