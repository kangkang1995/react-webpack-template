var fs = require("fs");
fs.writeFileSync('./dist/config.js', fs.readFileSync('./public/config.js'));
