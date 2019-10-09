const fs = require('fs');
const path = require('path');
let configData = fs.readFileSync(path.resolve(__dirname, '../../../config.json'));
let config = JSON.parse(configData);
var clc = require("cli-color");

module.exports = async (page, scenario, vp) => {
    //console.log(config.baseAuth);
    if(config.baseAuth === true) {
        await page.authenticate({username: config.login, password: config.password});
        //console.log(config.login, config.password);
    }

    if(vp.label === "mobile") {
        page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/68.0.3440.83 Mobile/15F79 Safari/604.1');
        console.log(clc.magentaBright("iPhone6 emulated"));
    }
    //await require('./loadCookies')(page, scenario);
    await page.setDefaultNavigationTimeout(300000);
};