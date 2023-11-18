const Person = require("./Person");

const _cliID = Symbol("Client ID");
const _account = Symbol("Account")

class Employ extends Person {
  constructor(cliID, name) {
    super(name);
    this[_cliID] = cliID;
    this[_account] = null;
  }

  get clientID() {
    return this[_cliID];
  }

  


  toString(){
    return `Client ID: ${this[_cliID]}, ${super.toString()}`
  }

  
}

module.exports = Employ;
