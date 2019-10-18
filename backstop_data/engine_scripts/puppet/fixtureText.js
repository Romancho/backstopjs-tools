module.exports = async (page, scenario, vp) => {
    const tweets = await page.$$('.menu__link');

    const myLocalValue = "test 123";
    for (let i = 0; i < tweets.length; i++) {
        await page.$eval(tweets[i], (el, value) => el.innerText = value, myLocalValue)
    }
};