const { Given, When, Then } = require("@cucumber/cucumber");

const { expect } = require("@playwright/test");

//Selectors

var btnAcceptCookies="#accept"
var btnStayOnThisSite="//button[@id='geoRedirectStayBtn']";
var btnMeetGeti="(//a[@aria-label='<strong>Meet Geti</strong>'])[1]";

//Methods

//Actions
Given ("homepage is called", async function (){
    await this.page.goto('https://www.sogeti.com/');
});

When ("the user accepts the cookies", async function(){
    await this.page.locator(btnAcceptCookies).click();
})

When ("the user click on the stay on this site button", async function () {
    await this.page.locator(btnStayOnThisSite).click();
})

When ("the user clicks on the geti button", async function(){
    await this.page.locator(btnMeetGeti).click();
})


//Verifications
Then ("the user should be redirected to the geti page", async function(){
    const url = this.page.url();
    await expect(url).toEqual("https://www.sogeti.com/about-us/meet-geti/");
})

