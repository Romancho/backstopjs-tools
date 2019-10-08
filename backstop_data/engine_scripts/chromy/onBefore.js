require('dotenv').config({path: '.env'});
const btoa = function (str) {
  return new Buffer(str).toString('base64')
};

module.exports = function (chromy, scenario, vp) {
  if(process.env.BACKSTOP_BASE_AUTH === true) {
    //require('./loadCookies')(chromy, scenario);
    const authHeader = btoa(process.env.BACKSTOP_BASE_LOGIN + ':' + process.env.BACKSTOP_BASE_PASSWORD);
    chromy.userAgent(vp.userAgent);
    chromy.headers({
      'Authorization': 'Basic ' + authHeader
    });
    chromy.ignoreCertificateErrors();
  }

  if(vp.label === "mobile") {
    chromy.emulate("iPhone6");
    console.log("iPhone6 emulated");
  }
  // IGNORE ANY CERT WARNINGS
  chromy.ignoreCertificateErrors();
};