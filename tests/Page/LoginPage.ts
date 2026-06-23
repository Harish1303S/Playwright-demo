import {Page, Locator} from '@playwright/test'

export class LoginPage{
constructor(private page: Page) {}
 
async Username (username: string) { 
await this.page.locator('[data-test="username"]').fill(username);
} 
async Password(password: string) { 
await this.page.locator('[data-test="password"]').fill(password);
} 
async Login() {
await this.page.locator('[data-test="login-button"]').click(); 
} 
async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }
}