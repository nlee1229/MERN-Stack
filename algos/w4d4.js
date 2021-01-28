/**
 * @param {string} honorific
 * @param {string[]} fullNames
 * @returns {string[]} names with honorific applied
 * BONUS: use functional programming
 */
function addHonorificToFormattedNames(honorific, fullNames) {
    // add your code here
    return fullNames.map(name => {
        let [lastName, firstName] = name.split(", ");
        return `${honorific} ${firstName} ${lastName}`;
    });
}

console.log(addHonorificToFormattedNames('Mr.', ['Smith, Bob', 'Jones, Mike']));
// should log ['Mr. Bob Smith', 'Mr. Mike Jones']

console.log(addHonorificToFormattedNames('Mrs.', ['HorseDoctor, Beth']));
// should log ['Mrs. Beth HorseDoctor']


/**
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 > v2; 0 if they're equal; -1 if v1 < v2
 */

function compareVersions(v1, v2) {
    // your code here
    v1Arr = v1.split('.').map(val => parseInt(val));
    v2Arr = v2.split('.').map(val => parseInt(val));

    let i = 0;
    while (i < v1Arr.length && i < v2Arr.length) {
        if (v1Arr[i] < v2Arr[i]) return -1;
        if (v1Arr[i] > v2Arr[i]) return 1;
        i++;
    }
    if (i < v1Arr.length) {
        if (v1Arr[i] > 0) return 1;
    } else {
        if (v2Arr[i] > 0) return -1;
    }
    return 0;
}

console.log(compareVersions('0.1', '1.0')); // should log -1 (if 0.1 on left is < right 1.0, log -1)
console.log(compareVersions('1.0.1', '1.0')); // should log 1 (if left is > right, log 1)
console.log(compareVersions('2.0', '2.0.0')); // should log 0 (if left & right are same, log 0)