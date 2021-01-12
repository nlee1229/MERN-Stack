/**
 * takes in an UNSORTED array
 * returns the SAME array sorted
 * working in place, use yesterday's arrayPartition internally
 * and call the function recursively as needed
 */
function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
    // your code here
    let pivotIndex = Math.ceil(Math.random() * (endIdx - startIdx) + startIdx);
    //Math.floor(Math.random() * (1 + High - Low)) + Low
    let pivot = arr[pivotIndex];
    //[1, 5, 8, 4, 2, 6]
    //[]
    while (startIdx < endIdx) {
        while (arr[startIdx] < pivot) {
            startIdx++;
        }
        while (arr[endIdx] > pivot) {
            endIdx--;
        }
        if (startIdx < endIdx) {
            let temp = arr[startIdx];
            arr[startIdx] = arr[endIdx];
            arr[endIdx] = temp;
        }
    }
    return startIdx;

}

const arr = [1, 5, 8, 4, 2, 6]
console.log("Pivot Value: " + arrayPartition(arr));
console.log(arr);



function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
    let pivotIdx = Math.floor(Math.random() * arr.length);
    console.log(arr[pivotIdx]);
    const pivot = arr[pivotIdx];

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


console.log(quickSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]


