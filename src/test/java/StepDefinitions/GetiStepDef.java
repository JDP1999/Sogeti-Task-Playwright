package StepDefinitions;

import Util.Hooks;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class GetiStepDef {
    public GetiStepDef(){

    }

    @When ("clicking the Geti Button")
    public void clickTheGetiButton(){
        Hooks.homeActions.clickTheGetiButton();
    }

    @Then ("check that the Geti Side is called")
    public void checkGetiUrlCalled(){
        Hooks.homeActions.checkGetiUrlCalled();
    }
}