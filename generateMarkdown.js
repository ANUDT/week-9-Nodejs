function generateMarkdown(data){
 return `# ${data.title}`
 }

 function renderLicenseBadge(license) {
  let licenseBadge = ""
  switch(license) {
    case 'MIT':
      licenseBadge = `![Static Badge](https://img.shields.io/badge/license-MIT-blue)`
      break;
     case 'APACHE 2.0':
      licenseBadge = `![Static Badge](https://img.shields.io/badge/license/apache-2.0-blue)`
      break;
    case 'GPL 3.0':
      licenseBadge = `![Static Badge](https://img.shields.io/badge/license-GPLv3-blue)`
      break;
    case 'BSD 3':
      licenseBadge = `![Static Badge](https://img.shields.io/badge/BSD-3-Purple)`
      break;
    case 'None':
      licenseBadge = `No License Used`
      break;
  }
  return licenseBadge

function generateMarkdown(data) {
  return `# ${data.title}
  by $ {data.title}
  ${renderLicenseBadge(data.license)}
  ##Tables of Contents:
* [Your Project Title](##Your Project Title)
* [Description](##Description)
* Table of Contents](##Table of content)
* [Installation](##Installation)
* [Usage](##Usage)
* [Credits](##Credits)
* [License](##License)
${renderLicenseLink(data.license)}

##Description
${data.Description}

##Installation
${data.Installation}

##Usage
${data.Usage}

##Credits
${data.Credits}

Github- [${data.creator}](https://github.com/$(data.creator}/)`
}

module.exports = generateMarkdown;