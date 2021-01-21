/**
 * Finds a specified value in an object (if it exists).
 * 
 * @param {Object} obj a (potentially) nested object
 * @param {string[]} keysPath the path to get to the desired value
 * @returns {any} the retrieved value or null if it doesn't exist
 */

function simpleLens(obj, keysPath) {
    var tempObj = obj;
    for (i = 0; i < arr.length; i++) {
        if (tempObj.hasOwnProperty(arr[i])) {
            tempObj = tempObj[key];
        } else {
            return null;
        }
    }
    return tempObj;
}

console.log(simpleLens({ hello: 'world' }, ['hello']));
// should log 'world'

console.log(simpleLens({ hello: 'world' }, ['hello', 'world']));
// should log null

const nested = {
    address: {
        street: '1234 First Street',
        city: 'Burbank',
        // country: {
        //   code: 'US'
        // }
    }
}

console.log(simpleLens(nested, ['address', 'street']));
// should log '1234 First Street'

console.log(simpleLens(nested, ['address', 'country', 'code']));
// should log null


/**
 * Gets the maximum number of servings of a dish for a specific recipe.
 * 
 * @param {Object} recipe the ingredients and quantities needed for 1 serving
 * @param {Object} available the available ingredients and quantities
 * @returns {number} the maximum number of servings that can be made
 */

function getMaxServings(recipe, available) {
    // your code here
    let maxServings = Number.MAX_VALUE;
    for (ingredient in recipe) {
        if (available[ingredient] !== undefined && available[ingredient] >= recipe[ingredient]) {
            if (available[ingredient] / recipe[ingredient] < maxServings) {
                maxServings = available[ingredient] / recipe[ingredient];
            }
        } else {
            return 0;
        }
    }
    return maxServings;
}

const recipe = {
    'organic fat': 99,
    'live squid': 1,
    'birds nest': 1,
    'fried flesh': 1,
    spicy: 5,
    'gourmet memes': 4200
};

const available = {
    'organic fat': 990,
    'live squid': 0,
    'birds nest': 10,
    'fried flesh': 10,
    spicy: 50,
    'gourmet memes': 42000,
    sugar: 9001,
    spice: 5,
    'everything nice': 1
};

console.log(getMaxServings(recipe, available)); // should log 0

available['live squid'] = 10;

console.log(getMaxServings(recipe, available)); // should log 10


/**
 * BONUS
 * @param {string[]} ailments the ailments a person has
 * @param {Object[]} medications the available medications
 * @returns {string[]} the names of the medications that can treat the greatest number of symptoms
 */

function getMeds(ailments, medications) {
    // your code here
}

const medications = [
    {
        name: 'Sulforaphane',
        treatableSymptoms: [
            'dementia',
            `alzheimer's`,
            'cancer',
            'inflammation',
            'neuropathy',
        ],
    },
    {
        name: 'Longvida Curcumin',
        treatableSymptoms: [
            'pain',
            'inflammation',
            'depression',
            'arthritis',
            'anxiety',
        ],
    },
    {
        name: 'Hericium erinaceus',
        treatableSymptoms: ['anxiety', 'cognitive decline', 'depression'],
    },
    {
        name: 'Nicotinamide mononucleotide',
        treatableSymptoms: [
            'ageing',
            'low NAD',
            'obesity',
            'mitochondrial myopathy',
            'diabetes',
        ],
    },
    {
        name: 'PainAssassinator',
        treatableSymptoms: [
            'pain',
            'inflammation',
            'cramps',
            'headache',
            'toothache',
            'back pain',
            'fever',
        ],
    },
];

console.log(getMeds(['pain'], medications));
// should log ['PainAssassinator', 'Longvida Curcumin']

console.log(getMeds(['pain', 'inflammation', 'depression'], medications));
// should log ['Longvida Curcumin']

console.log(getMeds(['existential dread'], medications));
  // should log []