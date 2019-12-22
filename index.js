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

    if (n > 0) {
        return array.slice(n);
    }

    return array;
}

ArrayLibrary.prototype.map = function(array, callback) {
    checkIsItAnArray(array);

    if (typeof callback !== "function") {
        throw new TypeError('Provided callback is not a function');
    }

    var result = [];
    array.forEach(function(element) {
        result.push(callback(element));
    });

    return result;
}

ArrayLibrary.prototype.reduce = function(array, callback, initialValue) {
    checkIsItAnArray(array);

    if (array.length == 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    if (typeof callback !== "function") {
        throw new TypeError('Provided callback is not a function');
    }

    if (initialValue === undefined) {
        var accumulator = array[0];
        array.slice(1).forEach(function(element) {
            accumulator = callback(accumulator, element);
        });
    } else {
        var accumulator = initialValue;
        array.forEach(function(element) {
            accumulator = callback(accumulator, element);
        });
    }

    return accumulator;
}

module.exports = ArrayLibrary;