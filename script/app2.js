const Manager = require('../script/lib/manager');
const Engineer = require('../script/lib/engineer');
const Intern = require('../script/lib/intern');
const inquirer = require('inquirer');
const inquirer = require('inquirer');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('../script/HTML template/writeHTML');

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
        name: 'mangerId',
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