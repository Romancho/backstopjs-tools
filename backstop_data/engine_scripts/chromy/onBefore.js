module.exports = function (chromy, scenario, vp) {
  //require('./loadCookies')(chromy, scenario);
  if(vp.label === "mobile") {
    chromy.emulate("iPhone6");
    console.log("iPhone6 emulated");
  }
  // IGNORE ANY CERT WARNINGS
  chromy.ignoreCertificateErrors();
};
