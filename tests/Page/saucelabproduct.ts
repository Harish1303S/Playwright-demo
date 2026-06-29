import {Page, Locator, expect} from '@playwright/test'

export class saucelabproductPage{
constructor(private page: Page) {}
 async clickproduct(){
    await this.page.locator("//div[normalize-space()='Products']/following-sibling::div//img[@alt='expand menu']").click();
}
async haveover(){
    await this.page.locator("//div[normalize-space()='Products']/following-sibling::div//img[@alt='expand menu']").hover();
}
async clickSupportedBrowsersAndDevices() {
    //await this.page.getByRole('link', {name: 'Supported browsers & devices'}).click();
    await this.page.locator("//a[.//span[normalize-space()='Supported browsers & devices']]").first().click();
}

}