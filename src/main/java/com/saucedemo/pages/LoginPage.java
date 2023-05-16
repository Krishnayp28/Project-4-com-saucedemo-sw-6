package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(id = "user-name")
    WebElement usernameField;

    @CacheLookup
    @FindBy(id = "password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(id = "login-button")
    WebElement loginButton;


    public void enterUserName(String username) {
        log.info("Enter Username : " + username.toString());
        sendTextToElement(usernameField, username);



    }
    public void enterPassword (String password){
        log.info("Enter PasswordField " + password.toString());
        sendTextToElement(passwordField, password);

    }
    public void clickOnLoginButton () {
        log.info("Clicking on Login Button" + loginButton.toString());
        clickOnElement(loginButton);

    }

}
