const fs = require('fs');
const { sep } = require('path/posix');

// fs.appendFile('text.txt', 'Hello world! Content...', (err) => {
//     if (err) throw err;
//     console.log("Saved");
// })


fs.appendFile('text.txt', 'Lorem\n', (err, file) => {
    if (err) throw err;
    console.log('Append');
})