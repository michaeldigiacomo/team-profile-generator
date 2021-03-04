const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

const teamArray = []
function renderTeam(){
    const michael = new Engineer("Michael", "1234", "Email@email.com", "michaeldigiacomo" );
    teamArray.push(michael)
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamArray),"utf-8")

    const frank = new Intern("Frank", "5678", "Email2@email.com", "frankdigiacomo" );
    teamArray.push(frank)
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamArray),"utf-8")

    const clyde = new Manager("Clyde", "abcd", "Email3@email.com", "clydedigiacomo" );
    teamArray.push(clyde)
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamArray),"utf-8")

    const kelly = new Intern("Kelly", "efgh", "Email4@email.com", "kellydigiacomo" );
    teamArray.push(kelly)
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamArray),"utf-8")
}

renderTeam();

// const idArray = [];

// function menu() {

//     function createManager() {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 name: "managerName",
//                 message: "What is the managers name",
//                 // validate: answer => {
//                 //     if (answer !== "") {
//                 //         return true;
//                 //     }
//                 //     return "Please enter at least one character.";
//                 // }
//             },
//             {
//                 type: "input",
//                 name: "managerId",
//                 message: "What is the managers ID?"
//                 // validate: answer => {
//                 //     if (answer !== "") {
//                 //         //validate that the ID's do not match
//                 //         return true;
//                 //     }
//                 //     return "Please enter a valid ID.";
//                 // }
//             },
//             {
//                 type: "input",
//                 name: ""
//             }
//         ])
//     }
// }



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
