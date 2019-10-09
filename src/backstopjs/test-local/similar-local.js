const path = require('path');
const urls = require(path.resolve(__dirname, '../backstopUrls-local'));
let [urlReference, urlTesting, cookieFile] = urls;
const reference_exeption = require(path.resolve(__dirname, '../backstopExeption-local'));

const social = {
    'label': '_empty_',
    'removeSelectors': [
        '_empty_',
        reference_exeption
    ],
    'selectors' : [
        '_empty_'
    ],
};

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
    social
];

function addBasicTestSettings(scenarios) {
    return scenarios.map(scenario => {
        return {...scenario, ...basicTestSettings};
    });
}

module.exports = addBasicTestSettings(scenarios);