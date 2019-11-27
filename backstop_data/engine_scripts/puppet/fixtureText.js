module.exports = async (page, scenario, vp) => {
    if(scenario.fixturesSelector && scenario.fixturesValue) {
        const fixturesValue = scenario.fixturesValue;
        const fixturesSelector = scenario.fixturesSelector;
        await page.$$eval(fixturesSelector, (links, value) => links.forEach(el => el.innerHTML = value), fixturesValue);
    }
};