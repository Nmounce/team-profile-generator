const Employee = require('../lib/employee');
const writeHTML = require('./script/writeHTML.js')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getHTML() {
        return writeHTML.Manager(this);
    }
};

module.exports = Manager;