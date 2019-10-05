const urls = require('../backstopUrls');
let [urlReference, urlTesting, cookieFile] = urls;
const reference_exeption = require('../backstopExeption');

// Custom variables start with some_. You must change them as your task demand

const some_page = {
    'label': 'some_name',
    'cookiePath': cookieFile,
    'url': urlTesting + '/some_url',
    'referenceUrl': urlReference + '/some_url',
    'readyEvent': '',
    'readySelector': '',
    'delay': 1000,
    'removeSelectors': [
        reference_exeption
    ],
    'hoverSelector': '',
    'clickSelector': '',
    'selectors' : [
        '.some_selector'
    ],
    'hideSelectors': []
};

const some_page2 = {
    'label': 'some_name2',
    'cookiePath': cookieFile,
    'url': urlTesting + '/some_url2',
    'referenceUrl': urlReference + '/some_url2',
    'readyEvent': '',
    'readySelector': '',
    'delay': 1000,
    'removeSelectors': [
        reference_exeption
    ],
    'hoverSelector': '',
    'clickSelector': '',
    'selectors' : [
        '.some_selector2'
    ],
    'hideSelectors': []
};
const scenarios = [
    some_page,
    some_page2
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