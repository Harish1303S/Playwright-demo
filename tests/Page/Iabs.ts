import {Page, Locator, expect} from '@playwright/test'

// The Addtocartpage class represents the Add to Cart page of the application and provides methods to interact with it. It includes methods for logging in, adding a product to the cart, opening the cart, and verifying the product in the cart.
export class Addtocartpage{

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
 async getProductName() {
       await this.page.getByRole('link', { name: 'Sauce Labs Backpack' }).nth(1).click();
    }

}

// The Aboutpage class represents the About page of the application and provides methods to interact with it.
export class Aboutpage{

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
async OpenMenu() {
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
}
async clickAbout() {
    await this.page.getByRole('link', { name: 'About' }).click();
}
async clickproduct(){
    await this.page.locator("//div[contains(@class,'navMenuLabel') and normalize-space()='Products']").click();
}
async clickSupportedBrowsersAndDevices() {
    //await this.page.getByRole('link', {name: 'Supported browsers & devices'}).click();
    await this.page.locator("//a[.//span[normalize-space()='Supported browsers & devices']]").first().click();
}

    
}

// Tabpage class is used to handle the login functionality and navigation to the About page in the application. It provides methods to fill in the username and password, click the login button, open the menu, navigate to the About page, and interact with elements on that page.
export class Tabpage{

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
async OpenMenu() {
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
}
async clickAbout() {
    await this.page.getByRole('link', { name: 'About' }).click();
}

}