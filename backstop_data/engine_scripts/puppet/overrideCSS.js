const fs = require('fs');
const path = require('path');
let clc = require("cli-color");

let configData = fs.readFileSync(path.resolve(__dirname, '../../../bs-config.json'));
let config = JSON.parse(configData);

let BACKSTOP_TEST_CSS_OVERRIDE = '';

if (config.module.length > 0) {
    BACKSTOP_TEST_CSS_OVERRIDE = require('../../../node_modules/bs-playboy/tests/overrideCss.js');
    if (BACKSTOP_TEST_CSS_OVERRIDE === undefined) {
        console.log(clc.pink('NO CSS OVERRIDE FILE'));
    }
} else {
    BACKSTOP_TEST_CSS_OVERRIDE = 'html {background-image: none;} .bs-bgcolor {background: #DFFFF9!important;}';
}

module.exports = function (page, scenario) {
    // inject arbitrary css to override styles
    page.evaluate(`window._styleData = '${BACKSTOP_TEST_CSS_OVERRIDE}'`);
    page.evaluate(() => {
        var style = document.createElement('style');
        style.type = 'text/css';
        var styleNode = document.createTextNode(window._styleData);Task: #
        style.appendChild(styleNode);
        document.head.appendChild(style);
    });

    //console.log('BACKSTOP_TEST_CSS_OVERRIDE injected for: ' + scenario.label);
};
