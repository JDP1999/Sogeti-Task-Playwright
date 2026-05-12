package Actions;

import org.junit.Assert;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.options.LoadState;

import Pages.HomePage;
import Util.Hooks;

public class HomePageActions {

    public HomePage homePage;

    public HomePageActions(Page page) {
        homePage = new HomePage(page);
    }

    public void clickTheGetiButton() {
        Hooks.page.waitForLoadState(LoadState.LOAD);
        homePage.buttonGeti.click();
    }

    public void checkGetiUrlCalled() {
        Hooks.page.waitForLoadState(LoadState.LOAD);
        Assert.assertTrue("New URL not called",Hooks.page.url().compareTo("https://www.sogeti.com/about-us/meet-geti/")==0);
    }
    
}
