module.exports = async (page, scenario, vp) => {
    const myLocalValue = "Test text";
    await page.$$eval('.details_item a', (links, value) => links.forEach(el => el.innerHTML = value), myLocalValue);
};