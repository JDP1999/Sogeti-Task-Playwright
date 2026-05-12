package Pages;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.options.AriaRole;

public class HomePage {
    public Locator buttonGeti;
    public Locator buttonAcceptCookies;
    public Locator buttonStayOnThisSide;

    public HomePage(Page page){
        buttonGeti = page.locator("(//strong[contains(text(),'Meet Geti')]//parent::a//parent::div[@class='custom-button '])[1]");
        buttonAcceptCookies = page.getByLabel("Accept");
        buttonStayOnThisSide = page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Stay on this Site"));

    }
}
