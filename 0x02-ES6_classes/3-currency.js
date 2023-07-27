export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(setname) {
    this._name = setname;
  }

  get code() {
    return this._code;
  }

  set code(setcode) {
    this._code = setcode;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
