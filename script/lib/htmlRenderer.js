const path = require('path');
const fs = require('fs');
const templatesDir = path.resolve(__dirname, '../lib/resources/HTMLTemplates');

const render = (emp) => {
    const html = [];

    html.push(emp.filter((emp) => emp.getRole() === 'Manager').map((manager) => renderMgr(manager)));
    html.push(emp.filter((emp) => emp.getRole() === 'Engineer').map((engineer) => renderEng(engineer)));
    html.push(emp.filter((emp) => emp.getRole() === 'Intern').map((intern) => renderInt(intern)));

    return renderMain(html.join(''));
};

const renderMgr = (manager) => {
    let template = fs.readFileSync(path.resolve(templatesDir, './manager.html'), 'utf-8');
    template = replacePlaceHolders(template, 'name', manager.getName());
    template = replacePlaceHolders(template, 'role', manager.getRole());
    template = replacePlaceHolders(template, 'email', manager.getEmail());
    template = replacePlaceHolders(template, 'id', manager.getId());
    template = replacePlaceHolders(template, 'office', manager.getOffice());
    return template;
};
const renderEng = (engineer) => {
    let template = fs.readFileSync(path.resolve(templatesDir, 'engineer.html'), 'utf-8');
    template = replacePlaceHolders(template, 'name', engineer.getName());
    template = replacePlaceHolders(template, 'role', engineer.getRole());
    template = replacePlaceHolders(template, 'email', engineer.getEmail());
    template = replacePlaceHolders(template, 'id', engineer.getId());
    template = replacePlaceHolders(template, 'github', engineer.getGithub());
    return template;
};
const renderInt = (intern) => {
    let template = fs.readFileSync(path.resolve(templatesDir, 'intern.html'), 'utf-8');
    template = replacePlaceHolders(template, 'name', intern.getName());
    template = replacePlaceHolders(template, 'role', intern.getRole());
    template = replacePlaceHolders(template, 'email', intern.getEmail());
    template = replacePlaceHolders(template, 'id', intern.getId());
    template = replacePlaceHolders(template, 'school', intern.getSchool());
    return template;
};

const renderMain = (html) => {
    const template = fs.readFileSync(path.resolve(templatesDir, 'main.html'), 'utf-8');
    return replacePlaceHolders(template, 'team', html);
};

const replacePlaceHolders = (template, placeHolder, value) => {
    const banana = new RegExp('{{ ' + placeHolder + ' }}', 'gm');
    return template.replace(banana, value);
};

module.exports = render;