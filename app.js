const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const writeFileAsync = util.promisify(fs.writeFile);

const employees = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

async function userPrompts() {
    try {
    
        async function checkingName() {
            const userInput = await inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter the Employee's first and last name",
                    name: "name",
                    validate: function(value) {
                        if (!value.includes(" ") || (value.split("")[0] !== value.split("")[0].toUpperCase())){
                            return "You need the format in Initial Capital for first and last name";
                        }
                        return true;
                    }

                }
                  
            ]);
            
        } 
        const name = await checkingName();

        async function checkingId(){
            const userInput = await inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter the Employee's id",
                    name: "id"
                }])
            if (isNaN(userInput.id)) {
                
                return await checkingId();
            } else {
                return userInput.id;
            }
        }
        const id = await checkingId();
        async function checkingEmail() {
            const userInput = await inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter Employee's email",
                    name: "email"
                }
            ]);
            if (!userInput.email.includes("@")) {
                return await checkingEmail();
            }
            return userInput.email;
        }
        const email = await checkingEmail();

        const roleInput = await inquirer.prompt([
            {
                type: "list",
                message: "Please choose Employee's role",
                name: "role",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            }              
        ]);

        switch(roleInput.role) {
            case "Manager":
                const managerInput = await inquirer
                    .prompt({
                    type: "input",
                    name: "officeNumber",
                    message: "Please enter Employee's Office Number"
                    })
                employees.push(new Manager(name, id, email, managerInput.officeNumber));
              break;
            case "Engineer":
                const engineerInput = await inquirer
                .prompt({
                type: "input",
                name: "github",
                message: "Please enter Employee's GitHub"
                })
                employees.push(new Engineer(name, id, email, engineerInput.github));
              break;
            case "Intern":
                const internInput = await inquirer
                .prompt({
                type: "input",
                name: "school",
                message: "Please enter Employee's School"
                })
                employees.push(new Intern(name, id, email, internInput.school));
                break
            default:
              throw new Error("Try again");
        }
        
        const againInput = await inquirer.prompt({
            type: "confirm",
            message: "Do you want to add another Employee?",
            name: "again"
        })
        if (againInput.again === true) {
            return await userPrompts();
        } 
        
        writeFileAsync(outputPath, render(employees));
            console.log("Success!")
    } 
    catch (err) {
        console.log(err);
        }
        
}
userPrompts();
