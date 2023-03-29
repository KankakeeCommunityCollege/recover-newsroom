// Nodejs module to easily loop through a folder (recursively) and change a specific string in each file of that folder
// Recursively loops through a folder and looks for files that
//   contain an `offendingString`.
// If any file contains the `offendingString` that file is overwritten
//   with the `offendingRegex` being replaced with the `replacement`.
import fs from 'fs';
import path from 'path';

const folder          = './archive'; // The folder to recursively loop through
const offendingString = 'href="http://www.kcc.edu/FacultyStaff/departments/marketing/Pages/logos.aspx"'; // A string that you wish to replace
const offendingRegex  = /href="http:\/\/www.kcc.edu\/FacultyStaff\/departments\/marketing\/Pages\/logos\.aspx"/g; // Regular Expression used in `String.prototype.replace()`
const replacement     = 'href="https://www.kcc.edu/about/marketing/#downloadable-logos"'; // Replacement used in `String.prototype.replace()`

function readDir(dir) {
  // Reads the folder specified in `dir`
  fs.readdir(dir, (err0, files) => {
    if (err0) {
      console.error('Could not list the directory.', err0);
    }
    // Loop over each file/folder in `dir`
    files.forEach((file, i) => {
      const item = path.join(dir, file);
      // Get file/folder stats
      fs.stat(item, (err1, stat) => {
        if (err1) {
          console.error("Error stating file.", err1);
        }

        if (stat.isFile() && item.search(/\.DS_Store$/) == -1) {
          // Items here are files
          // console.log("'%s' is a file.", item);
          fs.readFile(item, 'utf8', (err2, data) => {
            if (err2) {
              console.error('Error reading file', err2);
            }

            if (data.search(offendingString) !== -1) {
              // File contents contains an offending string that we want to replace
              const newData = data.replace(
                offendingRegex,
                replacement
              );
              // Overwrites the existing file with the `offendingString` replaced with `replacement`
              fs.writeFile(item, newData, 'utf8', (err3) => {
                if (err3) {
                  console.error('Error writing file.',  err3);
                }
                console.log('File has been written.');
              })
            }
          })
        } else if (stat.isDirectory()) {
          // Items here are folders which need to be checked for files
          console.log("'%s' is a directory.", item);
          readDir(item);
        }
      })
    })
  })
}

readDir(folder);
