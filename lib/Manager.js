const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, employeeID, email, officeNumber) {
        super(name, employeeID, email);
        this.officeNumber = officeNumber;
    }
    
    // Returns manager's office number as a string
    getOfficeNumber() {
        return `${this.officeNumber}`;
    }

    // Returns manager's role
    getRole() {
        return "Manager";
    }
  }
  
  module.exports = Manager;