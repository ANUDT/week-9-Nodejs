const questions = [
    {
        type: "input",
        name: "project_name",
        message: "Enter the name of your project",
    },
    {
        type: "input",
        name: "description",
        message: "Functionality and purpose of this project",
    },
    {
        type: "input",
        name: "installation",
        message: "steps required to install",
    },
    {
        type: "input",
        name: "usage",
        message: "provide instructions on how to run this application",
    },
    {
        type: "input",
        name: "credits",
        message: "provide list of collaborators, Github profiles. third-party assets",
    },
    {
        type: "list",
        name: "licence",
        message: "Select a type of license for your project",
        choices: [`MIT`, `APACHE 2.0`, `CPL 3.0`, `none`]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your Github username",
    },
];

module.exports = questions;