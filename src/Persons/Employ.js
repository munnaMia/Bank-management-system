const Person = require("./Person");

const _empId = Symbol("Employ ID");
const _department = Symbol("Department");
const _salary = Symbol("Salary");

class Employ extends Person {
  constructor(empId, name) {
    super(name);
    this[_empId] = empId;
    this[_department] = null;
    this[_salary] = 0;
  }

  get employId() {
    return this[_empId];
  }

  get department() {
    return this[_department];
  }

  set department(value) {
    this[_department] = value;
  }

  get salary() {
    return this[_salary];
  }

  set salary(value) {
    this[_salary] = value;
  }

  toString() {
    return `Employ ID:${this[_empId]}, ${super.toString()}, Department:${
      this[_department]
    }, Salary:${this[_salary]}`;
  }
}

module.exports = Employ;
