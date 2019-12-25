export default class ArrayLibrary {
  memo = {};

  take([first, ...rest], n = 1) {
    return n === 1 ? [first] : [first, ...this.take(rest, n - 1)];
  }

  skip([, ...rest], n = 1) {
    return n === 1 
      ? rest 
      : this.skip(rest, n - 1);
  }

  map([first, ...rest], callback) {
    return !rest.length 
      ? [callback(first)]
      : [callback(first), ...this.map(rest, callback)];
  }

  reduce([first, ...rest], callback, initialValue) {
    if (first === undefined) {
      throw new TypeError('Array is empty.');
    }

    if (!rest.length && initialValue === undefined) {
      return first;
    }

    if (!rest.length) {
      return callback(first, initialValue);
    }

    if (initialValue === undefined) {
      return this.reduce(rest, callback, first)
    } else {
      return this.reduce(rest, callback, callback(initialValue, first));
    }
  }

  filter([first, ...rest], callback) {
    if (!rest.length) {
      return callback(first)
        ? [first] 
        : [];
    }

    return callback(first) 
      ? [first, ...this.filter(rest, callback)] 
      : [...this.filter(rest, callback)];
  }

  forEach([first, ...rest], callback) {
    if (first === undefined) {
      throw new TypeError();
    }

    if (!rest.length) {
      callback(first);
      return;
    }

    callback(first);
    return this.forEach(rest, callback);
  }

  sum([...array]) {
    let [first, ...rest] = array;
    if (array in this.memo) {
      return this.memo[array];
    }

    if (!rest.length) {
      this.memo[array] = first;
      return first;
    } else {
      let sum = first + this.sum(rest);
      this.memo[array] = sum;
      return sum;
    }
  }

  chain([...array]) {
    let value = array;

    let chain = {
      value: () => value,
      take: (n) => {
        value = this.take(value, n);
        return chain;
      },
      skip: (n) => {
        value = this.skip(value, n);
        return chain;
      },
      reduce: (callback, initialValue) => {
        value = this.reduce(value, callback, initialValue);
        return chain;
      },
      map: (callback) => {
        value = this.map(value, callback);
        return chain;
      }
    }

    return chain;
  }
}

const lib = new ArrayLibrary();
let array = [1,2,3,4,5];
console.log(lib.take(array, 3));
console.log(lib.skip(array, 3));
console.log(lib.map(array, e => e * 2));
console.log(lib.reduce(array, (acc, cur) => acc + cur));
console.log(lib.reduce(array, (acc, cur) => acc + cur, 10));
console.log(lib.filter(array, e => e % 2));
console.log(lib.sum(array));
console.log(lib.memo);
console.log(lib.chain(array).take(3).skip(1).map(e => e * 2).reduce((acc, cur) => acc + cur).value());