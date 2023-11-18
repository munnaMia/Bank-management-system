const _name = Symbol("Name");
const _contact = Symbol("Contact");
const _blood = Symbol("blood");

class Person {
  constructor(name) {
    this[_name] = name;
    this[_blood] = "";
    this[_contact] = null;
  }

  get name() {
    return this[_name];
  }

  set name(value) {
    this[_name] = value;
  }

  get blood() {
    return this[_blood];
  }

  set blood(value) {
    this[_blood] = value;
  }

  get contact() {
    return this[_contact];
  }

  set contact(value) {
    this[_contact] = value;
  }

  toString() {
    return `Name: ${this[_name]}, Blood: ${this[_blood]}`;
  }
}

module.exports = Person;
