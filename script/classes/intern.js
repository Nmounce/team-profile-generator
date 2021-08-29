const employee = require('./employee');

class intern extends employee {
    constructor(id, school) {
        super(name, id, email, 'Intern');
        this.school = school;
    }
}
intern.printInfo();
*`school`

*
`getSchool()`

*
`getRole()` & mdash;
overridden to
return `'Intern'`