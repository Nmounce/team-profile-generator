const Employee = require('../lib/employee');
const writeHTML = require('./script/writeHTML.js')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.gitHub = github;
    }

    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github;
    }
    getHTML() {
        return writeHTML.Engineer(this);
    }
}

module.exports = Engineer;