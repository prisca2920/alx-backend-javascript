export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(i) {
    if (typeof i !== 'string') {
      throw new TypeError('code must be a string');
      this._code = i;
    }
  }

  get name() {
    return this._name;
  }

  set name(i) {
    if (typeof i !== 'string') {
      throw new TypeError('name must be a string');
      this._name = i;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
