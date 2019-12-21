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
