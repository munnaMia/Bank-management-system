const _balance = Symbol("Balance");
const _acountStatus = Symbol("Acount Status");
const _loan = Symbol("Loan");
const _loanDetails = {};
class Account {
  constructor(balance, acoSta) {
    this[_balance] = balance;
    this[_acountStatus] = acoSta || true;
    this[_loan] = 0;
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

  get loan() {
    return this[_loan];
  }

  giveLoan(loanId, value, interest, timeYear) {
    this[_loan] = this[_loan] + value + interest * timeYear;
    _loanDetails[loanId] = {
      loanAmount: value,
      loanTime: timeYear,
      interest: interest,
    };
  }

  get loanAllData() {
    return _loanDetails;
  }

  getLoanData(loanID) {
    console.log(_loanDetails[loanID]);
  }

  updateLoanData(loanId, updateTimeYear, interest, updateAmount) {
    _loanDetails[loanId] = {
      loanAmount: updateAmount,
      loanTime: updateTimeYear,
      interest: interest,
    };
  }

  addLoanPay(loanId, amount, cutTimeYear) {
    _loanDetails[loanId] = {
      ..._loanDetails[loanId],
      loanAmount: _loanDetails[loanId] - amount,
      loanTime: _loanDetails[loanId] - cutTimeYear,
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