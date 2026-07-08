import { Page, expect, Response } from '@playwright/test';

export class NetworkHelper {
  constructor(private page: Page) {}

  async waitForUsersAPI(): Promise<Response> {
    const response = await this.page.waitForResponse(
      res =>
        res.url().includes('/api/users') &&
        res.request().method() === 'GET'
    );

    expect(response.status()).toBe(200);

    return response;
  }

  async validateResponseData(response: Response) {
    const body = await response.json();

    expect(body).toHaveProperty('id');
    expect(body.name).toBe('Harish');
    expect(body.email).toContain('@');
  }
}