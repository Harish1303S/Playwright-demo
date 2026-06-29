import {test} from '@playwright/test';
import { LoginPage } from '../Page/LoginPage';
import testData from '../../data/Test-data.json';

test('login test', async ({ page }) => {

    const loginPage = new LoginPage(page);


    await page.goto('https://www.saucedemo.com/');
    await loginPage.Username(testData.User.username);
    await loginPage.Password(testData.User.password);
    await loginPage.Login();
    
       await page.screenshot({
        path: 'screenshots/LoginSuccess.png',
        fullPage: true
    });
});