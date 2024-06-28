export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') {
      throw new Error();
    }
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(i) {
    this._size = i;
  }

  get location() {
    return this._location;
  }

  set location(i) {
    this._location = i;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
