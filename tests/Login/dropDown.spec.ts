import { test } from '../fixtures/Page.fixtures';
import testData from '../../data/Test-data.json';

test('login test', async ({ page, BasePage, Dropdownpage }) => {
    
    await page. goto('https://qamatters.github.io/demoautomationWebSite/fields.html');

    await BasePage.DropdownField();
    await Dropdownpage.dynamicDropdown(testData.dropdownvalue);
    await Dropdownpage.dynamicvalue(); 


        
       await page.screenshot({
        path: 'screenshots/Dropdownpage.png',
        fullPage: true
    });

    
});