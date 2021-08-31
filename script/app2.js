const Manager = require('../script/lib/manager');
const Engineer = require('../script/lib/engineer');
const Intern = require('../script/lib/intern');
const inquirer = require('inquirer');
const Logger = require('../script/lib/color-logger')
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('../script/lib/htmlRenderer');
const writeHTML = require('../script/HTML template/writeHTML');

const log = new Logger();

//Blank array to be filled with pushed constructors classes
const teamMemberArray = [];

//Intro question that starts the app
const introQ = {
    name: 'intro',
    type: 'list',
    message: 'Welcome to the Team Profile Generator. This application allows you to input contact information for your team members and displays them to the webpage! Are you ready to get started?',
    choices: ['Yes', 'Close Application'],
};

//Begin Manager constructor
const managerQ = [{
        name: 'managerName',
        type: 'input',
        message: 'We will begin with the Manager. What is the Managers first name?',
    },
    {
        name: 'managerId',
        type: 'input',
        message: `What is the Managers' employee ID number?`,
    },
    {
        name: 'managerEmail',
        type: 'input',
        message: `What is the Managers' E-Mail address?`
    },
    {
        name: 'managerOffice',
        type: 'input',
        message: `What is the Managers' office number?`
    }
];

//Question for adding another team member
const addAnotherTM = {
    name: 'add',
    type: 'confirm',
    message: 'Would you like to add another team member?',
};

//Question to determine which type of new TM to add
const addAnotherTMRole = {
    name: 'role',
    type: 'list',
    message: 'Is the team member an Engineer or an Intern?',
    choices: ['Engineer', 'Intern'],
};

//Engineer specific questions
const engineerQ = [{
        name: 'engineerName',
        type: 'input',
        message: `What is the Engineers' name?`
    },
    {
        name: 'engineerId',
        type: 'input',
        message: `What is the Engineers' employee ID number?`,
    },
    {
        name: 'engineerEmail',
        type: 'input',
        message: `What is the Engineers' E-Mail address?`
    },
    {
        name: 'engineerGithub',
        type: 'input',
        message: `What is the Engineers' GitHub profile name?`
    },
];

//Intern specific questions
const internQ = [{
        name: 'internName',
        type: 'input',
        message: `What is the Interns' name?`
    },
    {
        name: 'internId',
        type: 'input',
        message: `What is the Interns' employee ID number?`,
    },
    {
        name: 'internEmail',
        type: 'input',
        message: `What is the Interns' E-Mail address?`
    },
    {
        name: 'internSchool',
        type: 'input',
        message: `What School or University is the Intern attending?`
    },
];

//func that renders all input

function introQues() {
    inquirer.prompt(introQ).then((appStart) => {
        if (appStart.intro === 'Yes') {
            log.green('Lets begin with the Managers information');
            managerInfo();
        } else {
            log.orange(`Application Closed`);
        }
    });
}

//func to call manager info and build team
function managerInfo() {
    inquirer.prompt(managerQ).then((buildManager) => {
        let manager = new Manager(buildManager.managerName, buildManager.managerId, buildManager.managerEmail, buildManager.managerOffice);
        teamMemberArray.push(manager);
        addAnother();
    });
}

//func to add another TM
function addAnother() {
    inquirer.prompt(addAnotherTM).then((addTo) => {
        //yes adds another tm to array and recalls addTMLoop func.
        if (addTo.add === 'Yes') {
            addTMLoop();
        }
        if (addTo.add === 'No') {
            //no renders file and closes app
            writeHTML(teamMemberArray);
        }
    });
}

//func to choose type of TM
function addTMLoop() {
    inquirer.prompt(addAnotherTMRole).then((TMRole) => {
        if (TMRole.role === 'Engineer') {
            log.yellow('Enter the Engineers Information');
            inquirer.prompt(engineerQ).then((buildEngineer) => {
                let engineer = new Engineer(buildEngineer.engineerName, buildEngineer.engineerId, buildEngineer.engineerEmail, buildEngineer.engineerGithub)
                teamMemberArray.push(engineer);
                addAnother();
            });
        } else if (TMRole.role === 'Intern') {
            log.blue('Enter the Interns Information');
            inquirer.prompt(internQ).then((buildIntern) => {
                let intern = new Engineer(buildIntern.internName, buildIntern.internId, buildIntern.internEmail, buildIntern.internSchool)
                teamMemberArray.push(intern);
                addAnother();
            });
        }
    });
}

//func to write array info to HTML when all tm's have been enetered
async function writeHTML(file) {
    const htmlDoc = render(file);
    await writeFileAsync(outputPath, htmlDoc).then(function () {
        log.green(`Team Profile Completed`);
    });
}

//call start application
introQues();