export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error();
    }
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(i) {
    this._name = i;
  }

  get code() {
    return this._code;
  }

  set code(i) {
    this._code = i;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
