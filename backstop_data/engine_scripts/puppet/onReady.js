var clc = require("cli-color");

module.exports = async (page, scenario, vp) => {
  console.log(clc.yellow('SCENARIO > ' + scenario.label));
  await require('./fixtureText')(page, scenario);
  await require('./clickAndHoverHelper')(page, scenario);
  await require('./overrideCSS')(page, scenario);
  await page.setDefaultNavigationTimeout(300000);
};
