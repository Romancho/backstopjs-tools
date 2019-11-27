module.exports = async (page, scenario, vp) => {
    if(scenario.fixturesSelector && scenario.fixturesInnerValue) {
        const fixturesInnerValue = scenario.fixturesInnerValue;
        const fixturesInnerSelector = scenario.fixturesSelector;
        await page.$$eval(fixturesInnerSelector, (links, value) => links.forEach(el => el.innerHTML = value), fixturesInnerValue);
    }
};