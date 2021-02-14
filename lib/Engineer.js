const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employeeID, email, githubUsername) {
        super(name, employeeID, email);
        this.githubUsername = githubUsername;
    }
    
    // Returns engineer's role
    getRole() {
        return "Engineer";
    }

    // Returns engineer's github username and gihub link
    getGithub() {
        return {
            userName: `${this.githubUsername}`,
            githubLink: `https://github.com/${this.githubUsername}`
        };
    }
  }
  
  module.exports = Engineer;