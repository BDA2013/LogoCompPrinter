const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require('./lib/shapes.js');

const userInput = [
    {
        type: 'input',
        message: 'What three characters you want on your logo?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color do you want for the text?',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'What shape is your logo',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        message: 'What color do you want for your shape?',
        name: 'shapeColor'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateLogo(data), (error) =>
  error ? console.error(error) : console.log("Success!")
)};

function init() {
    inquirer.prompt(
        userInput
        )
        .then ((logoData) => {
            if (logoData.text.length > 3) {
                console.error("Please enter only three characters");
                return;
            } else
            writeToFile('./examples/logo.svg', logoData)
        })
        .catch((error) => console.error(error));
}

init()

module.exports = init;
