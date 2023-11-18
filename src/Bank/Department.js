const _departName = Symbol("Department Name");
const _depId = Symbol("Department ID");
const _empList = Symbol("Employ list");

class Department {
  constructor(departName, depID) {
    this[_departName] = departName;
    this[_depId] = depID;
    this[_empList] = {};
  }

  get departmentID() {
    return this[_depId];
  }

  get departmentName() {
    return this[_departName];
  }

  set departmentName(value) {
    this[_departName] = value;
  }

  get employList(){
    return this[_empList]
  }

  addEmp(empID,name, salary, position){
    this[_empList][empID] = {
        name : name,
        salary : salary,
        position: position
    }
  }

  updateEmpData(empID, name, salary, position){
    this[_empList][empID] = {
        name : name || this[_empList][empID].name,
        salary : salary || this[_empList][empID].salary,
        position: position || this[_empList][empID].position
    }
  }

  removeEmploy(empID){
    delete this[_empList][empID]
  }

  toString(){
    return `Department name: ${this[_departName]}, Department ID ${this[_depId]}, Employ list: ${this[_empList]}`
  }
}

module.exports = Department
