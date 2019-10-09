const fs = require('fs');
var scenarios = null;
let configData = fs.readFileSync('./config.json');
let config = JSON.parse(configData);
console.log('Module: ' + config.module);
if (!config.module.hasOwnProperty() || config.module !== false) {
    scenarios = require(config.module);
}
module.exports = {
    "id": config.module,
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