const Person = require("./Person");

const _cliID = Symbol("Client ID");
const _acountStatus = Symbol("Acount Status");
const _balance = Symbol("Balance");

class Employ extends Person {
  constructor(cliID, name) {
    super(name);
    this[_cliID] = cliID;
    this[_acountStatus] = true;
    this[_balance] = 0;
  }

  get clientID() {
    return this[_cliID];
  }

  get accountStatus() {
    return this[_acountStatus];
  }

  set accountStatus(value) {
    if(value){
        this[_acountStatus] = value;
    }else{
        console.log("Enter true or false please")
    }
  }

  get balance() {
    return this[_balance];
  }

  set updasteBalance(value) {
    this[_balance] = value;
  }

  set addBalance(value){
    this[_balance] = this[_balance]+value;
  }

  toString(){
    return `Client ID: ${this[_cliID]}, ${super.toString()}, Balance: ${this[_balance]}, Account Status: ${this[_acountStatus]}`
  }

  
}

module.exports = Employ;
