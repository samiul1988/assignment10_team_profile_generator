const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, employeeID, email, school) {
        super(name, employeeID, email);
        this.school = school;
    }

    // Returns intern's role
    getRole() {
        return "Intern";
    }

    // Returns intern's school
    getSchool() {
        return `${this.school}`;
    }
  }
  
  module.exports = Intern;