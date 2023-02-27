const fs = require('fs');
let text = fs.readFileSync('anki.txt', 'utf-8');
text = text.replace('Ankit', 'Aditya');
console.log("The content of the text file is:")
console.log(text);
console.log("Creating a new text file...");
fs.writeFileSync('ankit.txt', text)