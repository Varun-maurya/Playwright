import { test, expect, chromium } from '@playwright/test';

// Function to generate a random name
function generateRandomName() {
  const firstNames = ['John', 'Jane', 'Alice', 'Bob', 'Charlie'];
  const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Davis'];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
}

function generateRandomEmail() {
  const domains = ['example.com', 'test.com', 'demo.com'];
  const randomName = Math.random().toString(36).substring(2, 10); // Random string
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];

  return `${randomName}@${randomDomain}`;
}

test('Wingspans automation test with slow execution', async () => {
  // Initialize browser and context
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Create a new page
  const page = await context.newPage();

  // Clear cookies and storage
  await context.clearCookies();
  await context.clearPermissions();

  // Set default timeout globally for the page
  page.setDefaultTimeout(2500);

  // Generate random name and email
  const randomName = generateRandomName();
  const randomEmail = generateRandomEmail();

  console.log('Random Name:', randomName);
  console.log('Random Email:', randomEmail);

  // Start of the test steps
  await page.goto('https://development.d3tqwuyiftpxq0.amplifyapp.com/');
  console.log('Step 1: Navigating to the homepage');
  
  await page.waitForTimeout( 2500); // Wait 5 seconds to slow down execution

  await page.locator("//button[normalize-space(text())='Sign In']").click();
  console.log('Step 2: Clicking "Sign In" button');
   
  await page.waitForTimeout( 2500);

  await page.locator("xpath=//div[@class='prompt desktop-only']//a[1]").click();
  console.log('Step 3: Clicking a link on the sign-in page');
   
  await page.waitForTimeout( 2500);

  await page.getByRole('button', { name: 'Sign in with email' }).click();
  console.log('Step 4: Clicking "Sign in with email" button');
   
  await page.waitForTimeout( 2500);

  await page.locator("//input[@id='ui-sign-in-email-input']").fill('varun.maurya@v2solutions.com');
  console.log('Step 5: Filling in the email field');
   
  await page.waitForTimeout( 2500);

  await page.locator("xpath=//button[@type='submit']").click();
  console.log('Step 6: Clicking the submit button');
   
  await page.waitForTimeout( 2500);

  await page.locator("xpath=//input[@type='password']").fill('Mail@123');
  console.log('Step 7: Filling in the password field');
   
  await page.waitForTimeout( 2500);

  await page.locator("xpath=//button[@type='submit']").click();
  console.log('Step 8: Submitting the login form');
   
  await page.waitForTimeout( 2500);

  await page.locator("[class='back-to-admin-text']").click();
  console.log('Step 9: Clicking "Back to Admin" link');
   
  await page.waitForTimeout( 2500);

  await page.locator('xpath=//li/a[@href="/educator/analytics/"]').click();
  console.log('Step 10: Navigating to Analytics page');
   
  await page.waitForTimeout( 2500);

  await page.locator('xpath=//li/a[@href="/educator/faculty/"]').click();
  console.log('Step 11: Navigating to Faculty page');
   
  await page.waitForTimeout( 2500);

  await page.locator('xpath=//li/a[@href="/educator/"]').click();
  console.log('Step 12: Navigating back to Educator page');
   
  await page.waitForTimeout( 2500);

  await page.locator('xpath=//li/a[@href="/educator/faculty/"]').click();
  console.log('Step 13: Re-clicking Faculty page');
   
  await page.waitForTimeout( 2500);

  await page.locator("xpath=//input[@placeholder='First name, Last name, Email']").fill('Ronilson Montrond');
  console.log('Step 14: Filling in Faculty name field');
   
  await page.waitForTimeout( 2500);

  await page.locator('[data-icon="search"][style="color: rgb(54, 54, 54);"]').click();
  console.log('Step 15: Clicking the search icon');
   
  await page.waitForTimeout( 2500);

  await page.locator('[data-icon="times"][style="color: rgb(54, 54, 54);"]').click();
  console.log('Step 16: Closing the search modal');
   
  await page.waitForTimeout( 4500);

  await page.reload();
  console.log('Step 17: Reloading the page');

  await page.waitForTimeout( 4500);
   
  // Add pauses throughout the flow where necessary

  await page.locator("//div[@class='rounded-dropdown rounded-dropdown-primary no-dropdown-arrow dropdown']//button[@id='dropdown-basic']").click();
  console.log('Step 18: Clicking the dropdown button');
   
  await page.waitForTimeout( 2500);

  await page.locator('(//a[@href="#" and @class="dropdown-item"])[1]').click();
  console.log('Step 19: Selecting dropdown item');
   
  await page.waitForTimeout( 2500);

  await page.locator(" //div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[1]/div[1]/input[1]").fill(randomName);
  console.log('Step 20: Filling in the first name field');
   
  await page.waitForTimeout( 2500);

  await page.locator("//div[contains(@class,'modal-body')]//div[2]//div[1]//input[1]").fill(randomName);
  console.log('Step 21: Filling in the last name field');
   
  await page.waitForTimeout( 2500);

  await page.locator("//div[contains(@class,'modal-body')]//div[3]//div[1]//input[1]").fill(randomEmail);
  console.log('Step 22: Filling in the email field');
   
  await page.waitForTimeout( 2500);

  await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[4]/div[1]/div[1]").click();
  console.log('Step 23: Clicking the checkbox');
   
  await page.waitForTimeout( 2500);

  await page.locator("//span[normalize-space()='Admin']").click();
  console.log('Step 24: Selecting Admin option');
   
  await page.waitForTimeout( 2500);

  await page.locator("//div[contains(@aria-multiselectable,'false')]").click();
  console.log('Step 25: Selecting a faculty');
   
  await page.waitForTimeout( 2500);

  await page.locator("//span[normalize-space()='Mendocino College']").click();
  console.log('Step 26: Selecting a college');
   
  await page.waitForTimeout( 2500);

  await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[7]/div[1]/div[1]").click();
  console.log('Step 27: Selecting group');
   
  await page.waitForTimeout( 2500);

  await page.locator("//span[normalize-space()='Testtett']").click();
  console.log('Step 28: Selecting group');
   
  await page.waitForTimeout( 2500);

  await page.locator("//div[@class='ui fluid multiple search selection dropdown ais-MenuSelect']").click();
  console.log('Step 29: Clicking dropdown to select group');
   
  await page.waitForTimeout( 2500);

  await page.locator("//span[normalize-space()='New group added after update']").click();
  console.log('Step 30: Selecting new group');
   
  await page.waitForTimeout( 2500);

  await page.locator("//div[@class='modal-content']/div[@class='modal-body']/div[@class='page-row page-flex-wrap']/div[9]/div[1]/div[1]").click({timeout : 3500});
  console.log('Step 31: click on gender');

  await page.waitForTimeout( 2500);

  await page.locator("//span[normalize-space()='Male']").click();
  console.log('Step 28: Select Gender as a Male');

  await page.waitForTimeout( 2500);

  await page.locator("//button[normalize-space()='Save']").click();
  console.log('Step 32: Clicking Save button');
   
  await page.waitForTimeout( 2500);

  await page.locator("//a[@class='page-links']").click();
  console.log('Step 33: Clicking a page link');
   
  await page.waitForTimeout( 2500);

  // Ending the test
  await page.close();
  await browser.close();
});
