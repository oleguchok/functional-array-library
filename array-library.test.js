var ArrayLibrary = require('./index');

/* take */
test('array parameter is null', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.take(null);
    }).toThrow(TypeError);
});

test('array parameter is undefined', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.take(undefined);
    }).toThrow(TypeError);
});

test('array parameter is not array', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.take({});
    }).toThrow(TypeError);

    expect(function() {
        return lib.take('string');
    }).toThrow(TypeError);

    expect(function() {
        return lib.take(666);
    }).toThrow(TypeError);
});

test('should return array if n parameter is not provided', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.take(array)).toEqual(array);
});

test('should return an empty array if n parameter is null', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.take(array, null)).toEqual([]);
});

test('should return an empty array if n parameter is NaN', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.take(array, NaN)).toEqual([]);
});

test('should return an empty array if n parameter is lower than 0', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.take(array, -999)).toEqual([]);
});

test('should return an empty array if n parameter is 0', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.take(array, 0)).toEqual([]);
});

test('should return an array if n parameter is greater than array length', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.take(array, array.length + 10)).toEqual(array);
});

test('should return new array with first n elements', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.take(array, 2)).toEqual([1,2]);
});

/* skip tests */
test('skip should throw TypeError if array parameter is null', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.skip(null);
    }).toThrow(TypeError);
});

test('skip should throw TypeError if array parameter is undefined', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.skip(undefined);
    }).toThrow(TypeError);
});

test('skip should throw TypeError if array parameter is not array', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.skip({});
    }).toThrow(TypeError);

    expect(function() {
        return lib.skip('string');
    }).toThrow(TypeError);

    expect(function() {
        return lib.skip(666);
    }).toThrow(TypeError);
});

test('skip should return an array if n parameter is not provided', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.skip(array)).toEqual(array);
});

test('skip should return an array if n parameter is null', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.skip(array, null)).toEqual(array);
});

test('skip should return an array if n parameter is NaN', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.skip(array, NaN)).toEqual(array);
});

test('skip should return an array if n parameter is lower than 0', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.skip(array, -666)).toEqual(array);
});

test('skip should return an array if n parameter is 0', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.skip(array, 0)).toEqual(array);
});

test('skip should return an empty array if n parameter is greater than array length', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.skip(array, array.length + 10)).toEqual([]);
});

test('skip should return new array without skipped first n elements', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(lib.skip(array, 2)).toEqual([3]);
});

/* map tests */
test('map should throw TypeError if array parameter is null', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.map(null);
    }).toThrow(TypeError);
});

test('map should throw TypeError if array parameter is undefined', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.map(undefined);
    }).toThrow(TypeError);
});

test('map should throw TypeError if array parameter is not array', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.map({});
    }).toThrow(TypeError);

    expect(function() {
        return lib.map('string');
    }).toThrow(TypeError);

    expect(function() {
        return lib.map(666);
    }).toThrow(TypeError);
});

test('map should throw TypeError if callback parameter is not a function', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(function() {return lib.map(array);}).toThrow(TypeError);
    expect(function() {return lib.map(array, null);}).toThrow(TypeError);
    expect(function() {return lib.map(array, 666);}).toThrow(TypeError);
    expect(function() {return lib.map(array, 'string');}).toThrow(TypeError);
});

test('map should return new array with applied callback function to each element', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    var result = lib.map(array, function(element) {
        return element * 2;
    });
    expect(result).toEqual([2,4,6]);
});

/* reduce tests */
test('reduce should throw TypeError if array parameter is null', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.reduce(null);
    }).toThrow(TypeError);
});

test('reduce should throw TypeError if array parameter is undefined', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.reduce(undefined);
    }).toThrow(TypeError);
});

test('reduce should throw TypeError if array parameter is not array', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.reduce({});
    }).toThrow(TypeError);

    expect(function() {
        return lib.reduce('string');
    }).toThrow(TypeError);

    expect(function() {
        return lib.reduce(666);
    }).toThrow(TypeError);
});

test('reduce should throw TypeError if callback parameter is not a function', function() {
    var lib = new ArrayLibrary();
    var array = [1,2,3];
    expect(function() {
        return lib.reduce(array);
    }).toThrow(TypeError);
    expect(function() {return lib.reduce(array, null);}).toThrow(TypeError);
    expect(function() {return lib.reduce(array, 666);}).toThrow(TypeError);
    expect(function() {return lib.reduce(array, 'string');}).toThrow(TypeError);
});

test('reduce should throw TypeError if provided array is empty', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.reduce([], function(accumulator, currentValue) { return currentValue; });
    }).toThrow(TypeError);
});

test('reduce should return first element in array if there is only one element in array', function() {
    var lib = new ArrayLibrary();
    expect(lib.reduce([10], function(){})).toBe(10);
});

test('reduce should return value, reduced by callback', function() {
    var lib = new ArrayLibrary();
    expect(lib.reduce([1,2,3], function(accumulator, currentValue){
        return accumulator + currentValue;
    })).toBe(6);
});

test('reduce should return value, reduced by callback, starting from initial value', function() {
    var lib = new ArrayLibrary();
    expect(
        lib.reduce([1,2,3], 
        function(accumulator, currentValue){
            return accumulator + currentValue;
        },
        4)
    ).toBe(10);
});

test('reduce should return value, reduced by callback, starting from initial value, if there is only one element in array', function() {
    var lib = new ArrayLibrary();
    expect(
        lib.reduce([1], 
        function(accumulator, currentValue){
            return accumulator + currentValue;
        },
        4)
    ).toBe(5);
});
