import { Page } from '@playwright/test';

export class Radiofeild {

    constructor(private page: Page) {}

    async FavoriteOS(favalue: string) {
        await this.page.getByLabel(favalue).check();
    }

    async PreferredBrowser() {
        await this.page.getByLabel('Chrome').check();
    }

    async AutomationTools() {
        await this.page.getByLabel('Playwright').check();
    }
}