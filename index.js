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
        {
            type: 'list',
            message: 'Choose which license best applies to your project:',
            name: 'badge',
            choices: ['MIT', 'Apache', 'Unlicensed', 'GNU AGPLv3', 'GNU GPLv3', 'Mozilla Public License'],

        },
    ])

    .then((responses) => {
        const readmeContent = generateRead(responses);
        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Commit Successful!');
            }
        });
    });

function generateRead(input) {
    const readmeContent = `
# <p align="center">Title: ${input.project}</p> <p align="center">![Static Badge](https://img.shields.io/badge/License-${input.badge}-blue)</p>


## Description
${input.description}
    
## Installation
    
## Usage
${input.usage} 
    
## Contributing
${input.contribute}
    
## Tests

## License Type
`

    return readmeContent;

};


