// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//const util = require("util");
const generatorMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide your project's description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide the installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide the project usage:",
  },
  {
    type: "list",
    name: "license",
    message: "Which open source license would you like to use? ",
    choices: [
      "Apache 2.0",
      "BSD 2-Clause",
      "BSD 3-Clause",
      "GNU AGPLv3.0",
      "GNU GPLv2.0",
      "GNU GPLv3.0",
      "MIT",
      "Mozilla Public 2.0",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide the contributing parties:",
  },
  {
    type: "input",
    name: "test",
    message: "What commands are needed to test this app?",
  },
  {
    type: "input",
    name: "username",
    message: "Please provide your github user name:",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your Email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("Success");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("generated/README.md", generatorMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
