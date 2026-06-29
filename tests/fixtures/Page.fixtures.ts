import { test as base} from '@playwright/test';
import { Basefeild } from '../Page/Basepage';
import { Radiofeild } from '../Page/Radiofeild';
import { Dropdownfield } from '../Page/dropDown';
import {swaglabproductPage} from '../Page/swaglabproduct';
import {swaglabyoucartPage} from '../Page/swaglabyoucart';
import {swaglabLoginPage} from '../Page/Swaglabloginpage';
import { swagmenupage } from '../Page/Swagmenu';
import { saucelabproductPage } from '../Page/saucelabproduct';
import { saucelabsplatfromPage } from '../Page/saucelabsplatfrom';
import { WebTablePage } from '../Page/WebTablePage';
import { DynamicPropertiesPage } from '../Page/DynamicPropertiesPage';

type MyFixtures = {
  BasePage: Basefeild;
  RadioPage: Radiofeild;
  Dropdownpage: Dropdownfield;
  WebTablePage: WebTablePage;
  swaglabproductPage: swaglabproductPage;
  swaglabyoucartPage: swaglabyoucartPage;
  swaglabLoginPage: swaglabLoginPage;
  swagmenupage: swagmenupage;
  saucelabproductPage: saucelabproductPage;
  saucelabsplatfromPage: saucelabsplatfromPage;
  DynamicPropertiesPage: DynamicPropertiesPage;

};
export { expect } from '@playwright/test';

export const test = base.extend<MyFixtures>({
  // Override context to use storage state
  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: 'data/storageState.json', // ← inject here
    });
    await use(context);
    await context.close();
  },
  BasePage: async ({ page }, use) => {
    await use(new Basefeild(page));
  },

  RadioPage: async ({ page }, use) => {
    await use(new Radiofeild(page));
  },
  Dropdownpage: async({ page }, use) => {
   await use(new Dropdownfield(page)); 
  },
  swaglabyoucartPage: async({ page }, use) => {
    await use(new swaglabyoucartPage(page));
  },
  swaglabproductPage: async({ page }, use) => {
    await use(new swaglabproductPage(page));
  },
  swaglabLoginPage: async({ page }, use) => {
    await use(new swaglabLoginPage(page));
  },
  swagmenupage: async({ page }, use) => {
    await use(new swagmenupage(page));
  },
  saucelabproductPage: async({ page }, use) => {
    await use(new saucelabproductPage(page));
  },
  saucelabsplatfromPage: async({ page }, use) => {
    await use(new saucelabsplatfromPage(page));
  },
  WebTablePage: async({ page }, use) => {
    await use(new WebTablePage(page));
  },
  DynamicPropertiesPage: async({ page }, use) => {
    await use(new DynamicPropertiesPage(page));
  },
});

