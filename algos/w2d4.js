/**
 * Creates an array of objects of non-consecutive numbers in the input array.
 * 
 * @param {number[]} arr an array of integers
 * @returns {Object[]} an array of OBJECTS with the index and value 
 * Note: the array should have ONLY non-consecutive values
 * The first element of the array is NEVER considered non-consecutive
 */

function allNonConsecutive(arr) {
    // your code here
    let p1 = 0;
    let p2 = 1;
    newArr = [];

    while (p1 < arr.length && p2 < arr.length) {
        if (arr[p2] !== arr[p1] + 1) {
            newArr.push("{i:" + p2 + "," + "n:" + arr[p2] + "}");
            p1++;
            p2++;
        } else {
            p1++;
            p2++;
        }
    }
    return newArr;
}

console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
// should log [{i: 4, n: 6}, {i: 7, n: 10}] 6 and 10 are the only non-consecutives

console.log(allNonConsecutive([2, 3, 4, 7, 8, 12]));
// should log [{i: 3, n: 7}, {i: 5, n: 12}] 7 and 12 are the only non-consecutives


// ------ ANOTHER WAY TO SOLVE ------- //

function allNonConsecutive(arr) {
    let retArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        // if (arr[i] === arr[i+1]) {
        //   continue
        // }
        if (arr[i] + 1 !== arr[i + 1]) {
            retArr.push({ i: i + 1, n: arr[i + 1] })
        }
    }

    return retArr;
}

console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
// should log [{i: 4, n: 6}, {i: 7, n: 10}] 6 and 10 are the only non-consecutives

console.log(allNonConsecutive([2, 3, 4, 7, 8, 12]));
// should log [{i: 3, n: 7}, {i: 5, n: 12}] 7 and 12 are the only non-consecutives


/**
 * Create an array of all consecutive values which add up to a given sum.
 * 
 * @param {number[]} arr an UNORDERED array of integers
 * @returns {Array<Array<number>>} a 2D array of numbers, with each inner array making up the sum
 * BONUS: what if there are zeros in the input array?
 */

function findConsecutiveSums(arr, sum) {
    // your code here
    sumArray = [];
    pointer = 0;
    sum = 0;
    while (pointer < arr.length) {
        for (i = pointer; i < arr.length; i++) {
            sum += arr[i];
            console.log(sum);
            if (sum == int) {
                newArray = arr.slice(pointer, i + 1);
                sumArray.push(newArray);
            } else if (sum > int) {
                break;
            }
        }
        sum = 0;
        pointer++
    }
    return sumArray;
}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 23, 12], 16));
// should log [
//   [2, 5, 3, 6],
//   [3, 6, 7]
// ]

// ------ANOTHER WAY TO SOLVE ------- //

function findConsecutiveSums(arr, sum) {
    let idx = 0, newArr = [], temparr = [], temp = 0;
    while (idx < arr.length) {
        for (let i = idx; i < arr.length; i++) {
            temp += arr[i];
            // create temparr
            temparr.push(arr[i]);
            if (temp === sum) {
                let zeroidx = i;
                while (zeroidx < arr.length - 1) {
                    if (arr[zeroidx + 1] === 0) {
                        temparr.push(arr[zeroidx + 1]);
                    }
                    zeroidx += 1;
                }
                newArr.push(temparr);
                idx += 1;
                temparr = [];
                temp = 0;
                break;
            } else if (temp > sum) {
                temparr = [];
                temp = 0;
                idx += 1;
                break;
            }
        }
        idx += 1;
    }
    return newArr;
}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 23, 12], 16));
  // should log [
  //   [2, 5, 3, 6],
  //   [3, 6, 7]
  // ]