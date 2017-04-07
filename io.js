var fs = require('fs');

fileN = fs.readFileSync(process.argv[2]).toString();

console.log(fileN.split('\n').length - 1);
