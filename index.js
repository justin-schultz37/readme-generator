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

    .then((responses) => {
        const htmlContent = generateHTML(responses);
        fs.writeFile('index.html', htmlContent, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Commit Successful!');
            }
        });
    });

function generateHTML(input) {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${input.project}</title>
        </head>
        
        <body>
            <h1>${input.description}</h1>
            <h1>${input.usage}</h1>
            <h1>${input.contribute}</h1>
            <h1>${input.tests}</h1>
        
        </body>
        
        </html>`;
    return htmlContent;
};
