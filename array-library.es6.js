export default class ArrayLibrary {
    _chained;

    take(...args) {
        if (args.length > 1 || this._chained === undefined) {
            var array = args[0];
            var n = args[1];
            checkIsItAnArray(array);

            if (n > 0 || n === undefined) {
                return array.slice(0, n);
            }

            return [];
        } else {
            this._chained = this.take(this._chained, args[0]);
            return this;
        }
    }

    _checkIsItAnArray(array) {
        if (!Array.isArray(array)) {
            throw new TypeError('Provided collection is not array');
        }
    }
}
