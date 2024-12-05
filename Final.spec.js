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

// Function to generate random group name
function generateRandomGroupName() {
  const adjectives = [
    'Awesome', 'Brave', 'Cool', 'Unique', 'Creative', 'Funky', 'Smart', 'Epic',
    'Majestic', 'Mighty', 'Bold', 'Fearless', 'Invincible', 'Clever', 'Adventurous',
    'Vibrant', 'Dynamic', 'Radiant', 'Powerful', 'Daring', 'Fierce', 'Heroic',
    'Inspirational', 'Courageous', 'Legendary', 'Dynamic', 'Innovative', 'Luminous',
    'Unstoppable', 'Electric', 'Resilient', 'Ambitious', 'Brilliant', 'Vigorous'
  ];

  const nouns = [
    'Wolves', 'Lions', 'Tigers', 'Heroes', 'Adventurers', 'Explorers', 'Rangers', 'Titans',
    'Knights', 'Dragons', 'Warriors', 'Legends', 'Pioneers', 'Champions', 'Gladiators',
    'Defenders', 'Guardians', 'Mavericks', 'Outlaws', 'Conquerors', 'Rebels', 'Legends',
    'Nomads', 'Pirates', 'Sentinels', 'Sharks', 'Wizards', 'Falcons', 'Eagles',
    'Revolutionaries', 'Mystics', 'Crusaders', 'Guardians', 'Titans', 'Kings', 'Vikings'
  ];
  
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  
  return `${adjective} ${noun}`;
}

