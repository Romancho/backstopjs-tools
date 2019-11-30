const path = require('path');
const urls = require(path.resolve(__dirname, '../backstopUrls-local'));
let breakpoints = require('../backstopViewports-local');
let [urlReference, urlTesting, cookieFile] = urls;
const reference_exception = require(path.resolve(__dirname, '../backstopException-local'));

// Fixtures
let fixturesSample = require(path.resolve(__dirname, '../backstopFixtures'));
let fixtureDefault = fixturesSample.local["1"];

const social = {};

// const abs =  {
//     'label': 'abs',
//     'removeSelectors': [
//     ],
//     'selectors' : [
//         '.main-navigation'
//     ],
//     'fixturesSelector': '.top-menu .swiper-slide a',
//     'fixturesValue': fixtureDefault
// };

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
    //social
    // abs
];

function addBasicTestSettings(scenarios) {
    return scenarios.map(scenario => {
        return {...scenario, ...basicTestSettings};
    });
}

module.exports = addBasicTestSettings(scenarios);