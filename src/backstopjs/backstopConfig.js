const clc = require('cli-color');
const fs = require('fs');
let breakpoints = require('./backstopViewports-local');
const scenariosSimilarLocal = require('./test-local/similar-local');
const scenariosSeparateLocal = require('./test-local/separate-local');
var scenarios = scenariosSeparateLocal.concat(scenariosSimilarLocal);
let project = "Default";
let configData = fs.readFileSync('./config.json');
let config = JSON.parse(configData);
if (config.module  !== "") {
    let scenariosExternal = require(config.module);
    scenarios = scenariosExternal.concat(scenarios);
    project = config.module;
}

project  !== "Default" ? console.log('Module: ' + project) : console.log(clc.magentaBright.bold('Module: ' + clc.redBright.blink.bold(project)));

module.exports = {
    "id": project,
    "viewports": [
        breakpoints.mobile,
        breakpoints.tablet,
        breakpoints.ipad,
        breakpoints.desktop
    ],
    "onBeforeScript": "puppet/onBefore.js",
    "onReadyScript": "puppet/onReady.js",
    "scenarios": scenarios,
    "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "engine_scripts": "backstop_data/engine_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
    },
    "ci": {
        "format" :  "junit"
    },
    "report": ["CLI","browser"],
    "engine": "puppeteer",
    "engineOptions": {
        "ignoreHTTPSErrors": true,
        "args": [
            "--disable-setuid-sandbox",
            "--no-first-run",
            "--no-sandbox",
            "--no-zygote"
        ]
    },

    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 100,

    "debug": false,
    "debugWindow": false
};