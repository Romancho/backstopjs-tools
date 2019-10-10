const fs = require('fs');
const scenariosSimilarLocal = require('./test-local/similar-local');
const scenariosSeparateLocal = require('./test-local/separate-local');
var scenarios = scenariosSeparateLocal.concat(scenariosSimilarLocal);
let project = "Backstop-tools";
let configData = fs.readFileSync('./config.json');
let config = JSON.parse(configData);
if (config.module  !== "") {
    let scenariosExternal = require(config.module);
    scenarios = scenariosExternal.concat(scenarios);
    project = config.module;
}
console.log('Module: ' + project);
module.exports = {
    "id": project,
    "viewports": [{
    "label": "mobile",
    "width": 300,
    "height": 480
    },
    {
        "label": "tablet",
        "width": 700,
        "height": 1024
    },
    {
        "label": "ipad",
        "width": 990,
        "height": 1366
    },
    {
        "label": "large screen",
        "width": 1320,
        "height": 1200
    }],
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