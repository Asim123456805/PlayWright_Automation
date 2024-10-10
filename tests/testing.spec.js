const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Assertions', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  
 const img=await page.locator('//div[@id="app"]/header/a/img');
    await expect(img).toBeVisible();
await page.locator("//input[@id='userName']").fill('Asim');
await page.locator("//input[@id='userEmail']").fill('Asim.alam776@gmail.com');
  
});
