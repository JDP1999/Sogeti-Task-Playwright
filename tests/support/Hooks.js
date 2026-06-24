const { Before, After, Status, setDefaultTimeout } = require("@cucumber/cucumber");

const { chromium } = require("@playwright/test");

setDefaultTimeout(60000);

Before(async function () {

 this.browser = await chromium.launch({ headless: false });

 this.context = await this.browser.newContext();

 this.page = await this.context.newPage();

 this.context.setDefaultTimeout(5000);

 this.context.setDefaultNavigationTimeout(60000);

});

After(async function (scenario) {

 if (scenario.result?.status === Status.FAILED && this.page) {

   const screenshot = await this.page.screenshot({ fullPage: true });

   await this.attach(screenshot, "image/png");

 }

 await this.page?.close();

 await this.context?.close();

 await this.browser?.close();

});