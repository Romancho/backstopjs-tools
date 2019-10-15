const clc = require('cli-color');
const fs = require('fs');
const path = require('path');

let configData = fs.readFileSync(path.resolve(__dirname, '../../config.json'));
let config = JSON.parse(configData);
let moduleExeption;

if (config.module !== "") {
    moduleExeption =  fs.readFileSync(path.resolve(__dirname, '../../node_modules/' + config.module + '/backstooExeption';
}

module.exports = [
    moduleExeption,
    ".disclamer"
];
