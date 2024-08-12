# Recursive scrapper of text from static HTML web site
Node.js command-line application that takes in the URL of the web site, discovers the links from this URL and recursively scrapes all the text content. Designed to work for static HTML web sites, for other web sites there may be other more effective tools.

## Description

This application runs from the command line and allows to get the content of the web site in a text format. The target web sites it works for should be a static HTML (no additional interaction from the user required to get the content of the page).

## Table of Contents

  [Title](#title)

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)

  [Questions](#questions)

## Installation

Step 1: clone GitHub repository, for that run the following command from the command line prompt (make sure you navigate to the directory of your choice before start cloning): git clone https://github.com/vasilyl1/website-scrapping.git

Step 2: navigate to the cloned repositary directory, for that run: cd website-scrapping

Step 3: install the libraries required by the application by running: NPM install

Step 4: launch the app by typing: node index.js or NPM start


## Usage

Command line syntax to run the app:

npm start <-URL address> <filename_with_relative_path>

<-URL address> is the address of the target HTML web site page to scrap, take the root page
<filename_with_relative_path> is the name of the file used to write the scraped text content. Note that if that parameter is missing, the tool will just print the content on the console.


## Credits

cheerio library has been used:
https://www.npmjs.com/package/cheerio


## License

MIT License

Copyright (c) 2024 vasilyl1

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing

vl1


## Questions

My GitHub name is vl1. Most of the answers to the questions can be found there, here is the link to my profile at GitHub:

https://github.com/vl1

For additional questions please e-mail to likhovaido@gmail.com

Thank you for your interest in this app.
