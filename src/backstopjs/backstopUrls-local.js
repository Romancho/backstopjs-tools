const clc = require("cli-color");
const fs = require('fs');
const path = require('path');

let configData = fs.readFileSync(path.resolve(__dirname, '../../bs-config.json'));
let config = JSON.parse(configData);

const urlTesting = config.testing;
const urlReference =  config.reference;
const cookieFile = path.resolve(__dirname, './backstop_data/engine_scripts/cookies.json');

if (config.module === "") {
    console.info(clc.greenBright.bold.bgBlack('Reference: ' + urlReference), clc.blueBright.bgBlack('\n\rTesting: ' + urlTesting + '\n\r'));
}
const backstopPaths = [
    urlReference,
    urlTesting,
    cookieFile
];

function backstopUrls(backstopPaths) {
    return backstopPaths;
}

module.exports = backstopUrls(backstopPaths);
