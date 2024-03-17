const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
const questions = require(`./utils/questions`);

function writeFile(markdown) {

    fs.writeFile(`readme.md`, markdown(error) => {
        if(error) {
            console.log(error);
        else {
            console.log(`created index.html succesfully`);
        }
    });
}

function init() {

    inquirer
        .prompt(questions)
        .then({answers}) =>
    const markdown = generateMarkdown(answers);
    writeFile(markdown);
});