const path = require('path');
const fs = require('fs');
const Employee = require('./employee');
const templatesDir = path.resolve('__dirname', '../HTML template');

const render = (emp) => {
    const html = [];

    html.push(emp.filter((emp) => emp.getRole() === 'Manager').map((manager) => renderManager(manager)));
    html.push(emp.filter((emp) => emp.getRole() === 'Engineer').map((engineer) => renderManager(engineer)));
    html.push(emp.filter((emp) => emp.getRole() === 'Intern').map((intern) => renderManager(intern)));

    return renderMain(html.join(''));
};

