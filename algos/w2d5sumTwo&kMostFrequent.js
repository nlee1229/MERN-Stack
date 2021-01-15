/**
 * Finds the indices of the values that add up to the sum.
 * 
 * @param {number[]} arr an array of integers
 * @returns {number[]} the TWO INDICES of the elements that add up to the sum
 * Assume there is only one solution.
 * Numbers can only be used once.
 */

function sumTwo(arr, sum) {
    // your code here
    let returnArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === sum) {
                returnArr.push(i, j);
                return returnArr; //e also breaking here
            }
        }
    }
    // return returnArr;
}
//                  0  1  2   3
console.log(sumTwo([2, 7, 11, 15], 9)); // should log [0, 1]
console.log(sumTwo([2, 7, 11, 15], 22)); // should log [1, 3]


/**
 * Finds the most frequent values in an array.
 * 
 * @param {number[]} arr an array of ingegers
 * @param {number} k the number of frequents to find
 * @returns {number[]} the "k" most frequent values in the input array
 * the input array WON'T NECESSARILY BE IN ORDER
 * the output array NEED NOT BE ORDERED
 * you can assume there's always a valid answer
 */

function kMostFrequent(arr, k) {
    var countObj = {}
    for (i = 0; i < arr.length; i++) {
        countObj[arr[i]] = countObj[arr[i]] ? countObj[arr[i]] + 1 : 1
    }
    var countArr = Object.entries(countObj).sort((a, b) => a[1] - b[1])
    console.log(countArr)
    var retArr = []
    for (i = 0; i < k; i++) {
        retArr.push(+(countArr[countArr.length - 1 - i][0]))
    }
    return retArr
}

console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2));
// should log [1, 2] or [2, 1]

console.log(kMostFrequent([0, 0, 0, 2, 2, 3], 1));
// should log [0]

console.log(kMostFrequent([1, 3, 2, 2, 1, 3], 3));
  // should log [1, 2, 3] in any order