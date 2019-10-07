var clc = require("cli-color");
require('dotenv').config({path: '.env'});
const btoa = function (str) {
    return new Buffer(str).toString('base64')
};

module.exports = async (page, scenario, vp) => {
    if(process.env.BACKSTOP_BASE_AUTH === true) {
        const authHeader = btoa(process.env.BACKSTOP_BASE_LOGIN + ':' + process.env.BACKSTOP_BASE_PASSWORD);
        puppet.userAgent(vp.userAgent);
        puppet.headers({
            'Authorization': 'Basic ' + authHeader
        });
        puppet.ignoreCertificateErrors();
    }

    if(vp.label === "mobile") {
      page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/68.0.3440.83 Mobile/15F79 Safari/604.1');
      console.log(clc.magentaBright("iPhone6 emulated"));
    }
    //await require('./loadCookies')(page, scenario);
    await page.setDefaultNavigationTimeout(300000);
};
