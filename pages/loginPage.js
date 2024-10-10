const env = require('dotenv').config();
const { test, expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;

        this.emailInput = page.getByLabel('Email*');    
        this.passwordInput = page.getByLabel('Password*');

        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.testEnvironmentSelection = page.getByText('Test Workspace DevProductsOrders Workspace Members:');
        this.invalidError=page.locator('.Toastify__toast-container');
    }

    
    // Navigate to login page
    async windowSize() {
        await this.page.setViewportSize({ width: 1300, height: 6000 }); //Maximise Window
        
    }
    async navigate() {
       
        await this.page.goto(process.env.URL);  // Base URL from environment variable
    }

    // Perform login using environment variables
    async validCredentialslogin() {
       
        await this.emailInput.fill(process.env.EMAIL);  // Fill in the email from environment variable
        await this.passwordInput.fill(process.env.PASSWORD);  // Fill in the password from environment variable
        await this.loginButton.click();  // Click the login button
        await this.testEnvironmentSelection.click();
    }
    async invalidCredentialsLogin() {
        
        await this.emailInput.fill(process.env.EMAIL);  // Fill in the email from environment variable
        await this.passwordInput.fill(process.env.INVALID_PASSWORD);  // Fill in the invalid password from environment variable
        await this.loginButton.click();  // Click the login button
        await this.page.waitForTimeout(5000);
        await expect(this.invalidError).toBeVisible();
        

    }
}




module.exports = { LoginPage };
