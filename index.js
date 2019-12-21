'use strict';

function ArrayLibrary() {}

function checkIsItAnArray(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('Provided collection is not array');
    }
}

ArrayLibrary.prototype.take = function(array, n) {
    checkIsItAnArray(array);

    if (n > 0 || n === undefined) {
        return array.slice(0, n);
    }

    return [];
}

ArrayLibrary.prototype.skip = function(array, n) {
    checkIsItAnArray(array);
}

// skip tests:
// skip(null)
// skip(undefined)
// skip(not array)
// skip(arr) : return arr
// skip(arr, n), where n undefined : return arr
// skip(arr, n), where n null : return arr
// skip(arr, n), where n NaN : return arr
// skip(arr, n), where n < 0 : return arr
// skip(arr, n), where n == 0 : return arr
// skip(arr, n), where n > arr.length : return []
// skip(arr, n), where n < arr.length && n > 0: skip first n elements of arr and return left arr elements

module.exports = ArrayLibrary;
