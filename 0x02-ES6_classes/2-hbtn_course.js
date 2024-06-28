export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(i) {
    if (typeof i !== 'string') { throw new TypeError('Name must be a string'); }
    this._name = i;
  }

  get length() {
    return this._length;
  }

  set length(j) {
    if (typeof j !== 'number') { throw new TypeError('Length must be a number'); }
    this._length = j;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!Array.isArray(val)) { throw new TypeError('Students must be an array'); }
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < val.length; i++) {
      if (typeof val[i] !== 'string') { throw new TypeError('Students must be an array of strings'); }
    }
    this._students = val;
  }
}
