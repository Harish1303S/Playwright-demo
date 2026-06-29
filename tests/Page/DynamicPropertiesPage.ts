import { expect, Page } from '@playwright/test';

export class DynamicPropertiesPage {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://demoqa.com/dynamic-properties');
    }

    async verifyEnableAfterButton() {
        await expect(
            this.page.getByRole('button', { name: 'Will enable 5 seconds' })
        ).toBeEnabled({ timeout: 6000 });
    }

    async verifyColorChangeButton() {
        await expect(
            this.page.getByRole('button', { name: 'Color Change' })
        ).toBeVisible();
    }

    async clickVisibleAfterButton() {
        await this.page.getByRole('button', { name: 'Visible After 5 Seconds' }).click();
    }

    async verifyVisibleAfterButton() {
        await expect(
            this.page.getByRole('button', { name: 'Visible After 5 Seconds' })
        ).toBeVisible({ timeout: 6000 });
    }
}