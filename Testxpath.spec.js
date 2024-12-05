import { test, expect, chromium } from '@playwright/test';

// Function to generate a random name
function generateRandomName() {
  const firstNames = ['John', 'Jane', 'Alice', 'Bob', 'Charlie','Doe', 'Smith', 'Johnson', 'Brown', 'Davis'];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];

  return `${randomFirstName}`;
}

function generateRandomEmail() {
  const domains = ['example.com', 'test.com', 'demo.com'];
  const randomName = Math.random().toString(36).substring(2, 10); // Random string
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];

  return `${randomName}@${randomDomain}`;
}

test('Wingspans automation test', async () => {
  // Initialize browser and context
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Create a new page
  const page = await context.newPage();

  // Clear cookies and storage
  await context.clearCookies();
  await context.clearPermissions();

  // Set default timeout globally for the page
  page.setDefaultTimeout(65000);

  // Generate random name and email
  const randomName = generateRandomName();
  const randomEmail = generateRandomEmail();

  console.log('Random Name:', randomName);
  console.log('Random Email:', randomEmail);

  await page.goto('https://development.d3tqwuyiftpxq0.amplifyapp.com/');
  await page.waitForTimeout( 1500); 
  await page.locator("//button[normalize-space(text())='Sign In']").click();
  await page.waitForTimeout( 1500); 
  await page.locator("xpath=//div[@class='prompt desktop-only']//a[1]").click();
  await page.waitForTimeout( 1500); 
  await page.getByRole('button', { name: 'Sign in with email' }).click();
  await page.waitForTimeout( 1500); 
  await page.locator("//input[@id='ui-sign-in-email-input']").fill('varun.maurya@v2solutions.com');
  await page.waitForTimeout( 1500); 
  await page.locator("xpath=//button[@type='submit']").click();
  await page.waitForTimeout( 1500); 
  await page.locator("xpath=//input[@type='password']").fill('Mail@123');
  await page.waitForTimeout( 1500); 
  await page.locator("xpath=//button[@type='submit']").click();
  await page.waitForTimeout( 19500); 
  await page.locator("(//p[@class='back-to-admin-text'])[1]").click({ timeout: 6000 });
  await page.waitForTimeout( 1500); 
  await page.locator('xpath=//li/a[@href="/educator/analytics/"]').click();
  await page.waitForTimeout( 1500); 
  await page.locator('xpath=//li/a[@href="/educator/faculty/"]').click();
  await page.waitForTimeout( 1500); 
  await page.locator('xpath=//li/a[@href="/educator/"]').click();
  await page.waitForTimeout( 1500); 
  await page.locator('xpath=//li/a[@href="/educator/faculty/"]').click();
  await page.waitForTimeout( 1500); 
  await page.locator("xpath=//input[@placeholder='First name, Last name, Email']").fill('Ronilson Montrond');
  await page.waitForTimeout( 1500); 
  await page.locator('[data-icon="search"][style="color: rgb(54, 54, 54);"]').click();
  await page.waitForTimeout( 1500); 
  await page.locator('[data-icon="times"][style="color: rgb(54, 54, 54);"]').click();
  await page.waitForTimeout( 3500); 
  await page.reload();
  await page.locator("//div[@class='rounded-dropdown rounded-dropdown-primary no-dropdown-arrow dropdown']//button[@id='dropdown-basic']").click();
  await page.waitForTimeout( 5500); 
  await page.locator('(//a[@href="#" and @class="dropdown-item"])[1]').click();
  await page.waitForTimeout( 5500); 
  await page.locator(" //div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[1]/div[1]/input[1]").fill(randomName);
  await page.waitForTimeout( 1500); 
  await page.locator("//div[contains(@class,'modal-body')]//div[2]//div[1]//input[1]").fill(randomName);
  await page.waitForTimeout( 1500); 
  await page.locator("//div[contains(@class,'modal-body')]//div[3]//div[1]//input[1]").fill(randomEmail);
  await page.waitForTimeout( 1500); 
  await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[4]/div[1]/div[1]").click();
  await page.waitForTimeout( 1500); 
  await page.locator("//span[normalize-space()='Admin']").click();
  await page.locator("//div[contains(@aria-multiselectable,'false')]").click();
  await page.waitForTimeout( 1500); 
  await page.locator("//span[normalize-space()='Mendocino College']").click();
  await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[7]/div[1]/div[1]").click();
  await page.waitForTimeout( 1500); 
  await page.locator("//span[normalize-space()='Testtett']").click();
  await page.locator("//div[@class='ui fluid multiple search selection dropdown ais-MenuSelect']").click();
  await page.locator("//span[normalize-space()='New group added after update']").click();
  await page.waitForTimeout( 1500); 
  await page.locator("//button[normalize-space()='Save']").click();
  await page.waitForTimeout( 1500); 
  console.log(randomEmail)
  await page.locator("xpath=//input[@placeholder='First name, Last name, Email']").fill(randomEmail);
  await page.waitForTimeout( 1500); 
  await page.locator("//div[contains(@class,'page-flex page-flex-space-between page-align-items-end')]//div//div[contains(@class,'page-header-search')]//button").click();
  await page.waitForTimeout( 1500); 
  await page.locator("xpath=//div[@class='no-dropdown-arrow edit-delete-dropdown']//button[@id='dropdown-basic']//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click();
  await page.waitForTimeout( 1500); 
  await page.locator("//a[normalize-space()='Delete']").click();
  await page.waitForTimeout( 1500); 
  await page.locator("//button[normalize-space()='Confirm Deletion Action']").click();
  await page.waitForTimeout( 1500); 
  await page.locator("//div[contains(@class,'page-flex page-flex-space-between page-align-items-end')]//div//div[contains(@class,'page-header-search')]//button//*[name()='svg']").click();
  await page.waitForTimeout( 1500); 
  await page.reload();
    // Recreationg user and performing delteing action using delete button
    await page.locator("//div[@class='rounded-dropdown rounded-dropdown-primary no-dropdown-arrow dropdown']//button[@id='dropdown-basic']").click();
    await page.waitForTimeout( 1500); 
    await page.locator('(//a[@href="#" and @class="dropdown-item"])[1]').click();
    await page.waitForTimeout( 1500); 
    await page.locator(" //div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[1]/div[1]/input[1]").fill('AT FN');
    await page.waitForTimeout( 1500); 
    await page.locator("//div[contains(@class,'modal-body')]//div[2]//div[1]//input[1]").fill('AT LN');
    await page.waitForTimeout( 1500); 
    await page.locator("//div[contains(@class,'modal-body')]//div[3]//div[1]//input[1]").fill('ATFNLN@gmail.com');
    await page.waitForTimeout( 1500); 
    await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[4]/div[1]/div[1]").click();
    await page.waitForTimeout( 1500); 
    await page.locator("//span[normalize-space()='Faculty']").click();
    await page.locator("//div[contains(@aria-multiselectable,'false')]").click();
    await page.waitForTimeout( 1500); 
    await page.locator("//span[normalize-space()='The MET High School']").click();
    await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[7]/div[1]/div[1]").click();
    await page.waitForTimeout( 1500); 
    await page.locator("//span[normalize-space()='Dept-1']").click();
    await page.locator("//div[@class='ui fluid multiple search selection dropdown ais-MenuSelect']").click();
    await page.waitForTimeout( 1500); 
    await page.locator("//span[normalize-space()='Test one all group in all']").click();
    await page.locator("//div[@class='page-row page-flex-wrap']/div[9]/div[1]/div[1]").click();
    await page.waitForTimeout( 1500); 
    await page.locator("//span[normalize-space()='Male']").click();
    await page.waitForTimeout( 1500); 
    await page.locator("//button[normalize-space()='Save']").click();
    await page.waitForTimeout( 1500); 
    await page.locator("xpath=//input[@placeholder='First name, Last name, Email']").fill('ATFNLN@gmail.com');
    await page.waitForTimeout( 1500); 
    await page.locator("//div[contains(@class,'page-flex page-flex-space-between page-align-items-end')]//div//div[contains(@class,'page-header-search')]//button").click();
    await page.waitForTimeout( 1500); 
    await page.locator('//table[@class="page-mb-2"]/tbody/tr/td[1]/div[@class="custom-check-group"]/label').click();
    await page.waitForTimeout( 1500); 
    await page.locator("//button[@class='component-button component-button-submit page-btn-sm page-btn-outline']").click();
    await page.waitForTimeout( 1500); 
    await page.locator("//button[@class='component-button component-button-submit page-btn-sm']").click();
    await page.waitForTimeout( 1500); 
  await page.locator("//div[@class='page-flex page-flex-space-between page-align-items-end']//div//div[@class='page-header-search']//button//*[name()='svg']").click();
  await page.waitForTimeout( 1500); 
  await page.reload();
  //Create new group
  await page.locator("xpath=//div[@class='rounded-dropdown rounded-dropdown-outline-primary no-dropdown-arrow dropdown']//button[@id='dropdown-basic']").click();
  await page.waitForTimeout( 1500); 
  await page.locator("xpath=//a[normalize-space()='Create New']").click();
  await page.waitForTimeout( 1500); 
  await page.getByRole('textbox').first().click();
  await page.waitForTimeout( 1500); 
  await page.locator("//div[@class='educator-form-group form-group']//input[@type='text']").fill(randomName);
  await page.waitForTimeout( 1500); 
  console.log(randomName);
  // Click on the first element in the list (li[1]) and so on
  await page.locator("//li[1]//a[1]//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click();
  await page.waitForTimeout( 1500); 
  await page.locator("//li[2]//a[1]//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click();
  await page.waitForTimeout( 1500); 
  await page.locator("//li[3]//a[1]//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click();
  await page.waitForTimeout( 1500); 
  await page.locator('//button[@type="submit" and @class="component-button component-button-submit page-btn-sm"]').click();
  await page.waitForTimeout(8000)
  await page.reload();
  await page.locator('//div[@class="page-filter-button page-flex page-flex-wrap"]/div[4]').click();
  await page.waitForTimeout( 1500); 
  await page.fill('[data-pc-name="inputtext"]', randomName);
  await page.waitForTimeout( 1500); 
  console.log(randomName);
  await page.waitForTimeout(8000)
  await page.locator(`//span[normalize-space()="${randomName}"]`).click();
  await page.waitForTimeout( 5500); 
  await page.locator("//a[@class='page-links']").click();
  await page.waitForTimeout( 1500); 
});