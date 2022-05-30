
const fs = require('fs');
const process = require('process');
const axios = require('axios');
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

// cat(process.argv[2]);
// not sure I understand why this is asynchronous - doesn't there have to be 'async' before the function?

async function webCat(url){
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
      } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

let path = process.argv[2];
// process.argv is an array of command-line arguments given to start this program

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}

// going to need to ask about this - how is process.argv[2] potentially a url? 
// - because it's what you enter in command line when you run 'node step2.js one.txt' or 'node step2.js http://google.com'