Feature: Login Test
  As user I want to login into sauce demo website

  @sanity @regression
  Scenario: User Should Login Successfully With Valid Credentials
    Given I am on Homepage
    When  I click on login Link
    And   I enter username "standard_user"
    And   I enter password "secret_sauce"
    And   I click on Login Button
    Then  I should Login successfully



