const Employee = require('../lib/employee');
const writeHTML = require('./script/writeHTML.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'Intern'
    }
    getSchool() {
        return this.school;
    }
    getHTML() {
        return writeHTML.Intern(this);
    }
}

module.exports = Intern;