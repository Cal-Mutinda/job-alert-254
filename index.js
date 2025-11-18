const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage()



    await page.goto('kerra.go.ke/job-vacancies/', {
        timeout: 0, 

    });

       await page.screenshot({ path: "screenshots/jobs.png" });


    await page.goto('https://www.myjobmag.co.ke/jobs', {
        timeout: 0, 

    });

    

    const grabText = await page.evaluate(() => {
        const txtText = document.querySelector(".job-list .job-info .job-desc ");
        return txtText.innerText;


    });

    console.log(grabText);

    await browser.close();
})();


