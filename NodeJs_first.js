const fs = require('fs');
const text = fs.readFileSync('anki.txt', 'UTF-8');
console.log(text);