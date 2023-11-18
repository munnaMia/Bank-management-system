const _location = Symbol("Location");
const _city = Symbol("City");
const _country = Symbol("Country");

class Address {
  constructor(location, city, country) {
    this[_location] = location || "";
    this[_city] = city || "";
    this[_country] = country || '';
  }

  get location() {
    return this[_location];
  }

  set location(value) {
    this[_location] = value;
  }

  get city() {
    return this[_city];
  }

  set city(value) {
    this[_city] = value;
  }

  get country() {
    return this[_country];
  }

  set country(value) {
    this[_country] = value;
  }

  toString(){
    return `Location: ${this[_location]}, City:${this[_city]}, Country:${this[_country]}`
  }
}

module.exports = Address