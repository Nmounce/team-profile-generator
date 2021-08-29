const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./classes/employee");
const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");
const open = require("open");

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
        choices: ['Employee', 'Manager', 'Engineer', 'Intern', 'None'],
    }]).then((answer) => {
        if (answer.role === 'Employee') {
            let employee = new Employee(answers.firstName, answers.id, answers.email);
            team.splice(team.length - 1, 0, employee.getHTML());
            buildProfile();
        }
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