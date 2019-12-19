const ArrayLibrary = require('./index');

/* take */
test('array is null', function() {
    var lib = new ArrayLibrary();
    expect(function() {
        return lib.take(null);
    }).toThrow(TypeError);
})
