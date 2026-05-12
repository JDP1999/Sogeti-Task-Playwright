package Actions;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.options.LoadState;

import Pages.HomePage;
import Util.Hooks;

public class GeneralActions {

    public HomePage homePage;

    public GeneralActions(Page page) {
        homePage = new HomePage (page);
    }

    public void callTheSogetiSide() {
        Hooks.page.navigate("https://www.sogeti.com/");
    }

    public void acceptCookies() {
        Hooks.page.waitForLoadState(LoadState.LOAD);
        homePage.buttonAcceptCookies.click();
    }

    public void clickStayOnThisSide() {
        Hooks.page.waitForLoadState(LoadState.LOAD);
        homePage.buttonStayOnThisSide.click();
    }
    
}
