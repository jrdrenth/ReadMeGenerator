// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


## Description

${data.description}


## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Respsitory](#repository)

* [Website](#website)

* [Questions](#questions)


## Installation:

Run the following command:

\`\`\`bash
${data.installation}
\`\`\`


## Usage

Run the following command:

\`\`\`bash
node index.js
\`\`\`

${data.usage}


## Contributing:

${data.contributing}


## Tests:

Run the following command:

\`\`\`bash
${data.tests}
\`\`\`


## Repository:

${data.repository}


## Website:

${data.website}


## Questions:

If you have any questions, please contact me at ${data.email}.  My github profile can be found at [https://github.com/${data.github}/](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
  