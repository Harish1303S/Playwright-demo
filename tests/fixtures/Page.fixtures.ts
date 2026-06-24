import { test as base} from '@playwright/test';
import { Basefeild } from '../Page/Basepage';
import { Radiofeild } from '../Page/Radiofeild';
import { Dropdownfield } from '../Page/dropDown';


type MyFixtures = {
  BasePage: Basefeild;
  RadioPage: Radiofeild;
  Dropdownpage: Dropdownfield;
};
export { expect } from '@playwright/test';

export const test = base.extend<MyFixtures>({
  BasePage: async ({ page }, use) => {
    await use(new Basefeild(page));
  },

  RadioPage: async ({ page }, use) => {
    await use(new Radiofeild(page));
  },
  Dropdownpage: async({ page }, use) => {
   await use(new Dropdownfield(page)); 
  }
});

