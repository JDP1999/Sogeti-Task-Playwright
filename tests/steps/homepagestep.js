const { Given, When, Then } = require("@cucumber/cucumber");

const { expect } = require("@playwright/test");

const { Homepage } = require("../pageobjects/Homepage.js")

//Methods

//Actions
Given ("homepage is called", async function (){
    this.homepage = new Homepage(this.page)
    await this.page.goto("https://www.sogeti.com/");
});

When ("the user accepts the cookies", async function(){
    await this.homepage.btnAcceptCookies.click();
})

When ("the user click on the stay on this site button", async function () {
    await this.homepage.btnStayOnThisSite.click();
})

When ("the user clicks on the geti button", async function(){
    await this.homepage.btnMeetGeti.click();
})


//Verifications
Then ("the user should be redirected to the geti page", async function(){
    const url = this.page.url();
    await expect(url).toEqual("https://www.sogeti.com/about-us/meet-geti/");
})

