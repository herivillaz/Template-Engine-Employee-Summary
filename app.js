const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const managerQuestions = [{
    message: "Enter your GitHub username:",
    name: "username"
  },
  {
    type: "input",
    name: "title",
    message: "Title of your project: "
  },
  {
    type: "input",
    name: "description",
    message: "Description: "
  },
  {
    type: "input",
    name: "installation",
    message: "Installation: "
  },
  {
    type: "input",
    name: "usage",
    message: "Usage: "
  },
  {
    type: "list",
    name: "license",
    message: "License: ",
    choices: ["MIT", "GNU GPLv3"]
  },
  {
    type: "input",
    name: "contribute",
    message: "What are the requirements for contributing to this project: "
  },
  {
    type: "input",
    name: "test",
    message: "List of Tests: "
  },
  {
    type: "confirm",
    name: "includeProfilePicture",
    message: "Would you like Profile Picture to be displayed: ",
  },
  {
    type: "confirm",
    name: "includeEmail",
    message: "Provide Email: "
  },
  {
    type: "input",
    name: "email",
    message: "Email Address: ",
    when: function (res) {
      return res.includeEmail;
    }
  }
  ]
  inquirer
    .prompt(userQuestions)
    .then(function (answers) {
      console.log(answers);
    })
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


// call render function in the app.js