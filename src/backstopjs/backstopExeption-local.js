const fs = require('fs');
const path = require('path');

let configData = fs.readFileSync(path.resolve(__dirname, '../../config.json'));
let config = JSON.parse(configData);
let moduleExeptions = [
    '.announce-category'
];

if (config.module !== "") {
    let moduleExeptionsExport =  require(path.resolve(__dirname, '../../node_modules/' + config.module + '/backstopExeption.js'));
    moduleExeptions = moduleExeptions.concat(moduleExeptionsExport);
}

module.exports = [
    moduleExeptions
];