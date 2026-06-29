import { test } from '../fixtures/Page.fixtures';

test('Add employee into web table', async ({ page , WebTablePage }) => {



    await WebTablePage.navigate();

    await WebTablePage.clickAdd();

    await WebTablePage.enterFirstName('Harish');
    await WebTablePage.enterLastName('Kumar');
    await WebTablePage.enterEmail('harish@gmail.com');
    await WebTablePage.enterAge('25');
    await WebTablePage.enterSalary('50000');
    await WebTablePage.enterDepartment('QA');

    await WebTablePage.clickSubmit();

    await WebTablePage.verifyEmployee('Harish');
});
