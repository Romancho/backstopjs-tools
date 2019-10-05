const clc = require("cli-color");
require('dotenv').config({path: '.env'});
const urlTesting = process.env.BACKSTOP_TESTING_URL;
const urlReference =  process.env.BACKSTOP_REFERENCE_URL;
const cookieFile = 'backstop_data/engine_scripts/cookies.json';
console.info(clc.greenBright.blink.bold.bgBlack('Reference: ' + urlReference), clc.blueBright.blink.bgBlack('\n\rTesting: '+ urlTesting + '\n\r'));
const backstopPaths = [
    urlReference,
    urlTesting,
    cookieFile
];

function backstopUrls(backstopPaths) {
    return backstopPaths;
}

module.exports = backstopUrls(backstopPaths);