/**
 * Returns a 2D array from a single object.
 * 
 * @param {Object} obj an object of key/value pairs
 * @returns {Array<Array<any>>} A 2D array of keys and values
 */

const input1 = {
    firstName: 'Foo',
    lastName: 'Bar',
    age: 13
};

// const someProp = 'firstName';
// obj.hasOwnProperty(someProp); // returns true

function entries(obj) {
    var container = [];

    for (const prop in obj) {
        container.push([prop, obj[prop]]);
    }
    return container;
}


console.log(entries(input1));
// should log [['firstName', 'Foo'], ['lastName', 'Bar'], ['age', 13]]

console.log(entries({ prop1: 'val 1', prop2: 'val 2' }));
// should log [['prop1', 'val 1'], ['prop2', 'val 2']]

/**
 * BONUS
 * Returns a SQL insert query statement from an object.
 * 
 * @param {string} table the table in which to insert
 * @param {Object} obj the set of keys/values for the row
 * @returns {string} the SQL insert query
 */

function insertSQL(table, obj) {
    // your code here
    let keyString = "";
    let valueString = "";

    for (const [key, value] of entries(obj)) {
        if (keyString == "") {
            keyString = key;
        } else {
            keyString += `, ${key}`;
        }
        if (valueString == "") {
            if (!isNaN(+value)) {
                valueString += `${value}`;
            } else {
                valueString += `"${value}" `
            }
        } else {
            if (!isNaN(+value)) {
                valueString += `, ${value}`;
            } else {
                valueString += `, "${value}" `
            }
        }
    }

    return `insert into ${table}(${keyString}) value (${valueString})`

};
  // should log 'insert into users(firstName, lastName, age) values("Bob", "Smith", 30)'