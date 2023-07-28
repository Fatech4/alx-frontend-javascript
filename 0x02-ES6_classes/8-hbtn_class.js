export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter methods for size and location
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Override valueOf() method to cast to a Number
  valueOf() {
    return this._size;
  }

  // Override toString() method to cast to a String
  toString() {
    return this._location;
  }
}
