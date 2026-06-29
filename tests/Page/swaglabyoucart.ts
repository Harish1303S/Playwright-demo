import {Page, Locator, expect} from '@playwright/test'

export class swaglabyoucartPage{
constructor(private page: Page) {}
 
    async addToCart() {
        await this.page.getByRole('button', { name: 'Add to cart' }).click();
    }

    async openCart() {
      await this.page.locator("//a[@data-test='shopping-cart-link']").click();
   }

    async verifyProduct() {
        await expect(this.page.getByText('Sauce Labs Backpack')).toBeVisible();
    }


}