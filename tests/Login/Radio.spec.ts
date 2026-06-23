import {test, expect} from '@playwright/test';
import { Basefeild } from '../Page/Basepage';
import { Radiofeild } from '../Page/Radiofeild';
//import { defineConfig } from '@playwright/test';
import testData from '../../data/Test-data.json';
//export default defineConfig({
// reporter: 'html',
//});

test('login test', async ({ page }) => {

    const BasePage = new Basefeild(page);
    const Radiopage = new Radiofeild(page);
    
    //await BasePage.gotoHomePage();
    
    await page. goto('https://qamatters.github.io/demoautomationWebSite/fields.html');

    await BasePage.RadioField();

    await Radiopage.FavoriteOS(testData.FavouriteOS);
    await expect(page.getByLabel(testData.FavouriteOS)).toBeChecked();

    await Radiopage.PreferredBrowser();
    await expect(page.getByLabel('Chrome')).toBeChecked();

    await Radiopage.AutomationTools();
    await expect(page.getByLabel('Playwright')).toBeChecked();
    
    await page.screenshot({
        path: 'screenshots/Radiopage.png',
        fullPage: true
    });
    
});