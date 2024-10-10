const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

test.describe('Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        // Delay before each test starts
        await delay(4000); // Delay of 1000 ms (1 second)
        
        loginPage = new LoginPage(page);
        await loginPage.navigate(); // Navigate to the login page
    });

    test('Login With Valid Credentials', async () => {
        await loginPage.validCredentialsLogin(); // Perform login using valid credentials
        
    });

    test('Login With Invalid Credentials', async () => {
        await loginPage.invalidCredentialsLogin(); // Perform invalid login
       
    });
});
