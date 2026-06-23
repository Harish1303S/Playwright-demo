import {Page, Locator} from '@playwright/test'

export class Basefeild{
constructor(private page: Page) {}

//async gotoHomePage(){
     //   await this.page.goto('https://qamatters.github.io/demoautomationWebSite/fields.html');
   // }
        async TextField() {
        await this.page.getByRole('link', { name: 'Text Field' }).click();
    }
        async RadioField() {
        await this.page.getByRole('link', { name: 'Radio Field' }).click();
    }
       async CheckboxField() {
        await this.page.getByRole('link', { name: 'Checkbox Field' }).click();
    }
    async FileUpload() {
        await this.page.getByRole('link', { name: 'File Upload' }).click();
    }
    async FileDownload() {
        await this.page.getByRole('link', { name: 'File Download' }).click();
    }
    async DropdownField() {
        await this.page.getByRole('link', { name: 'Dropdown Field' }).click();
    }
    async IFrame() {
        await this.page.getByRole('link', { name: 'iFrame' }).click();
    }
    async DateTime() {
        await this.page.getByRole('link', { name: 'DateTime' }).click();
    }
    async Links() {
        await this.page.getByRole('link', { name: 'Links' }).click();
    }
    async RangeSlider() {
        await this.page.getByRole('link', { name: 'Range Slider' }).click();
    }
    async ColorPicker() {
        await this.page.getByRole('link', { name: 'Color Picker' }).click();
    }
    async TextArea() {
        await this.page.getByRole('link', { name: 'Text Area' }).click();
    }
    async TestLocators() {
        await this.page.getByRole('link', { name: 'Test Locators' }).click();
    }
    async TestWaits() {
        await this.page.getByRole('link', { name: 'Test Waits' }).click();
    }
    async TestTables() {
        await this.page.getByRole('link', { name: 'Test Tables' }).click();
    }
    async TestAlerts() {
        await this.page.getByRole('link', { name: 'Test Alerts' }).click();
    }
    async DynamicLocator() {
        await this.page.getByRole('link', { name: 'Dynamic Locator' }).click();
    }
    
}