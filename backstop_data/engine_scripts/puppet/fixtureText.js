module.exports = async (page) => {
    const myLocalValue = "test 123";
    const tweets = await page.$$('.menu__link');

    function getText(linkText) {
        linkText = linkText.replace(/\r\n|\r/g, "\n");
        linkText = linkText.replace(/\ +/g, " ");

        // Replace &nbsp; with a space
        var nbspPattern = new RegExp(String.fromCharCode(160), "g");
        return linkText.replace(nbspPattern, " ");
    }

    for (let i = 0; i < tweets.length; i++) {
        let valueHandle = await tweets[i].getProperty('innerText');
        let linkText = await valueHandle.jsonValue();
        //await page.$eval(tweets[i], (el, value) => el.innerHTML = value, myLocalValue)
        const text = getText(linkText);
        console.log(text);
        return tweets[i];
    }
};