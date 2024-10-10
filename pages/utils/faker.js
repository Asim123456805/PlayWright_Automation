const faker = require('faker'); // Import Faker

class Utils {
    static generateFakeEmail() {
        return faker.internet.email(); // Generate a fake email
    }

    static generateFakePassword() {
        return faker.internet.password(); // Generate a fake password
    }

    static generateFakePhoneNumber() {
        return faker.phone.phoneNumber(); // Generate a fake phone number
    }

    static generateFakeName() {
        return faker.name.findName(); // Generate a fake name
    }

    static generateFakeCity() {
        return faker.address.city(); // Generate a fake city
    }

    static generateFakeZipCode() {
        return faker.address.zipCode(); // Generate a fake zip code
    }
}

module.exports = Utils;
