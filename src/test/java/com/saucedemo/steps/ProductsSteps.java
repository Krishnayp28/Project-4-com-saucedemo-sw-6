package com.saucedemo.steps;

import com.saucedemo.pages.ProductPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;


public class ProductsSteps {
    @And("^I verify Products text is displayed on the products Page$")
    public void iVerifyProductsTextIsDisplayedOnTheProductsPage() {
        String expectedText = "Products";
        String actualText = new ProductPage().getProductText();
        Assert.assertEquals(actualText, expectedText, "Expected Text does not displayed");
    }

    @Then("^I verify (\\d+) products are displayed on the products Page$")
    public void iVerifyProductsAreDisplayedOnTheProductsPage(int arg0) {
        int expectedNumberOfProducts = 6;
        int actualNumberOfProducts = new ProductPage().findActualNumberOfProducts();
        Assert.assertEquals(actualNumberOfProducts,expectedNumberOfProducts,"Number of products are not 6");
    }


}
