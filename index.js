// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/js/utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    //title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the application?',
        validate: titleInput => {
            if (titleInput){
                return true
            } else {
                console.log('Enter your application title.')
                return false
            }
        }
    },
    //description
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the application?',
        validate: descriptionInput => {
            if (descriptionInput){
                return true
            } else {
                console.log('Enter a description about the application.')
                return false
            }
        }
    },
    //installation - what steps are needed to install the application?
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are needed to install the application?',
        validate: installCheck => {
            if (installCheck){
                return true
            } else {
                console.log('Enter instructions for installing the application')
                return false
            }
        }
    },
    //usage information - brief instructions for how to use the application
    {
        type: 'input',
        name: 'usage',
        message: 'What steps are needed to use the application?',
        validate: usageCheck => {
            if (usageCheck){
                return true
            } else {
                console.log('Enter instructions for using the application')
                return false
            }
        }
    },
        // contributing - provide any guidelines for contributing in the future
    {
        type: 'input',
        name: 'contributing',
        message: 'What guidelines do you have for others to contribute to this project in the future?',
        validate: contributionCheck => {
            if (contributionCheck){
                return true
            } else {
                console.log('Enter instructions for contributing to the application')
                return false
            }
        }
    },
    //tests
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are built for the project and how does one run them?',
        validate: testsCheck => {
            if (testsCheck){
                return true
            } else {
                console.log('Enter any instructions for testing the application')
                return false
            }
        }
    },
    //License
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: [{name: 'Community-specific license', value: 'CSL'}, {name: 'MIT License (lets people do almost anything they want with your project, like making and distributing closed source versions.)', value: 'MIT'}, {name: 'GNU GPLv3 (lets people do almost anything they want with your project, except distributing closed source versions.)', value: 'GNU GPLv3'}]
    },
    //License community specific license
    {
        type: 'input',
        name: 'communitySpecificLicense',
        message: 'Which community-specific license does your project have?',
        when: ({license}) => {
            if (license === 'Community-specific license') {
                return true;
            } else {
                return false;
            }
        },
        validate: communityLicenseValidator => {
            if (communityLicenseValidator){
                return true
            } else {
                console.log('Enter the name of the community-specific license.')
                return false
            }
        }
    },
    //asks for link to license
    {
        type: 'input',
        name: 'communitySpecificLicenseLink',
        message: 'Enter a link to your license. If left blank, you will have to add the link the ReadMe later.',
        when: ({license}) => {
            if (license === 'Community-specific license') {
                return true;
            } else {
                return false;
            }
        }
    },
    //github username
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: githubInput => {
            if (githubInput){
                return true
            } else {
                console.log('Enter your github username.')
                return false
            }
        }
    },
    //email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput){
                return true
            } else {
                console.log('Enter your email address.')
                return false
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {

    fs.writeFile(filename, data, function (err){
        if (err) throw err;
        console.log(`${filename} created!`);
    })
}


// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions)
    .then(function(answers){
        template = generateMarkdown(answers)
        return template
    })
    .then(function(template){
        writeToFile("readmeOutput.md", template);
    })
}

// Function call to initialize app
init();
