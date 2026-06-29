import {Page, Locator, expect} from '@playwright/test'

export class saucelabsplatfromPage{
constructor(private page: Page) {}
async paltfrom(){
    await this.page.locator("//div[contains(@class,'MuiSelect-select')]").nth(1).click();
}
async  selectPlatform() {
    await this.page.locator("//li[@role='option' and contains(text(),'14')]").click();
}
async clickAIDrivenTestAuthoring() {
        await this.page.getByRole('button', { name: 'AI-Driven Test Authoring' }).click();
    }
    async verifyAIDrivenTestAuthoringText() {
        await expect(this.page.getByText('Sauce AI for Test Authoring generates resilient, across-platform tests in minutes— so your team can stop maintaining and start shipping.')).toBeVisible();
    }
   async clickAIPoweredInsights() {
        await this.page.getByRole('button', { name: 'AI-Powered Insights' }).click();
    }
    async verifyAIPoweredInsightsText() {
    await expect(this.page.getByText('Transform billions of raw data points into actionable insights. AI-powered Insights delivers real-time analytics and visibility so teams can track performance, act quickly, and deliver quality apps faster than ever.')).toBeVisible();
}

    async clickMobileAppTesting() {
        await this.page.getByRole('button', { name: 'Mobile App Testing' }).click();
    }
    async verifyMobileAppTestingText() {
    await expect(this.page.getByText('Release high-quality apps without the headache of managing infrastructure.')).toBeVisible();
}

    async clickWebTesting() {
        await this.page.getByRole('button', { name: 'Web Testing' }).click();
    }
   async verifyWebTestingText() {
    await expect(
        this.page.getByText('Accelerate test automation with the most scalable and robust infrastructure.')).toBeVisible();
}

    async clickMobileAppDistribution() {
        await this.page.getByRole('button', { name: 'Mobile App Distribution' }).click();
    }
 async verifyMobileAppDistributionText() {
    await expect(this.page.getByText('Distribute Android and iOS apps on a secure, enterprise-grade platform.')).toBeVisible();
}
    async clickErrorReporting() {
        await this.page.getByRole('button', { name: 'Error Reporting' }).click();
    }
async verifyErrorReportingText() {
    await expect(this.page.getByText('Find and fix crashes up to 50% faster.')).toBeVisible();
}
    async clickVisualTesting() {
        await this.page.getByRole('button', { name: 'Visual Testing' }).click();
    }
    async verifyVisualTestingText() {
    await expect(this.page.getByText('Automate UI testing to catch visual issues early.')).toBeVisible();
}
}