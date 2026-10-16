class Homepage {

    //Selectors
    constructor(page){
        this.page = page;
        this.btnAcceptCookies = page.locator("#accept");
        this.btnStayOnThisSite = page.locator("//button[@id='geoRedirectStayBtn']");
        this.btnMeetGeti = page.locator("(//span[contains(text(),'Meet Geti')])[3]//parent::a");
        this.btnContactUs = page.locator("(//span[.='Contact us'])[1]");
        this.btnLanguage = page.locator("//li[@class='header-lang-open']//child::button")
        this.languagelinks = page.locator("//ul[@id='menu-location-menu']//child::a")
        this.labelHeader = page.locator("(//div[contains(.,'Hitta rätt') or contains(.,'Para lograr') or contains(.,'Finn veien') or contains(.,'Grote resultaten') or contains(.,'Les bons') or contains(.,'BIG results') or contains(.,'Veränderung beginnt')])[1]")
    }

}
module.exports = { Homepage };
