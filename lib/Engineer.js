const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employeeID, email, githubUsername) {
        super(name, employeeID, email);
        this.githubUsername = githubUsername;
    }
  
    getRole() {
        return "Engineer";
    }

    getGithub() {
        return {
            userName: `${this.githubUsername}`,
            githubLink: `https://github.com/${this.githubUsername}`
        };
    }
  }
  
  module.exports = Engineer;