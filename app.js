const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
const generateSite = require('./src/page-template');
const teams = [];


// first we need user input for the manager
const managerInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter manager name',
            validate: nameInput => {
                if (nameInput) { 
                    return true;
                } else { console.log('Manager name is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager id number',
            validate: idInput => {
                if (idInput) { 
                    return true;
                } else { console.log('Manager id is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter manager email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else { console.log('Manager email address required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter manager office number',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else { console.log('Manager office number required');
                    return false;
                }
            }
        },
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        teams.push(manager);
        employeeInput();
    })
};


// add employee, engineer or intern
const employeeInput = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'crew',
            message: 'Create a team by adding a new employee',
            choices: ['Engineer', 'Intern', 'team complete']
        }])
        .then(employeeInput => {
            switch (employeeInput.crew) {
                case "Engineer":
                    engineerInput();
                    break;
                case "Intern":
                    internInput();
                    break;
                default:
                    writeToFile();
            }
        });
};


// user input for engineer
const engineerInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter engineer name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else { console.log('Engineer name is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter engineer id number',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else { console.log('Engineer id is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else { console.log('Engineer email address required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineer github username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else { console.log('Engineer github username required');
                    return false;
                }
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teams.push(engineer);
        employeeInput();
    })
};


// user input for intern
const internInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter intern name',
            validate: internInput => {
                if (internInput) {
                    return true;
                } else { console.log('Intern name is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter intern id number',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else { console.log('Intern id is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter intern email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else { console.log('Intern email address required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter intern school name',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else { console.log('Intern school name is required');
                    return false;
                }
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teams.push(intern);
        employeeInput();
    })
};


// asynchronously write the specified data to a file
function writeToFile() {
    fs.writeFileSync('./dist/index.html', generateSite(teams));
};


// user input for manager
managerInput();