#!/usr/bin/node
/*
Reads and prints the content of a file.
The first argument is the file path
The content of the file must be read in utf-8
If an error occurred during the reading, print the error object
*/
const fs = require('fs');
const path = process.argv[2];

fs.readFile(path, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
