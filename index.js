const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide contribution guidelines:"
    },
    {
        type: "input",
        name: "screenshot",
        message: "Provide a link to a screenshot of your project (if available):"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    }
];



