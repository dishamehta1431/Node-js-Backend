import chalk from "chalk";

console.log(chalk.red("hello"));

import moment from "moment";

const todayDate = moment().format("MMMM Do YYYY");
console.log(chalk.yellow("Today's Date Is: ", todayDate));
