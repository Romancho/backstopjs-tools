const path = require('path');
const urls = require(path.resolve(__dirname, '../backstopUrls-local'));
let [urlReference, urlTesting, cookieFile] = urls;
const reference_exeption = require(path.resolve(__dirname, '../backstopExeption-local'));
console.log(urls);
const social = {
    'label': 'social',
    'cookiePath': cookieFile,
    'url': urlTesting + '/about',
    'referenceUrl': urlReference + '/about',
    'readyEvent': '',
    'readySelector': '',
    'delay': 1000,
    'removeSelectors': [],
    'hoverSelector': '',
    'clickSelector': '',
    'selectors' : [
        '.subscriber'
    ],
    'hideSelectors': []
};

const scenarios = [
    social
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