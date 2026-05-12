package Util;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

import Actions.GeneralActions;
import Actions.HomePageActions;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Hooks {
    public static Playwright playwright;
    public static Browser browser;
    public static Page page;
    public static BrowserContext context;
    public static HomePageActions homeActions;
    public static GeneralActions generalActions;
    @Before
    public static void setup(){
        System.setProperty("DEBUG", "pw:api"); // only API-level logs
        playwright = Playwright.create();
        browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setChannel("chromium").setSlowMo(700).setHeadless(false));
        context = browser.newContext(new Browser.NewContextOptions().setPermissions(Collections.emptyList()).setRecordVideoDir(Paths.get("videos/")).setRecordVideoSize(1280, 720));
        context.setDefaultTimeout(5000);
        context.setDefaultNavigationTimeout(10000);
        page = context.newPage();
        page.setDefaultTimeout(10000);

        if (browser == null || !browser.isConnected()) {
            throw new IllegalStateException("*** Browser is not initialized or failed to open. ***");
        } else {
            System.out.println(" **** Browser launched and page initialized. ****");
        }

        homeActions = new HomePageActions(page);
        generalActions = new GeneralActions(page);
    }
    @After
    public void tearDown(Scenario scenario) {
        Hooks.page.pause(); // disable it if you need to run tests without pausing after each scenario used for debugging// Call the method to add defunct flag for all accounts created during the test
        try {
            if (scenario.isFailed()) {
                System.out.println("Scenario failed. Taking screenshot...");
                Path screenshotPath = Paths.get("target/screenshots/failure.png");
                // Take screenshot and save to file
                page.screenshot(new Page.ScreenshotOptions().setFullPage(true).setPath(screenshotPath));
                // Also attach it to the Cucumber report
                byte[] screenshotBytes = page.screenshot(new Page.ScreenshotOptions().setFullPage(true));
                scenario.attach(screenshotBytes, "image/png", "Failure Screenshot");

                if (page.video() != null) {
                    Path videoPath = page.video().path();
                    scenario.attach(Files.readAllBytes(videoPath), "video/webm", "Failed Scenario Video");
                    System.out.println("📌 Video saved: " + videoPath);
                } else {
                    System.out.println("⚠ No video found for this scenario");
                }

            } else {
                if (browser != null) {
                    browser.close();
                    System.out.println("Browser closed.");
                }
                if (playwright != null) {
                    playwright.close();
                    System.out.println("Playwright closed.");
                }
            }
        } catch (Exception e) {
            System.err.println("Exception in tearDown: " + e.getMessage());
            // Try to take a screenshot even if tearDown itself fails
            try {
                byte[] screenshotBytes = page.screenshot(new Page.ScreenshotOptions().setFullPage(true));
                scenario.attach(screenshotBytes, "image/png", "Teardown Failure Screenshot");
            } catch (Exception screenshotError) {
                System.err.println("Failed to capture screenshot during teardown failure: " + screenshotError.getMessage());
            }
            // Optionally rethrow or log the error
            throw new RuntimeException("Teardown failed and screenshot taken", e);
        }
    }
}
