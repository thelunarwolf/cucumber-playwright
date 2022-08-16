const { Given, When, Then, BeforeAll, Before, setDefaultTimeout, After, AfterAll } = require("@cucumber/cucumber");
const playwright = require("playwright");
const fs = require("fs");

setDefaultTimeout(600000);

BeforeAll(async function () { 
    global.browser = await playwright.chromium.launch({
        headless: true,
        slowMo: 1000,
    });
})

// close the browser
AfterAll(async function () { 
    await global.browser.close();
})

Before(async function () {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function (scenario) { 
  const png = await global.page.screenshot({ path: './screenshots/' + scenario.pickle.name + '.png' });
  var decodedImage = new Buffer(png, 'base64');
  this.attach(decodedImage, 'image/png');
  await global.page.close();
  await global.context.close();
})

Given("Nav opens Playwright website", { timeout: 60 * 1000 }, async function () {
    await global.page.goto('https://playwright.dev/');
});

When("Nav goes to Docs section", async function () {
    await global.page.click('text=Docs');
});

Then("Nav sees all steps for installation", async function () {
    await global.page.click('text=How to install Playwright');
    await global.page.waitForSelector('text=Installing Playwright');
});