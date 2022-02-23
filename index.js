const inquirer = require('inquirer');
const fs = require('fs');




const prompts = [

    {
        type: 'input',
        name: 'projTitle',
        message: 'What is the title of your project?',
    },
    
  
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project',
    },
   
   
    {
        type: 'input',
        name: 'installInst',
        message: 'How is your project going to be installed?',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'How is your project going to be used?',
    },
   
   
    {
        type: 'list',
        name: 'license',
        message: 'Please select which license you would like to use',
        choices: [
            "APACHE 2.0",
            "BSD3",
            "MIT",
            "None"
        ]
        
      
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your is your name?',
    },
    {
        type: 'input',
        name: 'emailAdd',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'ghUrl',
        message: 'What is the URL of your repo?'
    },
    {
        type: 'input',
        name: 'ghPages',
        message: 'What is the URL of your hosted page?',
    }
]
inquirer.prompt(prompts).then((answers) => {
    answersObj = JSON.stringify(answers, null, '   ');
    console.log(answersObj);

 
     

    fs.writeFile('README.md', `
# ${answers.projTitle}
![profile picture](${answers.ghUserName})

created by: ${answers.userName}

reach me: ${answers.emailAdd}

github pages: ${answers.ghPages}

github URL: ${answers.ghUrl}
## Table of Contents
[About](#about)

[Installation](#installation)

[License](#license)

## About
### Why did I make this project?
${answers.why}


## Installation
${answers.installInst}

## License
${answers.license}

![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

   
    `,
     (err) => {
         if (err) throw err;
         console.log('the file has been saved');
     })});

 