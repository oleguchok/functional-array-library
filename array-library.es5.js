'use strict';

function ArrayLibrary() {
    this._memo = {};
}

function checkIsItAnArray(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('Provided collection is not array');
    }
}

function checkIsCallbackIsAFunction(callback) {
    if (typeof callback !== "function") {
        throw new TypeError('Provided callback is not a function');
    }
}

ArrayLibrary.prototype.take = function() {
    if (arguments.length > 1 || this._chained === undefined) {
        var array = arguments[0];
        var n = arguments[1];
        checkIsItAnArray(array);

        if (n > 0 || n === undefined) {
            return array.slice(0, n);
        }

        return [];
    } else {
        this._chained = this.take(this._chained, arguments[0]);
        return this;
    }
}

ArrayLibrary.prototype.skip = function(array, n) {
    if (arguments.length > 1 || this._chained === undefined) {
        checkIsItAnArray(array);

        if (n > 0) {
            return array.slice(n);
        }

        return array;
    } else {
        this._chained = this.skip(this._chained, arguments[0]);
        return this;
    }
}

ArrayLibrary.prototype.map = function(array, callback) {
    if (arguments.length > 1) {
        checkIsItAnArray(array);
        checkIsCallbackIsAFunction(callback);

        var result = [];
        array.forEach(function(element) {
            result.push(callback(element));
        });

        return result;
    } else {
        this._chained = this.map(this._chained, arguments[0]);
        return this;
    }
}

ArrayLibrary.prototype.reduce = function(array, callback, initialValue) {
    if (arguments.length > 1) {
        checkIsItAnArray(array);

        if (array.length == 0 && initialValue === undefined) {
            throw new TypeError('Reduce of empty array with no initial value');
        }

        checkIsCallbackIsAFunction(callback);

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
    } else {
        this._chained = this.reduce(this._chained, arguments[0], arguments[1]);
        return this;
    }
}

ArrayLibrary.prototype.filter = function() {
    if (arguments.length > 1) {
        var array = arguments[0];
        var callback = arguments[1];

        checkIsItAnArray(array);
        checkIsCallbackIsAFunction(callback);

        var result = [];
        array.forEach(function(element) {
            if (callback(element)) {
                result.push(element);
            }
        });

        return result;
    } else {
        this._chained = this.filter(this._chained, arguments[0]);
        return this;
    }
}

ArrayLibrary.prototype.forEach = function(array, callback) {
    checkIsItAnArray(array);
    checkIsCallbackIsAFunction(callback);

    for (var index = 0; index < array.length; index++) {
        callback(array[index]);
    }
}

ArrayLibrary.prototype.sum = function(array) {
    if (array in this._memo) {
        return this._memo[array];
    } else {
        var value = this.reduce(array, function(accumulator, currentValue) {
            return accumulator + currentValue;
        });
        this._memo[array] = value;
        return value;
    }
}

ArrayLibrary.prototype.chain = function(array) {
    checkIsItAnArray(array);
    this._chained = array;
    return this;
}

ArrayLibrary.prototype.value = function() {
    return this._chained;
}

module.exports = ArrayLibrary;