package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Products')]")
    WebElement productsText;

    @CacheLookup
    @FindBy(xpath = "//div[@class='inventory_item']")
    List<WebElement> productsNum;



    public String getProductText() {
        String message = getTextFromElement(productsText);
        log.info("Getting Product Text " + productsText.toString());
        return message;
    }
    public int findActualNumberOfProducts() {
        log.info("Finding Total Number Of Products" + productsNum.size());
        return productsNum.size();

    }
}
