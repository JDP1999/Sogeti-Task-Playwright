class ContactUsPage {
    // Selectors
    constructor(page) {
        this.page = page;

        this.selectPurpose = page.locator("(//select[@data-key='purpose_of_contact'])[1]");
        this.fieldFirstName = page.locator("(//input[@placeholder='First name'])[1]");
        this.fieldLastName = page.locator("(//input[@data-key='last_name'])[1]");
        this.fieldJobTitle = page.locator("(//input[@data-key='job_title'])[1]");
        this.selectPosition = page.locator("(//select[@data-key='position_level	'])[1]");
        this.fieldEmail = page.locator("(//input[@data-key='business_email'])[1]");
        this.selectCountry = page.locator("(//select[@data-validate='select'])[1]");
        this.fieldMobileNumber = page.locator("(//input[@placeholder='Phone number'])[1]");
        this.fieldCompany = page.locator("(//input[@data-key='company	'])[1]");
        this.fieldMessage = page.locator("(//textarea[@data-key='message'])[1]");
        this.checkboxAgree = page.locator("(//input[@class='form-check-input'])[1]");
        this.sliderSubmit = page.locator("(//input[@aria-label='Slide to submit'])[1]");
        this.successMessage = page.locator("(//p[.='Thank you! We have received your information successfully and will review it shortly.'])[1]");
    }
}

module.exports = { ContactUsPage };