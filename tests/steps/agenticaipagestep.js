const { Given, When, Then } = require("@cucumber/cucumber");

const { expect } = require("@playwright/test");

const { AgenticAiPage } = require("../pageobjects/AgenticAiPage.js")

//Methods

//Actions

//Verifications
Then("verify Agentic-AI page is displayed", async function(){
    this.agenticAiPage = new AgenticAiPage(this.page)
    const url = this.page.url();
    await expect(url).toEqual("https://www.sogeti.com/end-to-end-solutions/gen-ai-enabled-software-house/")
    await expect(this.agenticAiPage.lbl_Path).toBeVisible()
    await expect(this.agenticAiPage.lbl_AgenticAi).toBeVisible()
})
