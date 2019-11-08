module.exports = async (page) => {
    const myLocalValue = "Test";
    const tweets = await page.$$('.menu__link');


    for (const tweet of tweets) {
        await page.$eval(tweet, (el, value) => el.innerHTML = value, myLocalValue)
    }
};