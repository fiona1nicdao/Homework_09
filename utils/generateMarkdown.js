// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'GNU') {
    return`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'GNU') {
    return `[GNU](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'MIT') {
    return`[MIT](https://opensource.org/licenses/MIT)`
  } else {
    return``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'no license') {
    return ``
  } else {
    return `### ${license}
    Learn more about ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseSection(data.license)}

  ## Questions
  ### Contact Info
  * Github: [${data.username}](https://github.com/${data.username})
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;