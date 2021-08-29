const employee = require('./employee');
const writeHTML = require('./script/writeHTML.js')

class engineer extends employee {
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
        return writeHTML.engineer(this);
    }
}

module.exports = engineer;