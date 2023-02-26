const fs = require("fs");
let text = fs.readFile("anki.txt", "utf-8", (err, data)=>{
    console.log(err, data);
});
console.log(text);