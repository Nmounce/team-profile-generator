const employee = require('./employee');
const writeHTML = require('./script/writeHTML.js');

class intern extends employee {
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
        return writeHTML.intern(this);
    }
}

module.exports = engineer;