function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Questions
For any questions regarding this project, please contact ${data.email}. You can also visit my [GitHub profile](https://github.com/${data.github}) for additional information.

${data.screenshot ? `![Screenshot](${data.screenshot})` : ''}
`;
}

module.exports = generateMarkdown;
