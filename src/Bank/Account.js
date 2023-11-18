const _balance = Symbol("Balance");
const _acountStatus = Symbol("Acount Status");
const _loan = Symbol("Loan");
const _loanDetails = Symbol("Loan Data");

class Account {
  constructor(balance, acoSta) {
    this[_balance] = balance;
    this[_acountStatus] = acoSta || true;
    this[_loan] = 0;
    this[_loanDetails] = {}
  }

  get balance() {
    return this[_balance];
  }

  set updasteBalance(value) {
    this[_balance] = value;
  }

  set addBalance(value) {
    this[_balance] = this[_balance] + value;
  }

  set cutBalance(value) {
    this[_balance] = this[_balance] - value;
  }

  get loan() {
    return this[_loan];
  }

  giveLoan(loanId, value, interest, timeYear) {
    this[_loan] = this[_loan] + value + interest * timeYear;
    this[_loanDetails][loanId] = {
      loanAmount: value,
      loanTime: timeYear,
      interest: interest,
    };
  }

  get loanAllData() {
    return this[_loanDetails];
  }

  updateLoanData(loanId, updateTimeYear, interest, updateAmount) {
    this[_loanDetails][loanId] = {
      loanAmount: updateAmount,
      loanTime: updateTimeYear,
      interest: interest,
    };
  }

  addLoanPay(loanId, amount, cutTimeYear) {
    this[_loanDetails][loanId] = {
      ...this[_loanDetails][loanId],
      loanAmount: this[_loanDetails][loanId] - amount,
      loanTime: this[_loanDetails][loanId] - cutTimeYear,
    };
  }

  get accountStatus() {
    return this[_acountStatus];
  }

  set accountStatus(value) {
    if (value) {
      this[_acountStatus] = value;
    } else {
      console.log("Enter true or false please");
    }
  }


  toString(){
    return `Account Status: ${this[_acountStatus]}, Balance: ${this[_balance]}, Loan: ${this[_loan]}, Loan Details: ${this[_loanDetails]}`
  }
}


module.exports = Account