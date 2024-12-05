import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.pause();
  // By using object
  await page.click('[id="user-name"]');
  await page.locator('id=user-name').fill('standard_user');
  // By using Xpath
  await page.click('id=password');
  await page.locator('//input[@name="password"]').fill('secret_sauce');
  // by using text 
 // await page.locator('text=Login').click();
await page.locator('input:has-text("Login")').click();
  // by using CSS selector
  // await page.locator('#login-button').click();
});