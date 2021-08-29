const employee = require('./employee');
const writeHTML = require('./writeHTML.js')

class manager extends employee {
    constructor(id, officeNumber) {
        super(name, id, email, 'Manager');
        this.officeNumber = officeNumber;
    }

}
manager.printInfo();


*`officeNumber`

*
`getRole()` & mdash;
overridden to
return `'Manager'`