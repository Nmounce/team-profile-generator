const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const emoji = require('emoji-regex')
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');



const team = [writeHTML.header(), writeHTML.footer()];

function getInfo() {
    inquirer.prompt([{
            name: 'firstName',
            message: 'What is the team members first name?',
            type: 'input',
        },
        {
            name: 'id',
            message: `What is '${firstName}s' id #?`,
            type: 'input',
        },
        {
            name: 'email',
            message: `What is '${firstName}s' email address?`,
            type: 'input',
        }
    ])
}

function buildProfile() {
    inquirer.prompt([{
        name: 'role',
        message: 'What type of team member would you like to add?',
        type: 'list',
        choices: ['Manager', 'Engineer', 'Intern'],
    }]).then((answer) => {
        if (answer.role === 'Engineer') {
            return inquirer.prompt([{
                name: 'github',
                message: `What is '${firstName}s' GitHub username ?`,
                type: 'input'
            }]).then((answers) => {
                let engineer = new Engineer(employee, answers.github);
                team.splice(team.length - 1, 0, engineer.getHTML());
                buildProfile();
            })
        }
        if (answer.role === 'Intern') {
            return inquirer.prompt([{
                name: 'school',
                message: `What school is '${firstName}' attending?`,
                type: 'input'
            }]).then((answers) => {
                let intern = new Intern(employee, answers.school);
                team.splice(team.length - 1, 0, intern.getHTML());
                buildProfile()
            })
        }
        return printHTML(team);
    });
}

function printHTML(team) {
    fs.writeFile("team.html", team, (err) => {
        if (err) {
            throw err;
        };
        console.log("Your team has been created!")
    });
    open('team.html');
};