class Banner {

    // Selectors
    constructor(page) {
        this.page = page;
        this.lbl_Service = page.locator("//a[@aria-label='Services menu']");
        this.lbl_EndToEndSolutions = page.locator("//a[contains(@aria-label,'End-to-End Solutions')]");
        this.lbl_GenAiAugmentedSoftwareHouse = page.locator("//a[contains(@aria-label,'Gen AI Augmented Software House')]");
    }

}

module.exports = { Banner };