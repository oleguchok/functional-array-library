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

// take tests
// take(null)
// take(undefined)
// take(not array)
// take(arr) -- without n : return arr
// take(arr, n), where n undefined : return arr
// take(arr, n), where n null : return []
// take(arr, n), where n NaN : return []
// take(arr, n), where n < 0 : return []
// take(arr, n), where n == 0 : return []
// take(arr, n), where n > arr.length : return arr
// take(arr, n), where n < arr.length && n > 0: return first n elements of arr

let library = new ArrayLibrary();
