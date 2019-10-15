const path = require('path');
const urls = require(path.resolve(__dirname, '../backstopUrls-local'));
let [urlReference, urlTesting, cookieFile] = urls;
let breakpoints = require('../backstopViewports-local');

const reference_exeption = require(path.resolve(__dirname, '../backstopExeption-local'));



const scenarios = [
    //social,
    //authPop
];

const basicTestSettings = {
    postInteractionWait: 0,
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.9,
    requireSameDimensions: true
};

function addBasicTestSettings(scenarios) {
    return scenarios.map(scenario => {
        return {...scenario, ...basicTestSettings};
    });
}

module.exports =  addBasicTestSettings(scenarios);