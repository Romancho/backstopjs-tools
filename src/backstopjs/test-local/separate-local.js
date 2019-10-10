const path = require('path');
const urls = require(path.resolve(__dirname, '../backstopUrls-local'));
let [urlReference, urlTesting, cookieFile] = urls;
const reference_exeption = require(path.resolve(__dirname, '../backstopExeption-local'));

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
    'hideSelectors': [],
    'viewports': [
        {
            "label": "ipad",
            "width": 990,
            "height": 1366
        },
        {
            "label": "large screen",
            "width": 1320,
            "height": 1200
        }
    ]
};

const authPop = {
    'label': 'authPop',
    'cookiePath': cookieFile,
    'url': urlTesting,
    'referenceUrl': urlReference,
    'readyEvent': '',
    'readySelector': '',
    'delay': 3000,
    'removeSelectors': [],
    'hoverSelector': '',
    'clickSelector': [
        '.btn-menu'
    ],
    'selectors' : [
        '.main-header'
    ],
    'hideSelectors': []
};

const scenarios = [
    social,
    authPop
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