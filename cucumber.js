// const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
// const { chromium } = require("playwright");

// setDefaultTimeout(60000)

// // launch the browser 
// BeforeAll(async function () {
//     global.browser = await chromium.launch({
//         headless: true,
//         slowMo: 1000,
//     });
// });

// // close the browser
// AfterAll(async function () {
//     await global.browser.close();
// });

// // Create a new browser context and page per scenario
// Before(async function () {
//     global.context = await global.browser.newContext();
//     global.page = await global.context.newPage();
// });

// // Cleanup after each scenario
// After(async function () {
//     await global.page.close();
//     await global.context.close();
// });

// Before(async function () {
//     global.context = await global.browser.newContext();
//     global.page = await global.context.newPage();
// });

// // Cleanup after each scenario
// After(async function (scenario) {
//     const world = this;
//     return browser.takeScreenshot().then(function (screenShot) {
//         world.attach(screenShot, 'image/png');
//     });
//     // await global.page.close();
//     // await global.context.close();
// })


module.exports = {
    default: `--format-options '{"theme":{"feature keyword":["magenta","bold"],"scenario keyword":["magenta","bold"],"step keyword":["bold"]}}' --format html:cucumber-report.html --publish`,
};