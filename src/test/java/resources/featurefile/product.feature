Feature: Product Test
  As user I want to login and navigate to  product page into sauce demo website
   @smoke @regression
  Scenario: User should login with valid credentials
    Given I am on Homepage
     When I click on login Link
     And I enter username "standard_user"
     And I enter password "secret_sauce"
     And I click on Login Button
    And  I verify Products text is displayed on the products Page
    Then I verify 6 products are displayed on the products Page

