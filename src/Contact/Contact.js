const _phone = Symbol("Phone no");
const _email = Symbol("Email");
const _address = Symbol("Address");

class Contact {
  constructor(phone, email) {
    this[_phone] = phone || "";
    this[_email] = email || "";
    this[_address] = null;
  }

  get phone() {
    return this[_phone];
  }

  set phone(value) {
    this[_phone] = value;
  }

  get email() {
    return this[_email];
  }

  set email(value) {
    this[_email] = value;
  }

  get address() {
    return this[_address];
  }

  set address(value) {
    this[_address] = value;
  }

  toString() {
    return `Phone no:${this[_phone]}, Email:${this[_email]}, Address:${this[_address]}`;
  }
}

module.exports = Contact;