test('Wingspans automation test for create and delete user groups ', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Clear cookies and storage
  await context.clearCookies();
  await context.clearPermissions();
  
  // Set default timeout globally for the page
  page.setDefaultTimeout(195000);

  // Number of random entries to generate (use a large number or infinite loop if required)
  const numOfEntries = 1;
  let randomEmails = [];
  let randomFirstNames = [];
  let randomLastNames = [];
  let randomGroupNames = [];

  // Generate random entries
  for (let i = 0; i < numOfEntries; i++) {
    const randomEmail = generateRandomEmail();
    const randomName = generateRandomName();
    const randomGroupName = generateRandomGroupName();
    
    randomEmails.push(randomEmail);
    randomFirstNames.push(randomName.firstName);
    randomLastNames.push(randomName.lastName);
    randomGroupNames.push(randomGroupName);

    console.log(`Entry ${i + 1}:`);
    console.log('Random Email:', randomEmail);
    console.log('Random Name:', randomName.firstName, randomName.lastName);
    console.log('Random Group Name:', randomGroupName);
  }
 
  await page.goto('https://development.d3tqwuyiftpxq0.amplifyapp.com/');
  await page.waitForTimeout(5100);
  await page.locator("//button[normalize-space(text())='Sign In']").click();
  await page.waitForTimeout(5100);
  await page.locator("xpath=//div[@class='prompt desktop-only']//a[1]").click();
  await page.waitForTimeout(5100);
  await page.getByRole('button', { name: 'Sign in with email' }).click();
  await page.waitForTimeout(5100);
  await page.locator("//input[@id='ui-sign-in-email-input']").fill('varun.maurya@v2solutions.com');
  await page.waitForTimeout(5100);
  await page.locator("xpath=//button[@type='submit']").click();
  await page.waitForTimeout(5100);
  await page.locator("xpath=//input[@type='password']").fill('Mail@123');
  await page.waitForTimeout(5100);
  await page.locator("xpath=//button[@type='submit']").click();
  await page.waitForTimeout(5100);
  await page.locator("[class='back-to-admin-text']").click();
  await page.waitForTimeout(5100);
  await page.waitForLoadState('load');
  await page.locator('//a[@href="/educator/students/"]').click();
  await page.waitForTimeout(5100);
  await page.locator('//a[@href="/educator/faculty/"]').click();
  await page.waitForTimeout(5100);

// add user flow

  await page.locator("//div[@class='rounded-dropdown rounded-dropdown-primary no-dropdown-arrow dropdown']//button[@id='dropdown-basic']").click();
  await page.waitForTimeout(5100);
  await page.locator('(//a[@href="#" and @class="dropdown-item"])[1]').click({timeout:5100});
  await page.waitForLoadState('load');
  for (let i = 0; i < numOfEntries; i++) {
    await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[1]/div[1]/input[1]").fill(randomFirstNames[i]);
    await page.waitForTimeout(4500);
    await page.locator("//div[contains(@class,'modal-body')]//div[2]//div[1]//input[1]").fill(randomLastNames[i]);
    await page.waitForTimeout(4500);
    await page.locator("//div[contains(@class,'modal-body')]//div[3]//div[1]//input[1]").fill(randomEmails[i]);
    await page.waitForTimeout(4500);
    await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[4]/div[1]/div[1]").click({timeout:5100});
    await page.waitForTimeout(4500);
    await page.locator("//span[normalize-space()='Admin']").click();
    await page.waitForTimeout(4500);
    await page.locator("//div[contains(@aria-multiselectable,'false')]").click();
    await page.waitForTimeout(4500);
    await page.locator("//span[normalize-space()='Mendocino College']").click();
    await page.waitForTimeout(4500);
    await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[7]/div[1]/div[1]").click();
    await page.waitForTimeout(4500);
    await page.locator("//span[normalize-space()='Testtett']").click();
    await page.waitForTimeout(4500);
    await page.locator("//div[@class='ui fluid multiple search selection dropdown ais-MenuSelect']").click();
    await page.waitForTimeout(4500);
    await page.locator("//span[normalize-space()='New group added after update']").click();
    await page.waitForTimeout(4500);
    await page.locator("//button[normalize-space()='Save']").click();
    console.log(randomEmails[i]);
    await page.waitForTimeout(4500);

  // Search user and delete created user with ... dots flow.
  await page.waitForTimeout(5100);
  await page.locator("xpath=//input[@placeholder='First name, Last name, Email']").fill(randomEmails[i]);
  await page.waitForTimeout(5100);
  await page.locator("//div[contains(@class,'page-flex page-flex-space-between page-align-items-end')]//div//div[contains(@class,'page-header-search')]//button").click({timeout:5100});
  await page.locator("xpath=//div[@class='no-dropdown-arrow edit-delete-dropdown']//button[@id='dropdown-basic']//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click({timeout:5100});
  await page.locator("//a[normalize-space()='Delete']").click({timeout:5100});
  await page.locator("//button[normalize-space()='Confirm Deletion Action']").click({timeout:5100});
  await page.waitForTimeout(5100);
  await page.locator("//div[contains(@class,'page-flex page-flex-space-between page-align-items-end')]//div//div[contains(@class,'page-header-search')]//button//*[name()='svg']").click({ timeout: 5000, force: true });
  await page.reload();
  await page.waitForTimeout(5100);

// Re-creationg add user flow with fixed values and edit user details

await page.locator("//div[@class='rounded-dropdown rounded-dropdown-primary no-dropdown-arrow dropdown']//button[@id='dropdown-basic']").click({timeout:5100}); 
await page.locator('(//a[@href="#" and @class="dropdown-item"])[1]').click({timeout:5100});
await page.locator(" //div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[1]/div[1]/input[1]").fill('AT FN');
await page.waitForTimeout(5100);
await page.locator("//div[contains(@class,'modal-body')]//div[2]//div[1]//input[1]").fill('AT LN');
await page.waitForTimeout(5100);
await page.locator("//div[contains(@class,'modal-body')]//div[3]//div[1]//input[1]").fill('ATFNLN@gmail.com');
await page.waitForTimeout(5100);
await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[4]/div[1]/div[1]").click({timeout:5100});
await page.locator("//span[normalize-space()='Faculty']").click({timeout:5100});
await page.locator("//div[contains(@aria-multiselectable,'false')]").click({timeout:5100});
await page.locator("//span[normalize-space()='The MET High School']").click({timeout:5100});
await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[7]/div[1]/div[1]").click({timeout:5100});
await page.locator("//span[normalize-space()='Dept-1']").click({timeout:5100});
await page.locator("//div[@class='ui fluid multiple search selection dropdown ais-MenuSelect']").click({timeout:5100});
await page.locator("//span[normalize-space()='Test one all group in all']").click({timeout:5100});
await page.locator("//div[@class='page-row page-flex-wrap']/div[9]/div[1]/div[1]").click({timeout:5100});
await page.locator("//span[normalize-space()='Male']").click({timeout:5100});
await page.locator("//button[normalize-space()='Save']").click({timeout:5100});
{
await page.locator("xpath=//input[@placeholder='First name, Last name, Email']").fill('ATFNLN@gmail.com');
await page.waitForTimeout(2100);
await page.locator("//div[contains(@class,'page-flex page-flex-space-between page-align-items-end')]//div//div[contains(@class,'page-header-search')]//button").click();
await page.waitForTimeout(2100);
const locator = '//div[@class="no-dropdown-arrow edit-delete-dropdown"]//button[@id="dropdown-basic"]//*[name()="svg"]//*[name()="path" and contains(@fill,"currentCol")][1]';
await page.locator(locator).click();  
await page.locator("//a[normalize-space()='Edit']").click();
await page.locator("//div[contains(@class,'modal-body')]//div[2]//div[1]//input[1]").fill('AT LN Edit');
await page.waitForTimeout(3100);
await page.locator("//div[contains(@class,'modal-body')]/div[contains(@class,'page-row page-flex-wrap')]/div[4]/div[1]/div[1]").click({timeout:5100});
await page.locator("//span[normalize-space()='Super Admin']").click({timeout:5100});
await page.locator("//div[@class='page-row page-flex-wrap']/div[9]/div[1]/div[1]").click({timeout:5100});
await page.locator("//span[normalize-space()='Female']").click({timeout:5100});
await page.locator("//button[normalize-space()='Save']").click({timeout:5100});
await page.reload();
}

{
  // Search user and delete user with delete button on top 
await page.locator("xpath=//input[@placeholder='First name, Last name, Email']").fill('ATFNLN@gmail.com');
await page.waitForTimeout(4100);
await page.locator("//div[contains(@class,'page-flex page-flex-space-between page-align-items-end')]//div//div[contains(@class,'page-header-search')]//button").click();
await page.waitForTimeout(4100);
await page.waitForLoadState('load');
await page.locator('//table[@class="page-mb-2"]/tbody/tr/td[1]/div[@class="custom-check-group"]/label').click();
await page.waitForTimeout(4100);
await page.locator("//button[@class='component-button component-button-submit page-btn-sm page-btn-outline']").click();
await page.waitForTimeout(4100);
await page.locator("//button[@class='component-button component-button-submit page-btn-sm']").click();
await page.waitForTimeout(4100);
await page.waitForLoadState('load');
await page.locator("//div[@class='page-flex page-flex-space-between page-align-items-end']//div//div[@class='page-header-search']//button//*[name()='svg']").click({timeout:10500});
await page.waitForLoadState('load');
  }
 //Create new group
 {
 await page.locator("//div[@class='rounded-dropdown rounded-dropdown-outline-primary no-dropdown-arrow dropdown']//button[@id='dropdown-basic']").click({timeout:5100});
 await page.waitForTimeout(2000);  // Wait for 2 seconds
 await page.locator("//a[normalize-space()='Create New']").click({timeout:78000});
 await page.locator("xpath=//div[@class='educator-form-group form-group']//input[@type='text']").click({timeout:15000});
 await page.locator("xpath=//div[@class='educator-form-group form-group']//input[@type='text']").fill(randomGroupNames[i]);
 // seleting user to create group
 await page.locator("//li[1]//a[1]//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click({timeout:5100}); 
 await page.locator("//li[2]//a[1]//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click({timeout:5100});
 await page.locator("//li[3]//a[1]//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click({timeout:7100});
 await page.waitForTimeout(7000);
 await page.locator('//button[@type="submit" and @class="component-button component-button-submit page-btn-sm"]').click({timeout:9100});
 page.waitForResponse(response => response.url().match(/createGroup/));
 await page.waitForTimeout(8000);
 await page.reload({waitUntil:'load'});
 console.log(randomGroupNames[i]);
}

 // Search created group in group filter
    await page.waitForTimeout(6800);
    await page.locator('//*[@id="gatsby-focus-wrapper"]//div[4][@class="w-full md:w-20rem page-mt-2 page-mr-3 p-multiselect p-component p-inputwrapper"]').click({ timeout: 30000 });
    await page.waitForTimeout(4000);
    await page.locator('//input[@class="p-multiselect-filter p-inputtext p-component"]').fill(randomGroupNames[i]);
    await page.waitForTimeout(9000);
    await page.locator(`//span[normalize-space()="${randomGroupNames[i]}"]`).click();
    await page.waitForTimeout(12000);
    await page.locator("//a[@class='page-links']").click();
    await page.waitForTimeout(12000);
    await page.waitForLoadState('load');

// Group Edit flow 

    await page.locator("//div[@class='rounded-dropdown rounded-dropdown-outline-primary no-dropdown-arrow dropdown']//button[@id='dropdown-basic']").click({timeout : 5100});
    await page.waitForTimeout(4000);
    await page.waitForLoadState('load');
    await page.locator("//a[normalize-space()='Edit']").click({timeout: 60000});

    await page.waitForTimeout(4000);
    await page.waitForLoadState('load');
    await page.locator("//input[@class='search']").fill(randomGroupNames[i]);
    await page.waitForTimeout(4000);
    await page.waitForLoadState('load');
    await page.locator(`//span[normalize-space()="${randomGroupNames[i]}"]`).click({timeout:7100});
    await page.waitForTimeout(4000);
    await page.waitForLoadState('load');
    await page.locator("//div[contains(@class,'user-dropdown-search-list white')]//li[1]//a[1]").first().click({timeout:7100});
    await page.waitForTimeout(4000);
    await page.waitForLoadState('load');
    await page.locator("//div[contains(@class,'page-row page-flex-wrap user-dropdown-search-row')]//div[2]//div[1]//div[1]//ul[1]//li[1]//a[1]//*[name()='svg']").click({timeout:7100});
    await page.waitForTimeout(4000);

    
    await page.locator("//button[contains(@type,'submit')]").click({timeout:7100});

     // Search edit group in group filter


   await page.locator('//*[@id="gatsby-focus-wrapper"]//div[4][@class="w-full md:w-20rem page-mt-2 page-mr-3 p-multiselect p-component p-inputwrapper"]').click({ timeout: 30000 });
   await page.waitForTimeout(4000);
   await page.locator('//input[@class="p-multiselect-filter p-inputtext p-component"]').fill(randomGroupNames[i], { timeout: 5100 });
   console.log(randomGroupNames[i]);
   await page.waitForTimeout(4000);
   await page.locator(`//span[normalize-space()="${randomGroupNames[i]}"]`).click({ timeout: 15100 });
   await page.waitForTimeout(7000);
   await page.locator("//a[@class='page-links']").click({ timeout: 10500 });
   await page.waitForTimeout(7000);
   await page.waitForLoadState('load');

   // Delete group
   await page.locator("//div[@class='rounded-dropdown rounded-dropdown-outline-primary no-dropdown-arrow dropdown']//button[@id='dropdown-basic']").click({timeout : 5100});
   await page.waitForTimeout(4000);
   await page.waitForLoadState('load');
   await page.locator("//a[normalize-space()='Edit']").click({timeout: 60000});
   await page.waitForTimeout(4000);
   await page.waitForLoadState('load');
   await page.locator("//input[@class='search']").fill(randomGroupNames[i]);
   await page.waitForTimeout(4000);
   await page.waitForLoadState('load');
   await page.locator(`//span[normalize-space()="${randomGroupNames[i]}"]`).click({timeout:7100});
   await page.waitForTimeout(7000);
   await page.waitForLoadState('load');
   await page.locator("//b[normalize-space()='Delete']").click({timeout:12100});
   await page.waitForTimeout(8000);

// Search group after delete

await page.waitForTimeout(6800);
await page.locator('//*[@id="gatsby-focus-wrapper"]//div[4][@class="w-full md:w-20rem page-mt-2 page-mr-3 p-multiselect p-component p-inputwrapper"]').click({ timeout: 30000 });
await page.waitForTimeout(4000);
await page.locator('//input[@class="p-multiselect-filter p-inputtext p-component"]').fill(randomGroupNames[i]);
await page.waitForTimeout(9000);
//git hub

}},65000);