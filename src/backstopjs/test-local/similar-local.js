const path = require('path');
const urls = require(path.resolve(__dirname, '../backstopUrls-local'));
let breakpoints = require('../backstopViewports-local');
let [urlReference, urlTesting, cookieFile] = urls;
const reference_exeption = require(path.resolve(__dirname, '../backstopExeption-local'));

/*
const testHeader =  {
    'label': 'testHeader',
    'removeSelectors': [
        reference_exeption
    ],
    'selectors' : [
        'header'
    ],
};

const testFooter =  {
    'label': 'testFooter',
    'removeSelectors': [
        reference_exeption
    ],
    'selectors' : [
        'footer'
    ],
};
*/

const basicTestSettings = {
    referenceUrl: urlReference,
    cookiePath: cookieFile,
    url: urlTesting,
    readyEvent: '',
    readySelector: '',
    delay: 1000,
    hideSelectors: [],
    hoverSelector: '',
    clickSelector: '',
    postInteractionWait: 0,
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
    requireSameDimensions: true
};


const scenarios = [
    testHeader,
    testFooter
];

function addBasicTestSettings(scenarios) {
    return scenarios.map(scenario => {
        return {...scenario, ...basicTestSettings};
    });
}

module.exports = addBasicTestSettings(scenarios);