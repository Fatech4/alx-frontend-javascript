export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(setName) {
    this._name = setName;
  }

  get code() {
    return this._code;
  }

  set code(setcode) {
    this._code = setcode;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
