const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./generateMarkdown");
const questions = require(`./questions`);

function writeToFile(fileName, data) {

    return fs.writeFileSync (fileName, data);
}

function init() {

    inquirer.prompt(questions).then((responses) =>{
        console.log ("README.md generator File");
        const markdown = generateMarkdown(responses);
        writeToFile("README.md", markdown);
    })}

init();