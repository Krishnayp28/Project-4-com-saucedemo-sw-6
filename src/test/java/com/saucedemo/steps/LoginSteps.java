package com.saucedemo.steps;

import com.saucedemo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
    @Given("^I am on Homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login Link$")
    public void iClickOnLoginLink() {

    }

    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username)  {
        new LoginPage().enterUserName(username);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new LoginPage().enterPassword(password);

    }

    @And("^I click on Login Button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();

    }

    @Then("^I should Login successfully$")
    public void iShouldLoginSuccessfully() {
    }


}
