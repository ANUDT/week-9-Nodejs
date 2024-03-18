const questions = [
    {
    type: "input",
    name: "##Your Project Title",
    message: "project name",
    },

    {
    type: "input",
    name: "##Description",
    message: "functionality and purpose of this project",
    },
    
    {
    type: "input",
    name: "##Table of content",
    message: "project contents listed",
    },

    {
    type: "input",
    name: "##Installation",
    message: "steps required to install",
    },

    {
    type: "input",
    name: "##Usage",
    message: "provide instructions and examples for use, screenshots",
    },

    {
    type: "input",
    name: "##Credits",
    message: "provide list of collaborators, Github profiles. third-party assets",
    },

    {
    type: "List",
    name: "##Licence",
    message: "provide high-quality README file",
    choices: [`MIT`, `APACHE 2.0`, `CPL 3.0`, `none`].
    },
];

module.exports = questions;