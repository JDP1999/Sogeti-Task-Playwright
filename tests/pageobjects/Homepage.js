class Homepage {

    //Selectors
    constructor(page){
        this.page = page;
        this.btnAcceptCookies = page.locator("#accept");
        this.btnStayOnThisSite = page.locator("//button[@id='geoRedirectStayBtn']");
        this.btnMeetGeti = page.locator("(//a[@aria-label='<strong>Meet Geti</strong>'])[1]");
        this.btnContactUs = page.locator("(//span[.='Contact us'])[1]");
    }

}
module.exports = { Homepage };
