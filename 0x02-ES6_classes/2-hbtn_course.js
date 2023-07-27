export default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the types of attributes during object creation
    if (
      typeof name !== 'string'
      || typeof length !== 'number'
      || !Array.isArray(students)
    ) {
      throw new TypeError('Invalid attribute type');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and Setter for 'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Invalid type. Name must be a string.');
    }
    this._name = newName;
  }

  // Getter and Setter for 'length'
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Invalid type. Length must be a number.');
    }
    this._length = newLength;
  }

  // Getter and Setter for 'students'
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Invalid type. Students must be an array.');
    }
    this._students = newStudents;
  }
}
