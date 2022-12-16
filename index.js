//Prompt for entering manager name, employee Id, email, and office address//

//Menu to add engineer or intern or finish building my team//

//ADD ENGINEER = Engineer name, ID ,email, and github username//

//ADD INTERN = Intern name, ID ,email, and school//

//FINISH BUILDING TEAM = exit application, generate HTML//

const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const template = require('./src/template')
//pulling in team objects//
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Setting up path for HTML file//
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

//where the html template is in, "use this template//
const render = require("./src/template.js")

//promting like readme generator//
const prompts = [
    {
        type: 'input',
        message: 'What is the name of your team manager?',
        name: 'manager_name'
    },

    {
        type: 'input',
        message: 'What is the employee id of the manager?',
        name: 'manager_id'
    },

    {
        type: 'input',
        message: 'what is the email of the manager?',
        name: 'manager_email'
    }
]

function writeToFile(fileName, answers) {
   
    return fs.writeFileSync(path.join(process.cwd(), fileName),answers)
    }
    // file written successfully
 
function init() { 
    
    inquirer.prompt(prompts).then((inquirerResponses) => {
        console.log('generating team profile...');
        writeToFile('./dist/index.html', template({ ...inquirerResponses}));
    });
    }
    // // Function call to initialize app
    init();

//giant function////create team// //promting menu//
function createTeam () {
    //create manager//
    function createManager () {
    };
    //add engineer//
    function addEngineer () {

    };
    //add intern //
    function addIntern () {

    };
    //build team//  
    function buildTeam () {
    };
}


//////////////////////////

//switch cases to call back to functions // 