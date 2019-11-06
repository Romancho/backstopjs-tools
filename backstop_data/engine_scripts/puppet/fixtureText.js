module.exports = async (page) => {
    const myLocalValue = "Test";
    const tweets = await page.$$('.menu__link');
    for (let i = 0; i < tweets.length; i++) {
        await page.$eval('.menu__link', (el, value) => el.innerHTML = value, myLocalValue)
    }
};