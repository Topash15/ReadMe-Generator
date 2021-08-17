// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, communitySpecificLicense) {


  let licenseName = ''

  //sets license name based upon choice
  if (license === 'MIT License (lets people do almost anything they want with your project, like making and distributing closed source versions.)'){
    licenseName = "MIT";
  } else if (license === 'GNU GPLv3 (lets people do almost anything they want with your project, except distributing closed source versions.)'){
    licenseName = "GNU GPLv3"
  } else {
    licenseName = communitySpecificLicense
  }

  // checks for license and creates badge link if license is specified
  if (!license){
    return ''
  } else {
    let badge = `https://img.shields.io/badge/License-${licenseName}-brightgreen`
    return badge
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license){
    return '';
  } else{
    const licenseLink = `../../license.txt`;
    return licenseLink
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, communitySpecificLicense) {

  //creates link to license section
  let licenseLink = renderLicenseLink(license);
    
  //creates template for license section
  if (!license){
    return '';
  } else {
    let licenseSection = `## License

    ${licenseLink}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {   
  const {title, description, installation, usage, contributing, tests, license, communitySpecificLicense, github, email} = data;
  let badge = renderLicenseBadge(license, communitySpecificLicense);
  let licenseSection = renderLicenseSection(license, communitySpecificLicense);

  let template = `
    # ${title}

    ## Description 
    
    ${description}
    
    ## Table of Contents (Optional)
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](tests)
    
    
    ## Installation
    
    ${installation}
    
    ## Usage 
    
    ${usage}
    
    ## License
    ![${title}](${badge})
    ${licenseSection}

    ## Contributing
    
    ${contributing}
    
    ## Tests
    
    ${tests}`
  return template
}

module.exports = generateMarkdown;
