const fs = require('fs');

// writing files
const writeFile = fileContent => {
  //console.log(fileContent)
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/team.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};


module.exports = writeFile;
