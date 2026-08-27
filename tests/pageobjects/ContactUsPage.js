class ContactUsPage {
    // Selectors
    constructor(page) {
        this.page = page;

        this.selectPurpose = page.locator("//select[@data-key='purpose_of_contact']");
        this.fieldFirstName = page.locator("//input[@data-key='first_name']");
        this.fieldLastName = page.locator("//input[@data-key='last_name']");
        this.fieldJobTitle = page.locator("//input[@data-key='job_title']");
        this.selectPosition = page.locator("//select[@data-key='position_level	']");
        this.fieldEmail = page.locator("//input[@data-key='business_email']");
        this.selectCountry = page.locator("//select[@data-validate='select']");
        this.fieldMobileNumber = page.locator("//input[@placeholder='Phone number']");
        this.fieldCompany = page.locator("//input[@data-key='company	']");
        this.fieldMessage = page.locator("//textarea[@data-key='message']");
        this.checkboxAgree = page.locator("//input[@type='checkbox']");
        this.sliderSubmit = page.locator("//input[@type='range']");
        this.successMessage = page.locator("//div[@class='mf_form__success']//child::p[contains(text(),'Thank you! We have received your information successfully and will review it shortly.')]");
    }
}

module.exports = { ContactUsPage };