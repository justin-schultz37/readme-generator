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
}