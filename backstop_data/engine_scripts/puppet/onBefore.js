const puppeteer = require('puppeteer');
var clc = require("cli-color");
const btoa = function (str) {
    return new Buffer(str).toString('base64')
};

module.exports = async (page, scenario, vp) => {
    console.log(process.env.BACKSTOP_BASE_AUTH);
    if(process.env.BACKSTOP_BASE_AUTH === "true") {
        await page.authenticate({username: process.env.BACKSTOP_BASE_LOGIN, password: process.env.BACKSTOP_BASE_PASSWORD});
    }

    if(vp.label === "mobile") {
        page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/68.0.3440.83 Mobile/15F79 Safari/604.1');
        console.log(clc.magentaBright("iPhone6 emulated"));
    }
    //await require('./loadCookies')(page, scenario);
    await page.setDefaultNavigationTimeout(300000);
};