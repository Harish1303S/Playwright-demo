import { test, expect } from '../fixtures/Page.fixtures';
import testData from '../../data/Test-data.json';

test('login test', async ({ page, BasePage, RadioPage }) => {
    
    await page. goto('https://qamatters.github.io/demoautomationWebSite/fields.html');

    await BasePage.RadioField();

    await RadioPage.FavoriteOS(testData.FavouriteOS);
    await expect(page.getByLabel(testData.FavouriteOS)).toBeChecked();

    await RadioPage.PreferredBrowser();
    await expect(page.getByLabel('Chrome')).toBeChecked();

    await RadioPage.AutomationTools();
    await expect(page.getByLabel('Playwright')).toBeChecked();
    
    await page.screenshot({
        path: 'screenshots/Radiopage.png',
        fullPage: true
    });
    
});