// using module js
import sub from "./local.js";

const result = sub(10, 20);
console.log("substraction is:", result);

// using common js

const add = require("./local.js");

const result2 = add(14, 31);

console.log("addition is:", result2);
