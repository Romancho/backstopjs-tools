module.exports = async (page, scenario, vp) => {
    const myLocalValue = "6 нарядных платьев, которые ты будешь носить и после новогодней вечеринки ";
    await page.$$eval('.details_item a', (links, value) => links.forEach(el => el.innerHTML = value), myLocalValue);
};