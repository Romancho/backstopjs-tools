const path = require('path');
let configData = fs.readFileSync(path.resolve(__dirname, '../../config.json'));
let config = JSON.parse(configData);
var reference_exeption;
if (config.module  !== "") {
    reference_exeption = require(path.resolve(__dirname, '../../node_modules/'+ config.module  +'/backstopExeption'));
}


module.exports = [
    reference_exeption,
    ".disclamer"
];