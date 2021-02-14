class Employee {
    constructor(name, employeeID, email) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
    }
  
    // Returns employee's name
    getName() {
      return `${this.name}`;
    }

    // Returns employee's id as a string
    getId() {
        return `${this.employeeID}`;
    }

    // Returns employee's email
    getEmail() {
        return `${this.email}`;
    }

    // Returns employee's default role
    getRole() {
        return "Employee";
    }
  }
  
  module.exports = Employee;