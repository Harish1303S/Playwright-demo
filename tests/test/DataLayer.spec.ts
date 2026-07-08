import { test, expect } from '@playwright/test';

test('Validate Product View Data Layer Event', async ({ page }) => {

  // Wait for the analytics request
  const productViewResponse = page.waitForResponse(async (response) => {

    const url = response.url();

    // Update this condition based on the actual analytics endpoint
    if (
      url.includes('analytics') ||
      url.includes('collect') ||
      url.includes('events')
    ) {

      const body = await response.text();

      return body.includes('ecommerce:productview');
    }

    return false;
  });

  // Navigate to the website
  await page.goto('https://www.solventum.com/');

  // Navigate to any Product Detail Page (PDP)
  // Replace this locator with the correct product locator
  await page.locator('a').filter({ hasText: 'Product' }).first().click();

  // Wait until page is fully loaded
  await page.waitForLoadState('networkidle');

  // Capture response
  const response = await productViewResponse;

  // Convert response to JSON
  const data = await response.json();

  console.log(JSON.stringify(data, null, 2));

  // Validations
  expect(data.event).toBe('ecommerce:productview');

  expect(data.productListitems[0].productSku).toBeTruthy();

  expect(data.eventData.stockAvailability).toBeTruthy();

  expect(data.eventData.agreementId).toBeTruthy();

  expect(data.eventData.userId).toBeTruthy();

});