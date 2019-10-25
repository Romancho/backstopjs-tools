const path = require('path');
const urls = require(path.resolve(__dirname, '../backstopUrls-local'));
let [urlReference, urlTesting, cookieFile] = urls;
let breakpoints = require('../backstopViewports-local');

const reference_exeption = require(path.resolve(__dirname, '../backstopExeption-local'));

// const mobileDropMenu = {
//     'label': 'mobileDropMenu',
//     'cookiePath': cookieFile,
//     'url': urlTesting,
//     'referenceUrl': urlReference,
//     'readyEvent': '',
//     'readySelector': '',
//     'delay': 3000,
//     'removeSelectors': [
//         '.disclamer',
//         reference_exeption
//     ],
//     'hoverSelector': '',
//     'clickSelector': [
//         '.btn-menu-mobile'
//     ],
//     'selectors' : [
//         'body'
//     ],
//     'hideSelectors': [],
//     'viewports': [
//         breakpoints.mobile
//     ]
// };

const scenarios = [
    //random
];

const basicTestSettings = {
    postInteractionWait: 3000,
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