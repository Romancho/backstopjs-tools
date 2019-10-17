const path = require('path');
const urls = require(path.resolve(__dirname, '../backstopUrls-local'));
let [urlReference, urlTesting, cookieFile] = urls;
let breakpoints = require('../backstopViewports-local');

const reference_exeption = require(path.resolve(__dirname, '../backstopExeption-local'));

// Пример локального сценария

// const social = {                                       // Правим название константы (должно быть уникально)
//     'label': 'social',                                 // Правим название сценария (используется в консоли как --filter=social)
//     'cookiePath': cookieFile,
//     'referenceUrl': urlReference + '/about',           // Добавляем урл нужной страницы, которую скриним
//     'url': urlTesting + '/about',                      // Дублируем урл нужной страницы, которую тестим
//     'readyEvent': '',
//     'readySelector': '',
//     'delay': 1000,
//     'removeSelectors': [],                             // Тут селектор в виде '.selector', которые исключаем (при использовании bs-конфига есть предопределeнный набор reference_exeption)
//     'hoverSelector': '',                               // Тут селектор в виде '.selector', если на него надо навести
//     'clickSelector': '',                               // Тут селектор в виде '.selector', если на него надо кликнуть
//     'selectors' : [
//         '.subscriber'                                  // Тут селектор в виде '.selector', какой мы проверяем
//     ],
//     'hideSelectors': [],
//     'viewports': [                                    // Брейкпоинты, если нужно проверять только в определенном разрешении
//         breakpoints.ipad,
//         breakpoints.desktop
//     ]
// };

const scenarios = [
    //social,                                            // Вызов константы
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