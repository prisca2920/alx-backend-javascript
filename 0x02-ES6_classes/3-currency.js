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
      throw new Error();
    }
    this._code = i;
  }

  get name() {
    return this._name;
  }

  set name(i) {
    if (typeof i !== 'string') {
      throw new Error();
    }
    this._name = i;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
