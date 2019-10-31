const path = require('path');
const urls = require(path.resolve(__dirname, '../backstopUrls-local'));
let [urlReference, urlTesting, cookieFile] = urls;
let breakpoints = require('../backstopViewports-local');

const reference_exeption = require(path.resolve(__dirname, '../backstopExeption-local'));

// const comments = {
//     'label': 'comments',
//     'cookiePath': cookieFile,
//     'url': urlTesting + '/scaffolding/comments',
//     'referenceUrl': urlReference + '/scaffolding/comments',
//     'readyEvent': '',
//     'readySelector': '',
//     'delay': 3000,
//     'removeSelectors': [
//         '.disclamer',
//         '.main-footer',
//         '.main-header',
//         reference_exeption
//     ],
//     'hoverSelector': '',
//     'clickSelector': [],
//     'selectors' : [
//         '.scaffoldings_item'
//     ],
//     'hideSelectors': [],
//     'viewports': []
// };

const scenarios = [
    //comments
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