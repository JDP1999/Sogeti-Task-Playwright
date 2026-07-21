
class AgenticAiPage {

    // Selectors
    constructor(page) {
        this.page = page;
        this.lbl_Path = page.locator("//ul[contains(.,'HomeEnd-to-end solutionsGen AI-Augmented Software House')]");
        this.lbl_AgenticAi = page.locator("//h1[.='Gen AI-Augmented Software House']");
    }

}

module.exports = { AgenticAiPage };
