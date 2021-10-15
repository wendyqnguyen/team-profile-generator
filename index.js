
const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require('./src/lib');
const writeFile = require('./src/generate-site');

const teamData = [];

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
    },
    {
        type: 'number',
        name: 'office',
        message: "Please enter the manager's office number >> "
    }]   

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the employee's name >> "
    },
    {
        type: 'number',
        name: 'id',
        message: "Please enter the employee's ID >> "
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the employee's email >> "
    },
    {
        type: 'number',
        name: 'office',
        message: "Please enter the manager's office number >> "
    }]  

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the engineer's name >> "
    },
    {
        type: 'number',
        name: 'id',
        message: "Please enter the engineer's ID >> "
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the engineer's email >> "
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the engineer's GitHub username >> "
    }] 
    
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the intern's name >> "
    },
    {
        type: 'number',
        name: 'id',
        message: "Please enter the intern's ID >> "
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the intern's email >> "
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the engineer's school >> "
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

//functions to prompt user for various types of employee data
const promptManager = () => {
    inquirer.prompt(managerQuestions)
    .then(managerData => {
        let newManager = new Manager(managerData.name, managerData.id, managerData.email, managerData.office);
        teamData.push(newManager);
        promptTeamMember();
      });
  };

const promptTeamMember = () => {
    console.log(`
    =====================
    Add a New Team Member
    =====================
    `);

    inquirer.prompt( [
        {
            type: 'list',
            name: 'addEmployee',      
            message: 'Please select one of the following options:',
            choices: ['Add an engineer', 'Add an intern', 'Finish building team']
        }])
    .then(answer => {
      if (answer.addEmployee === 'Finish building team') {
        let pageHTML = generateHTML(teamData);

        writeFile(pageHTML)
        .then(writeFileResponse => {
        })
        .catch(err => {
        console.log(err);
        });

      } else if (answer.addEmployee === 'Add an engineer') {
        return promptEngineer();
      } else if (answer.addEmployee === 'Add an intern') {
        return promptIntern();
        }
    });
  };

  const promptEngineer = () => {

    return inquirer.prompt(engineerQuestions)
    .then(engineerData => {
        let newEngineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        teamData.push(newEngineer);
        promptTeamMember();
      });
  };

  const promptIntern  = () => {

    return inquirer.prompt(internQuestions)
      .then(internData => {
          let newIntern = new Intern(internData.name, internData.id, internData.email, internData.school);
          teamData.push(newIntern);
          promptTeamMember();
      });
    };

// Function to initialize app
const init = () => {
    
    promptManager();

};

// Function call to initialize app
init();
