const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
const questions = require(`./utils/questions`);

function writeToFile(fileName, data) {
return fs.writeToFileSync (path.join(process.cwd(), fileName, data));
}

function init() {

    inquirer.prompt(questions).then({Responses}) => {
    const markdown = generateMarkdown(answers);
    writeFile(markdown);
});