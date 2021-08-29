const employee = require('./employee');

class engineer extends employee {
    constructor(id, Github) {
        super(name, id, email, 'Engineer');
        this.GitHub = Github;
    }
}
engineer.printInfo();


* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`