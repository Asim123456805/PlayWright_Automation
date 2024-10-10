const faker = require('faker'); // Import the Faker library

class OrderPage {
    constructor(page) {
        this.page = page;
        this.createOrderIcon = page.getByLabel('Create').getByRole('button');
        
        
        this.enterName = page.getByPlaceholder('Name');

        this.enterEmail = page.getByPlaceholder('Email');
        this.enterCity = page.getByPlaceholder('Enter City*');
        this.selectCity = page.getByRole('option', { name: 'Lahore', exact: true });
        this.enterPinLocation = page.getByPlaceholder('Pin Location');
        this.enterAddress = page.getByPlaceholder('Address');
        this.selectProduct = page.getByRole('option', { name: 'Bnb Super Storm Sheikh Al' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
    }

    async createOrder() {
        // Clicking the create order icon
        await this.createOrderIcon.click();

        // Filling the form with order details
        await this.enterMobile.click();
        await this.enterMobile.fill(faker.phone.phoneNumber()); // Use faker directly
        await this.enterName.fill(faker.name.findName()); // Use faker directly
        await this.enterEmail.fill(faker.internet.email()); // Use faker directly
        await this.enterCity.click();  // Click the city input
        await this.enterCity.fill('Lahore');
        await this.page.waitForTimeout(3000); // Wait for 3 seconds
        await this.page.press(this.enterCity.locator(), 'ArrowDown');
        await this.page.press(this.enterCity.locator(), 'ArrowDown');
        await this.page.press(this.enterCity.locator(), 'Enter');
        await this.enterPinLocation.fill("Lahore"); // Fill pin location
        await this.selectProduct.click();  // Click the product selection
        await this.saveButton.click(); // Save the order
    }
}

// Exporting the class using CommonJS
module.exports = { OrderPage };
