const { test, expect } = require('@playwright/test');

test('Launch Google', async ({ page }) => {
   // Go to Google's homepage
   await page.goto('https://google.com')
   // Verify that the page has loaded by checking the title
   await expect(page).toHaveTitle('Google')
});