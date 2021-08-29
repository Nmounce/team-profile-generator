const employee = require('./employee');
const writeHTML = require('./writeHTML.js')

class manager extends employee {
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
        return writeHTML.manager(this);
    }
};

module.exports = manager;