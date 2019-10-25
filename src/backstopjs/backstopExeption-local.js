const fs = require('fs');
const path = require('path');

let configData = fs.readFileSync(path.resolve(__dirname, '../../config.json'));
let config = JSON.parse(configData);
let moduleExeptions = [];

if (config.module !== "") {
    moduleExeptions =  require(path.resolve(__dirname, '../../node_modules/' + config.module + '/backstopExeption.js'));
}
module.exports = [
    moduleExeptions
];