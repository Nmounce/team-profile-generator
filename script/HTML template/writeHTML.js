const header = function () {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        <div class="jumbotron">
            <h1>Meet the Team!</h1>
        </div>
        <div class="cardContainer">
            <div class="col-md-12">
                <div class="row">`
};

const employeeCard = function (data) {
    return `
    <div class="card m-2">
        <div class="card-body">
            <h2 class = "emp-name">${data.name}</h2>
            <h3 class = "emp-type">Employee</h3>
            <div class="list-group">
                <p class="list-group-item list-group-item-dark">ID:
                <span>${data.id}</span></p>
                <p class="list-group-item list-group-item-dark">E-Mail:
                <span>${data.email}</span></p>
            </div>
        </div>
    </div>`
};

const managerCard = function (data) {
    return `
    <div class="card m-2">
        <div class="card-header">
            <h1>${data.name}</h1>
            <h2>Manager</h2>
        </div>
        <div class="card-body">
            <div class="list-group">
                <p class="list-group-item list-group-item-dark">ID:
                    <span>${data.id}</span></p>
                <p class="list-group-item list-group-item-dark">E-Mail:
                    <span>${data.email}</span></p>
                <p class="list-group-item list-group-item-dark">Office Number: <span>${data.office}</span></p>
            </div>
        </div>
    </div>`
};

const engineerCard = function (data) {
    return `
    <div class="card m-2">
        <div class="card-header">
            <h1>${data.name}</h1>
            <h2>Engineer</h2>
        </div>
        <div class="card-body">
            <div class="list-group">
                <p class="list-group-item list-group-item-dark">ID:
                <span>${data.id}</span></p>
                <p class="list-group-item list-group-item-dark">E-Mail:
                <span>${data.email}</span></p>
                <p class="list-group-item list-group-item-dark">GitHub:
                    <span>${data.github}</span></p>
            </div>
        </div>
    </div>`
};

const internCard = function (data) {
    return `
    <div class="card m-2">
        <div class="card-header">
            <h1>${data.name}</h1>
            <h2>Intern</h2>
        </div>
        <div class="card-body">
            <div class="list-group">
                <p class="list-group-item list-group-item-dark">ID:
                    <span>${data.id}</span></p>
                <p class="list-group-item list-group-item-dark">E-Mail:
                    <span>${data.email}</span></p>
                <p class="list-group-item list-group-item-dark">School:
                    <span>${data.school}</span></p>
            </div>
        </div>
    </div>`
};

const footer = function () {
    return `
            </div>
        </div>
    </div>
</body>
</html>`
};

module.exports = {
    employee: employeeCard,
    manager: managerCard,
    engineer: engineerCard,
    intern: internCard,
    header: header,
    footer: footer,
}