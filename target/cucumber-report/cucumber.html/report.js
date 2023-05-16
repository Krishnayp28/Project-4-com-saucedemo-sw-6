$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into sauce demo website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2452657900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should Login Successfully With Valid Credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter username \"standard_user\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 66037800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 11701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 131460800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 60279599,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 138261100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 28300,
  "status": "passed"
});
formatter.after({
  "duration": 653332400,
  "status": "passed"
});
formatter.uri("product.feature");
formatter.feature({
  "line": 1,
  "name": "Product Test",
  "description": "As user I want to login and navigate to  product page into sauce demo website",
  "id": "product-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1301074501,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should login with valid credentials",
  "description": "",
  "id": "product-test;user-should-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"standard_user\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify Products text is displayed on the products Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify 6 products are displayed on the products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 9800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 118127500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 79284700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 90608000,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.iVerifyProductsTextIsDisplayedOnTheProductsPage()"
});
formatter.result({
  "duration": 45281201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "ProductsSteps.iVerifyProductsAreDisplayedOnTheProductsPage(int)"
});
formatter.result({
  "duration": 17393001,
  "status": "passed"
});
formatter.after({
  "duration": 644439900,
  "status": "passed"
});
});