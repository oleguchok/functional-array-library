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

    if (typeof callback === "function") {
        var result = [];
        array.forEach(element => {
            result.push(callback(element));
        });

        return result;
    }

    return array;
}

module.exports = ArrayLibrary;
var lib = new ArrayLibrary();
lib.map([1,2], function(a){return a;});