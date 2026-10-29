// example chalk

import chalk from "chalk";

console.log(chalk.green("Hello Nodde js"));

console.log(chalk.blue("This is a external module"));

// example 2

console.log(chalk.red("Error Message"));

console.log(chalk.yellow("Warning Message"));

// example moment
// using common js

import moment from "moment";

const Date = moment().format("DD-MM-YY");
console.log("Date is:", chalk.blue(Date));

// example 2 moment

const Time = moment().format("HH:mm:ss");

console.log("Time Is:", chalk.yellow(Time));
