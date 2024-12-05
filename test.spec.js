import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://development.d3tqwuyiftpxq0.amplifyapp.com/');
  await page.getByText('Campus').click();
  await page.getByText('BHCC_Campus_North').click();
  await page.getByRole('searchbox').click();
  await page.getByRole('searchbox').fill('test');
  await page.getByText('Test', { exact: true }).nth(2).click();
  await page.locator('.p-multiselect-close').click();
  await page.getByRole('link', { name: 'Clear Filter' }).click();
});

/*const dropdownList = page.locator('li[role="option"]');
  //await dropdownList.selectOption('BHCC_Campus_North');
  //await page.locator("xpath=//span[normalize-space()='BHCC_Campus_South']").click();
  //await page.locator('xpath=//input[@type="text"][contains(@role,"searchbox")]').click();
  //await page.locator('xpath=//input[@role="searchbox"]').fill('test');
  //await page.locator("xpath=//li[@class='p-multiselect-item p-highlight p-focus']//span[contains(text(),'Test')]").click();
  await page.locator('//*[contains(@class, "p-multiselect-close") and @data-pc-section="closeicon"]').click();*/
  