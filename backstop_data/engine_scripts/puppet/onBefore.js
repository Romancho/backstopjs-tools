const fs = require('fs');
const path = require('path');
let configData = fs.readFileSync(path.resolve(__dirname, '../../../bs-config.json'));
let config = JSON.parse(configData);
var clc = require("cli-color");

module.exports = async (page, scenario, vp) => {

    //console.log(config.baseAuth);
    if(config.baseAuth === true) {
        await page.authenticate({username: config.baseLogin, password: config.basePassword});
        //console.log(config.baseLogin, config.basePassword);
    }

    if(vp.label === "mobile") {
        page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/68.0.3440.83 Mobile/15F79 Safari/604.1');
        console.log(clc.magentaBright("Mobile emulated"));
    }
    if(vp.label === "smartphone") {
        page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/68.0.3440.83 Mobile/15F79 Safari/604.1');
        console.log(clc.magentaBright("XScreen mobile emulated"));
    }

    var hostFile = fs.readFileSync(path.resolve(__dirname, '../../../hosts.txt'), 'utf8').split('\n');
    var hosts = {};
    for (var i = 0; i < hostFile.length; i++) {
        var frags = hostFile[i].split(' ');
        if (frags.length > 1 && frags[0] === '0.0.0.0') {
            hosts[frags[1].trim()] = true;
        }
    }

//When loading a page I then filter out requests for these domains (and optionally images):

    page.on('request', request => {
        var domain = null;
        var frags = request.url().split('/');
        if (frags.length > 2) {
            domain = frags[2];
        }

        // just abort if found
        if (hosts[domain] === true) {
            request.abort();
        } else {
            request.continue();
        }
    });

    await page.setRequestInterception(true);
    await require('./loadCookies')(page, scenario);
    await page.setDefaultNavigationTimeout(300000);
};
