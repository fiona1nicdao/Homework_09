// TODO: Include packages needed for this application
const inquier = require('inquier');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'What is your title for your README?',
    },
    {
        type: 'input',
        name: 'Description',
        message: "Provide a short description explaning the what, why, and how of your project. Use the following questions as a guide.\n What was your motivation? \n Why did you build this project? (Note: the answer is not 'Because it was a homework assignment.' \n What problem does it solve? \n What did you learn?",
    },
    {
        type: 'input',
        name: 'table of contents',
        message:'If your README is long, add a table of contents to make it easy for users to find what they need',
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type:'input',
        name:'usage',
        message:'Provide instructions and examples for use. Include screenshots as needed \n to add a screenshot, create an "assets/images" foler in your respository and upload your screenshot to it Then, using the relative filepath, add it to your README using the following syntax: ```md ![alt text](assets/images/screenshot.png)```',
    },
    {
        type:'input',
        name:'credits',
        message:'List your collaborator, if any, with links to their GitHub profiles. \n If you used any third-party assets that require attribution, list the creator with links to their primary web presence in this section \n If you followed tutorials, include links to those here as well.',
    },
    {
        type:'input',
        name:'license',
        message:'The last section of a README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
    },
    {
        type:'input',
        name: 'Badges OPTIONAL',
        message:'Bages are not necessary, but they let other developers know that you know what you are doing.',
    },
    {
        type: 'input',
        name: 'Features OPTIONAL',
        message:'IF your project has a lot of features, list them here',
    },
    {
        type: 'input',
        name: 'How to Contribute OPTIONAL',
        message:'If you created an application or package and would like other developers to contribute it, you can include guidlines for how to do so.',
    },
    {
        type: 'input',
        name: 'Tests OPTIONAL',
        message:'Write tests for your application. Then provide examples on how to run them here',
    },
];

// TODO: Create a function to write README file
const writeFile = function() {
    fs.writeToFile('README.md', readmeContent, (err) =>{
        err ? console.log(err): console.log('Successfully created README')
    })
}

// TODO: Create a function to initialize app
// need to fix  
function init() {
    inquier
        .prompt(questions)
        .then((answers) => {
            const readmeContent = questions(answers);
            
            fs.writeToFile('README.md', readmeContent, (err) =>{
                err ? console.log(err): console.log('Successfully created README')
            })
        });
}

// Function call to initialize app
init();
