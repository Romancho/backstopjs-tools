const urls = require('../backstopUrls');
let [urlReference, urlTesting, cookieFile] = urls;

const reference_exeption = require('../backstopExeption');

const header =  {
    'label': 'header',
    'removeSelectors': [
        reference_exeption,
    ],
    'selectors' : [
        '.main-header'
    ],
};

const footer =  {
    'label': 'footer',
    'removeSelectors': [
        reference_exeption,
    ],
    'selectors' : [
        '.main-footer'
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
    header,
    footer
];

function addBasicTestSettings(scenarios) {
    return scenarios.map(scenario => {
        return {...scenario, ...basicTestSettings};
    });
}

module.exports = addBasicTestSettings(scenarios);