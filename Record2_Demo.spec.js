import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://development.d3tqwuyiftpxq0.amplifyapp.com/');
  await page.waitForLoadState('networkidle')
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Sign In' }).click();    
  await page.getByRole('button', { name: 'Sign in with email' }).click();
  await page.getByLabel('Email').fill('varun.maurya@v2solutions.com');
  await page.waitForLoadState('networkidle')
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Password').fill('Mail@123');
  await page.waitForLoadState('networkidle')
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('networkidle')
  await page.goto('https://development.d3tqwuyiftpxq0.amplifyapp.com/educator');
  await page.waitForLoadState('networkidle')
  await page.getByRole('link', { name: 'Faculty' }).click();
  await page.waitForLoadState('networkidle')
  await page.getByPlaceholder('First name, Last name, Email').click();
  await page.waitForLoadState('networkidle')
  await page.getByPlaceholder('First name, Last name, Email').fill('alex ');
  await page.waitForLoadState('networkidle')
  await page.getByPlaceholder('First name, Last name, Email').press('Enter');
  await page.waitForLoadState('networkidle')
  await page.getByRole('button', { name: 'Maurya Varun user profile' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
}); 