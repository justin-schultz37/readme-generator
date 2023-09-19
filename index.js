const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'project',
        },
        {
            type: 'input',
            message: 'Please provide a description of this project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please provide information about how this project will be used.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please provide instructions on how to contribute to this project.',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'Please provide any testing information details.',
            name: 'tests',
        },
    ])