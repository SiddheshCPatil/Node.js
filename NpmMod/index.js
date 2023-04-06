const chalk = require('chalk');
const validator = require('validator');

// console.log(chalk.green("Hello World"));

const valid=validator.isEmail('sc@gmail.com'); //=> true
console.log(valid?chalk.green(valid):chalk.red(valid));

