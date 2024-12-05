import { test, expect, chromium } from '@playwright/test';

// Function to generate a random email address
function generateRandomEmail() {
  const domains = ['example.com', 'test.com', 'demo.com', 'mail.com', 'domain.com'];
  const randomName = Math.random().toString(36).substring(2, 10); // Random string for email prefix
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${randomName}@${randomDomain}`;
}

// Function to generate random names
function generateRandomName() {
  const firstNames = [
    'John', 'Jane', 'Robert', 'Emily', 'Michael', 'Sarah', 'David', 'Jessica', 'Daniel', 'Laura',
    'William', 'Olivia', 'James', 'Sophia', 'Benjamin', 'Charlotte', 'Lucas', 'Amelia', 'Henry', 'Ava',
    'Ethan', 'Mia', 'Alexander', 'Isabella', 'Matthew', 'Chloe', 'Samuel', 'Grace', 'Jack', 'Zoe'
  ];
  
  const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Wilson', 'Moore', 'Taylor',
    'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Roberts',
    'Clark', 'Lewis', 'Walker', 'Young', 'Allen', 'King', 'Scott', 'Green', 'Adams', 'Baker'
  ];
  
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return { firstName: randomFirstName, lastName: randomLastName };
}

test('Wingspans automation test with multiple random names and emails', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Clear cookies and storage
  await context.clearCookies();
  await context.clearPermissions();
  
  // Set default timeout globally for the page
  page.setDefaultTimeout(95000);

  // Number of random entries to generate (use a large number or infinite loop if required)
  const numOfEntries = 3; // You can change this to generate more entries, or use a loop for infinite entries

  let randomEmails = [];
  let randomFirstNames = [];
  let randomLastNames = [];

  // Generate random entries
  for (let i = 0; i < numOfEntries; i++) {
    const randomEmail = generateRandomEmail();
    const randomName = generateRandomName();
    
    randomEmails.push(randomEmail);
    randomFirstNames.push(randomName.firstName);
    randomLastNames.push(randomName.lastName);

    console.log(`Entry ${i + 1}:`);
    console.log('Random Email:', randomEmail);
    console.log('Random Name:', randomName.firstName, randomName.lastName);
  }

 
  await page.goto('https://development.d3tqwuyiftpxq0.amplifyapp.com/');

  await page.waitForTimeout(1500);
  await page.locator("//button[normalize-space(text())='Sign In']").click();
  await page.waitForTimeout(1500);
  await page.locator("xpath=//div[@class='prompt desktop-only']//a[1]").click();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Sign in with email' }).click();
  await page.waitForTimeout(1500);
  await page.locator("//input[@id='ui-sign-in-email-input']").fill('varun.maurya@v2solutions.com');
  await page.waitForTimeout(1500);
  await page.locator("xpath=//button[@type='submit']").click();
  await page.waitForTimeout(1500);
  await page.locator("xpath=//input[@type='password']").fill('Mail@123');
  await page.waitForTimeout(1500);
  await page.locator("xpath=//button[@type='submit']").click();
  await page.waitForTimeout(1500);
  await page.locator("[class='back-to-admin-text']").click();
  await page.waitForTimeout(1500);
  await page.locator('xpath=//li/a[@href="/educator/analytics/"]').click({timeout:1500});
  await page.waitForTimeout(1500);
  await page.locator('xpath=//li/a[@href="/educator/"]').click({timeout:1500});
  await page.waitForTimeout(1500);
  await page.locator('xpath=//li/a[@href="/educator/faculty/"]').click({timeout:1500});
  await page.waitForTimeout(1500);
// Search for a specific name
  await page.locator("xpath=//input[@placeholder='First name, Last name, Email']").fill('Ronilson Montrond');
  await page.waitForTimeout(1500);
  await page.locator('[data-icon="search"][style="color: rgb(54, 54, 54);"]').click({timeout:1500});
  await page.waitForTimeout(1500);
  await page.locator('[data-icon="times"][style="color: rgb(54, 54, 54);"]').click({timeout:1500});
  await page.waitForTimeout(1500);
  await page.reload();
  await page.waitForTimeout(1500);
  await page.locator("//div[@class='rounded-dropdown rounded-dropdown-primary no-dropdown-arrow dropdown']//button[@id='dropdown-basic']").click();
  await page.waitForTimeout(1500);
  await page.locator('(//a[@href="#" and @class="dropdown-item"])[1]').click({timeout:1500});
  await page.waitForTimeout(1500);
    await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[1]/div[1]/input[1]").fill(randomFirstNames[i]);
    await page.waitForTimeout(1500);
    await page.locator("//div[contains(@class,'modal-body')]//div[2]//div[1]//input[1]").fill(randomLastNames[i]);
    await page.waitForTimeout(1500);
    await page.locator("//div[contains(@class,'modal-body')]//div[3]//div[1]//input[1]").fill(randomEmails[i]);
    await page.waitForTimeout(1500);
    await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[4]/div[1]/div[1]").click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.locator("//span[normalize-space()='Admin']").click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.locator("//div[contains(@aria-multiselectable,'false')]").click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.locator("//span[normalize-space()='Mendocino College']").click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[7]/div[1]/div[1]").click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.locator("//span[normalize-space()='Testtett']").click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.locator("//div[@class='ui fluid multiple search selection dropdown ais-MenuSelect']").click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.locator("//span[normalize-space()='New group added after update']").click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.locator("//button[normalize-space()='Save']").click({timeout:1500});
    await page.waitForTimeout(5000);
  console.log(randomEmails[i])
  await page.locator("xpath=//input[@placeholder='First name, Last name, Email']").fill(randomEmails[i]);
  await page.waitForTimeout(1500);
  await page.locator("//div[contains(@class,'page-flex page-flex-space-between page-align-items-end')]//div//div[contains(@class,'page-header-search')]//button").click({timeout:1500});
  await page.waitForTimeout(1500);
  await page.locator("xpath=//div[@class='no-dropdown-arrow edit-delete-dropdown']//button[@id='dropdown-basic']//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click({timeout:1500});
  await page.waitForTimeout(1500);
  await page.locator("//a[normalize-space()='Delete']").click({timeout:1500});
  await page.waitForTimeout(1500);
  await page.locator("//button[normalize-space()='Confirm Deletion Action']").click({timeout:1500});
  await page.waitForTimeout(1500);
  await page.locator("//div[contains(@class,'page-flex page-flex-space-between page-align-items-end')]//div//div[contains(@class,'page-header-search')]//button//*[name()='svg']").click({timeout:1500});
  await page.reload();

   // Recreationg user and performing delteing action using delete button
    await page.locator("//div[@class='rounded-dropdown rounded-dropdown-primary no-dropdown-arrow dropdown']//button[@id='dropdown-basic']").click({timeout:1500});
    await page.waitForTimeout( 1500); 
    await page.locator('(//a[@href="#" and @class="dropdown-item"])[1]').click({timeout:1500});
    await page.waitForTimeout( 1500); 
    await page.locator(" //div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[1]/div[1]/input[1]").fill('AT FN');
    await page.waitForTimeout( 1500); 
    await page.locator("//div[contains(@class,'modal-body')]//div[2]//div[1]//input[1]").fill('AT LN');
    await page.waitForTimeout( 1500); 
    await page.locator("//div[contains(@class,'modal-body')]//div[3]//div[1]//input[1]").fill('ATFNLN@gmail.com');
    await page.waitForTimeout( 1500); 
    await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[4]/div[1]/div[1]").click({timeout:1500});
    await page.waitForTimeout( 1500); 
    await page.locator("//span[normalize-space()='Faculty']").click({timeout:1500});
    await page.locator("//div[contains(@aria-multiselectable,'false')]").click({timeout:1500});
    await page.waitForTimeout( 1500); 
    await page.locator("//span[normalize-space()='The MET High School']").click({timeout:1500});
    await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[7]/div[1]/div[1]").click({timeout:1500});
    await page.waitForTimeout( 1500); 
    await page.locator("//span[normalize-space()='Dept-1']").click({timeout:1500});
    await page.locator("//div[@class='ui fluid multiple search selection dropdown ais-MenuSelect']").click({timeout:1500});
    await page.waitForTimeout( 1500); 
    await page.locator("//span[normalize-space()='Test one all group in all']").click({timeout:1500});
    await page.locator("//div[@class='page-row page-flex-wrap']/div[9]/div[1]/div[1]").click({timeout:1500});
    await page.waitForTimeout( 1500); 
    await page.locator("//span[normalize-space()='Male']").click({timeout:1500});
    await page.waitForTimeout( 1500); 
    await page.locator("//button[normalize-space()='Save']").click({timeout:1500});
    await page.waitForTimeout( 1500); 
    await page.locator("xpath=//input[@placeholder='First name, Last name, Email']").fill('ATFNLN@gmail.com');
    await page.waitForTimeout(1500);
    await page.locator("//div[contains(@class,'page-flex page-flex-space-between page-align-items-end')]//div//div[contains(@class,'page-header-search')]//button").click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.locator('//table[@class="page-mb-2"]/tbody/tr/td[1]/div[@class="custom-check-group"]/label').click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.locator("//button[@class='component-button component-button-submit page-btn-sm page-btn-outline']").click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.locator("//button[@class='component-button component-button-submit page-btn-sm']").click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.locator("//div[@class='page-flex page-flex-space-between page-align-items-end']//div//div[@class='page-header-search']//button//*[name()='svg']").click({timeout:1500});
    await page.waitForTimeout(1500);
    await page.reload();
    await page.waitForTimeout(8000);

    //Create new group
  await page.locator("//div[@class='rounded-dropdown rounded-dropdown-outline-primary no-dropdown-arrow dropdown']//button[@id='dropdown-basic']").click({timeout:1500});
  await page.waitForTimeout(2000);  // Wait for 2 seconds
  await page.locator("//a[normalize-space()='Create New']").click({timeout:35000});
  await page.waitForTimeout( 5000); 
  await page.locator("//div[@class='educator-form-group form-group']//input[@type='text']").first().click({timeout:1500});
  await page.waitForTimeout( 1500); 
  await page.locator("//div[@class='educator-form-group form-group']//input[@type='text']").fill(randomFirstNames[i]);
  await page.waitForTimeout( 1500); 
  console.log(randomFirstNames[i]);
  // Click on the first element in the list (li[1]) and so on
  await page.locator("//li[1]//a[1]//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click({timeout:1500});
  await page.waitForTimeout( 1500); 
  await page.locator("//li[2]//a[1]//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click({timeout:1500});
  await page.waitForTimeout( 1500); 
  await page.locator("//li[3]//a[1]//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click({timeout:1500});
  await page.waitForTimeout( 1500); 
  await page.locator('//button[@type="submit" and @class="component-button component-button-submit page-btn-sm"]').click({timeout:5000});
  await page.reload();
    await page.locator('//div[@class="page-filter-button page-flex page-flex-wrap"]/div[4]').click({ timeout: 10000 });
    await page.waitForTimeout(1500);
    await page.locator("(//input[@role='searchbox'])[1]").fill(randomFirstNames[i]);
  console.log(randomFirstNames[i]);
  await page.waitForTimeout(8000);
  await page.locator(`//span[normalize-space()="${randomFirstNames[i]}"]`).click({timeout:1500});
  await page.waitForTimeout( 5500); 
  await page.locator("//a[@class='page-links']").click({timeout:1500});
  await page.waitForTimeout( 1500); 

  await page.screenshot({ path: 'wingspan_screenshot.png' });
});