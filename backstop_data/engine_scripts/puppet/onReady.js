

var clc = require("cli-color");
var progressBar = require('../progress');

module.exports = async (page, scenario, vp) => {
  console.log(clc.yellow('SCENARIO > ' + scenario.label));
  await require('./fixtureText')(page, scenario, vp);
  await require('../progress');
  await require('./clickAndHoverHelper')(page, scenario);
  await require('./overrideCSS')(page, scenario);
  await page.setDefaultNavigationTimeout(300000);
};
