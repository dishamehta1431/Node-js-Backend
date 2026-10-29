// create file

import fs from "fs";

fs.writeFileSync("new.txt", "new text file is created");

fs.writeFileSync("news.pdf", "new pdf is created");

// access file
const text = fs.readFileSync("new1.txt", "utf-8");
console.log("text", text);

// using common js

const fs = require("fs");
fs.writeFileSync("new2.txt", "new 2 file created");
