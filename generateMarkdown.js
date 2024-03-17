function generateMarkdown(data){
 return `# ${data.title}`
 }

 function renderLicenseLink(license) {
  const licenseLinks = {
        'MIT': '[MIT License](https://opensource.org/licenses/MIT)',
        'Apache-2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
        'GPL-3.0': '[GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0)'
         };

         if (license && licenseLinks.hasOwnProperty(license)) {
        } else {
       return '';
	}
}

function generateMarkdown(data) {
  return `# ${data.title}`;
  by $ {data.title}
  ${renderLicenseBadge(data.license)}
  * [License](##License)

  ## Description

  $ {data.Description}

  ##Tables of Contents:

  ${renderLicenseLink(data.license)}

* [Your Project Title](##Your Project Title)
* [Description](##Description)
* Table of Contents](##Table of content)
* [Installation](##Installation)
* [Usage](##Usage)
* [Credits](##Credits)
* [License](##License)

${data.Installation}
module.exports = generateMarkdown;
