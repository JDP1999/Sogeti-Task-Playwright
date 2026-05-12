package StepDefinitions;

import Util.Hooks;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;

public class GeneralStepDef {
    public GeneralStepDef(){

    }

    @Given ("call the Sogeti Side")
    public void callTheSogetiSide(){
        Hooks.generalActions.callTheSogetiSide();
    }

    @And ("cookies are accepted")
    public void cookiesAreAccepted(){
        Hooks.generalActions.acceptCookies();
    }

    @And ("stay on this side is selected")
    public void clickStayOnThisSide(){
        Hooks.generalActions.clickStayOnThisSide();
    }
}
