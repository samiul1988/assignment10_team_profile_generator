const fs = require('fs');

// Write to a file
module.exports.writeToFile = (fileName, data, successMsg) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
    
            resolve({
                success: true,
                message: successMsg
            });
        });
      });
};

// Copy a file (for copying css from src/ to dist/)
module.exports.copyFile = ( sourcePath, destinationPath, successMsg ) => {
    return new Promise((resolve, reject) => {
        fs.copyFile(sourcePath, destinationPath, err => {
            if (err) {
                reject(err);
                return;
            }
  
            resolve({
                success: true,
                message: successMsg
            });
        });
    });
};