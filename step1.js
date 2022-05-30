// step one

const fs = require('fs');
const process = require('process');
// the require function is the easiest way to include modules that exist in other files

/** read file at path and print it out. */

function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    //   the 1 is a script error, 0 is no error, anything else is a script error
    } else {
      console.log(data);
    }
  });
}

cat(process.argv[2]);
// not sure I understand why this is asynchronous - doesn't there have to be 'async' before the function?