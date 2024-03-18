function generateMarkdown(data){
 return `# ${data.title}`
 }

 
 function renderLicenseLink(license) {

  let licenseLink = ""
  switch(license) {
    case 'MIT':
      licenseLink = `![Static Badge](https://img.shields.io/badge/license-MIT-blue)`
      break;
     case 'APACHE 2.0':
      licenseLink = `![Static Badge](https://img.shields.io/badge/license/apache-2.0-blue)`
      break;
    case 'GPL 3.0':
      licenseLink = `![Static Badge](https://img.shields.io/badge/license-GPLv3-blue)`
      break;
    case 'BSD 3':
      licenseLink = `![Static Badge](https://img.shields.io/badge/BSD-3-Purple)`
      break;
    case 'None':
      licenseLink = `No License Used`
      break;
  }
  return licenseLink
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
}

function generateMarkdown(data) {
  return `# ${data.project_name} by ${data.github}

  ##Tables of Contents:
* [project Name](##project_name)
* [Description](##description)
* [Installation](##installation)
* [Usage](##usage)
* [Credits](##credits)
* [License](##license)
${renderLicenseBadge(data.licence)}
${renderLicenseLink(data.licence)}

##Description
${data.description}

##Installation
${data.installation}

##Usage
${data.usage}

##Credits
${data.credits}

Github- [${data.github}](https://github.com/${data.github}/)`
} 

module.exports = generateMarkdown;