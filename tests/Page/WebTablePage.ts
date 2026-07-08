import { expect, Page } from '@playwright/test';

export class WebTablePage {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://demoqa.com/webtables');
    }

    async clickAdd() {
        await this.page.getByRole('button', { name: 'Add' }).click();
    }

    async enterFirstName(firstName: string) {
        await this.page.getByPlaceholder('First Name').fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    }

    async enterEmail(email: string) {
        await this.page.getByPlaceholder('name@example.com').fill(email);
    }

    async enterAge(age: string) {
        await this.page.getByPlaceholder('Age').fill(age);
    }

    async enterSalary(salary: string) {
        await this.page.getByPlaceholder('Salary').fill(salary);
    }

    async enterDepartment(department: string) {
        await this.page.getByPlaceholder('Department').fill(department);
    }

    async clickSubmit() {
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    async verifyEmployee(name: string) {
    await expect(
        this.page.getByRole('cell', { name, exact: true })
    ).toBeVisible();
}
}