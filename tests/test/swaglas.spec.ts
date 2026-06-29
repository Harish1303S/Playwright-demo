import { test } from '../fixtures/Page.fixtures';
import testData from '../../data/Test-data.json';
import { swaglabproductPage } from '../Page/swaglabproduct';
//import { Addtocartpage } from '../Page/Iabs';

// The swaglabyoucartPage class represents the Add to Cart page of the application and provides methods to interact with it. It includes methods for logging in, adding a product to the cart, opening the cart, and verifying the product in the cart.
test('Add to Cart test', async ({ page , swaglabyoucartPage, swaglabproductPage }) => {
await page.goto('https://www.saucedemo.com/inventory.html');
    //await swaglabLoginPage.Username(testData.User.username);
    //await swaglabLoginPage.Password(testData.User.password);
    //await swaglabLoginPage.Login();
    
     const productName = await swaglabproductPage.getProductName();
await swaglabyoucartPage.addToCart();
await swaglabyoucartPage.openCart();
await swaglabyoucartPage.verifyProduct();
   await page.screenshot({
        path: 'screenshots/cartSuccess.png',
        fullPage: true
    });
});

// The Aboutpage class represents the About page of the application and provides methods to interact with it. It includes methods for logging in, opening the menu, clicking on various links, and selecting a platform.
test('About page test', async ({ page , saucelabsplatfromPage, swagmenupage, saucelabproductPage }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');
     await swagmenupage.OpenMenu();
    await swagmenupage.clickAbout();
    
    await saucelabproductPage.haveover();
    await saucelabproductPage.clickproduct();
    await saucelabproductPage.clickSupportedBrowsersAndDevices();
    await page.mouse.wheel(0, 1000);
    await saucelabsplatfromPage.paltfrom();
    await saucelabsplatfromPage.selectPlatform();
       await page.screenshot({
        path: 'screenshots/AboutPageSuccess.png',
        fullPage: true
    });
});

// The Tabpage class represents the Tab page of the application and provides methods to interact with it. It includes methods for logging in, opening the menu, and clicking on the About link.

test('Tab page test', async ({ page , saucelabsplatfromPage, swaglabLoginPage, swagmenupage }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

     await swagmenupage.OpenMenu();
    await swagmenupage.clickAbout();
    await page.mouse.wheel(0, 1000);
    await saucelabsplatfromPage.clickAIDrivenTestAuthoring();
    await saucelabsplatfromPage.verifyAIDrivenTestAuthoringText();
    await saucelabsplatfromPage.clickAIPoweredInsights();
    await saucelabsplatfromPage.verifyAIPoweredInsightsText();
    await saucelabsplatfromPage.clickMobileAppTesting();
    await saucelabsplatfromPage.verifyMobileAppTestingText();
    await saucelabsplatfromPage.clickWebTesting();
    await saucelabsplatfromPage.verifyWebTestingText();
    await saucelabsplatfromPage.clickMobileAppDistribution();
    await saucelabsplatfromPage.verifyMobileAppDistributionText();
    await saucelabsplatfromPage.clickErrorReporting();
    await saucelabsplatfromPage.verifyErrorReportingText();
    await saucelabsplatfromPage.clickVisualTesting();
    await saucelabsplatfromPage.verifyVisualTestingText();

       await page.screenshot({
        path: 'screenshots/AboutPageSuccess.png',
        fullPage: true
    });
});
