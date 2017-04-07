// prints list of files in a given directory filtered by file extension
var fs = require('fs');

directory = process.argv[2];
extension = process.argv[3];

fs.readdir(directory, doStuff);

function doStuff(err, files) {
      if (err) {
          console.log(err);
      } else {
          for (var i=0; i<files.length; i++) {
              //console.log(files[i]);
              if (files[i].split('.')[1] == extension) {
                  console.log(files[i]);
              }
          }
      }

}
