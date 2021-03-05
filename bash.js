process.stdout.write("prompt > ");

const pwd = require("./pwd");
process.stdin.on("data", pwd);

const ls = require("./ls");
process.stdin.on("data", ls);

let splitInput = data.split(" ");
let comandName = splitInput[0];
let fileName = splitInput[1];

const cat = require("./cat");
process.stdin.on("data", cat);
