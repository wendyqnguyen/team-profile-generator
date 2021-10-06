// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./lib/lib');

// TODO: Create an array of questions for user input
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the manager's name >> "
    },
    {
        type: 'number',
        name: 'id',
        message: "Please enter the manager's ID >> "
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email >> "
    }]   


// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Done!");
      
      });
}

//function to prompt user for README data
const promptManager = () => {
    return inquirer.prompt(managerQuestions);
  };



// Function to initialize app
function init() {
    // promptUser().then(answers => writeToFile('myreadme.txt', answers));
    promptManager().then(answers => { 
        var html = generateHTML(answers);
        // console.log(markdown);
        // var answerString = `Name: ${answers.name}`
        writeToFile('team.html', html);

    });
}

// Function call to initialize app
init();
