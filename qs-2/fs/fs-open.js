const fs = require('fs');

fs.open('mydemo.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log('Saved');
})