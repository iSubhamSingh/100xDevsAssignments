// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'file.txt');

fs.readFile(filePath, 'utf-8', (err,data) => {
    if (err) {
    console.error(err);
    return;
  }

  const cleanedData = data.replace(/\s+/g, ' ');
  fs.writeFile(filePath, cleanedData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File cleaned successfully');
  });
})