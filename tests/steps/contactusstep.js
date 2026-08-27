const { Given, When, Then } = require("@cucumber/cucumber")

const { expect } = require("@playwright/test")

const { ContactUsPage } = require("../pageobjects/ContactUsPage.js")

const { faker } = require('@faker-js/faker')

//Methods

//Actions
When ("the user fills the contact form", async function (){
    await this.ContactUsPage.selectPurpose.selectOption("Privacy")
    await this.ContactUsPage.fieldFirstName.fill(faker.person.firstName())
    await this.ContactUsPage.fieldLastName.fill(faker.person.lastName())
    await this.ContactUsPage.fieldJobTitle.fill(faker.person.jobTitle())
    await this.ContactUsPage.selectPosition.selectOption("Consultant/Senior Consultant")
    await this.ContactUsPage.fieldEmail.fill(faker.internet.email())
    await this.ContactUsPage.selectCountry.selectOption("Germany")
    await this.ContactUsPage.fieldMobileNumber.fill(faker.phone.number())
    await this.ContactUsPage.fieldCompany.fill(faker.company.name())
    await this.ContactUsPage.fieldMessage.fill(faker.lorem.sentence())
    await this.ContactUsPage.checkboxAgree.click()
    await this.ContactUsPage.sliderSubmit.fill("100")
})

//Validations
Then ("validate contact us site displayed", async function (){
    this.ContactUsPage = new ContactUsPage(this.page)
    const url = this.page.url()
    await expect(url).toEqual("https://www.sogeti.com/contact-us/")
})

Then("validate success message displayed", async function () {
    await this.ContactUsPage.successMessage.isVisible();
})