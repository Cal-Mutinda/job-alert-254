const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage()



    await page.goto('https://www.myjobmag.co.ke/jobs', {
        timeout: 0, // disables timeout

    });

    //    await page.screenshot({ path: "screenshots/jobs.png" });

    const grabText = await page.evaluate(() => {
        const txtText = document.querySelector(".job-list .job-info .job-desc ");
        return txtText.innerText;


    });

    console.log(grabText);

    await browser.close();
})();
