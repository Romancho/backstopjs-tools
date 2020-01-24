const fs = require('fs');
const path = require('path');

let configData = fs.readFileSync(path.resolve(__dirname, '../../bs-config.json'));
let config = JSON.parse(configData);
let moduleExceptions = [
    '.announce-category'
];

if (config.module !== "") {
    let moduleExceptionsExport =  require(path.resolve(__dirname, '../../node_modules/' + config.module + '/backstopException.js'));
    moduleExceptions = moduleExceptions.concat(moduleExceptionsExport);
}

module.exports = [
    moduleExceptions
];
