
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
    

//functions to prompt user for manager data
//use answers to create a new manager object and push that object onto the team array
//when finished, call promptTeamMember function to as user what to do next
const promptManager = () => {
    inquirer.prompt(managerQuestions)
    .then(managerData => {
        let newManager = new Manager(managerData.name, managerData.id, managerData.email, managerData.office);
        teamData.push(newManager);
        promptTeamMember();
      });
  };

const promptTeamMember = () => {
    //prompt user for what to do next Add Engineer|Add Intern|Finish Building Team
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
        //If 'Finish Building Team is chosen
        //call generateHTML to generate the HTML content using the array of team members
        if (answer.addEmployee === 'Finish building team') {
            let pageHTML = generateHTML(teamData);
            //after HTML is generated, create a file using HTML as content
            writeFile(pageHTML)
            .then(writeFileResponse => {
            })
            .catch(err => {
            console.log(err);
            });

      } else if (answer.addEmployee === 'Add an engineer') {
          //if 'Add an engineer' is selected call the function to prompt for engineer info
          return promptEngineer();
      } else if (answer.addEmployee === 'Add an intern') {
        //if 'Add an intern' is selected call the function to prompt for intern info
            return promptIntern();
        }
    });
  };

  const promptEngineer = () => {
    //prompt for engineer info
    //use answers to create a new engineer object and push that object onto the team array
    //when finished, call promptTeamMember again to as user what to do next
    return inquirer.prompt(engineerQuestions)
    .then(engineerData => {
        let newEngineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        teamData.push(newEngineer);
        promptTeamMember();
      });
  };

  const promptIntern  = () => {
    //prompt for intern info
    //use answers to create a new intern object and push that object onto the team array
    //when finished, call promptTeamMember again to as user what to do next
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
