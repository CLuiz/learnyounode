var fs = require('fs');
// var readMe = process.argv[2];

f = process.argv[2];

fs.readFile(f, finishedReading);

function finishedReading(error, f) {
  if (error) {
      console.log(error);
  } else {
      console.log(f.toString().split('\n').length - 1);
  }

}
