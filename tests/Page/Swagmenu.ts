import {Page, Locator, expect} from '@playwright/test'

export class swagmenupage{
constructor(private page: Page) {}
 
async OpenMenu() {
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
}
async clickAbout() {
    await this.page.getByRole('link', { name: 'About' }).click();
}
}