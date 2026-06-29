import {Page, Locator} from '@playwright/test'

export class swaglabproductPage{
constructor(private page: Page) {}
 
async getProductName() {
       await this.page.getByRole('link', { name: 'Sauce Labs Backpack' }).nth(1).click();
    }

}