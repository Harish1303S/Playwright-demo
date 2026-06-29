import { test } from '../fixtures/Page.fixtures';

test('Verify Dynamic Properties', async ({ page, DynamicPropertiesPage }) => {

    await DynamicPropertiesPage.navigate();

    await DynamicPropertiesPage.verifyEnableAfterButton();

    await DynamicPropertiesPage.verifyColorChangeButton();

    await DynamicPropertiesPage.verifyVisibleAfterButton();

    await DynamicPropertiesPage.clickVisibleAfterButton();
});