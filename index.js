// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'What is your title for your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaning the what, why, and how of your project.',
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project?',
    },
    {
        type:'input',
        name:'usage',
        message:'Provide instructions and examples on how to use this project.',
    },
    {
        type:'list',
        name:'license',
        message:'Pick a License',
        choices: [
            'GNU',
            'MIT',
            'no license',
        ],
    },
    {
        type: 'input',
        name: 'contribute',
        message:'Write how other developers can contribute to this project',
    },
    {
        type: 'input',
        name: 'tests',
        message:'Write tests for your application. Then provide examples on how to run them here',
    },
    {
        type: 'input',
        name: 'username',
        message:"Write your username handler for Github.",
    },
    {
        type: 'input',
        name: "email",
        message: 'Write your email address for a point of contact',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const readmeContent = generateMarkdown(data)
    fs.writeFile('EXAMPLEREADME.md', readmeContent, (err) =>{
        err ? console.log(err): console.log('Successfully created README')
    });
}

// TODO: Create a function to initialize app
// need to fix  
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile(data);
        });
}

// Function call to initialize app
init();
