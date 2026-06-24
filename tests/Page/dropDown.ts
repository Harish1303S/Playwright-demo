import { Page } from '@playwright/test';

export class Dropdownfield {

    constructor(private page: Page) {}

   async dynamicDropdown(dropdownvalue: string) {
   await this.page.locator("//input[contains(@id,'dynamic')]").fill(dropdownvalue);
   }
   //await this.page.locator("//input[contains(@id,'dynamic')]/following::li[text()='Grape']").click();
   async dynamicvalue(){
   await this.page.locator("//*[input[contains(@id,'dynamic')]]//li[text()='Grape']").click();
   
    }

    

} 