$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/selenium/CucumberFramework/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#without Examples Keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 8,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 9,
      "value": "#Then user enters \"naveenk\" and \"test@123\""
    },
    {
      "line": 10,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 11,
      "value": "#Then user is on home page"
    },
    {
      "line": 14,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 15,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 27,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test456"
      ],
      "line": 28,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinationTest.testDemo()"
});
formatter.result({
  "duration": 24630692712,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinationTest.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 26937359,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[#1 Free CRM for Any Business: Online Customer Relationship Software]\u003e but was:\u003c[Free CRM in the cloud software boosts sales]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepdefination.LoginStepdefinationTest.title_of_login_page_is_free_CRM(LoginStepdefinationTest.java:28)\r\n\tat ✽.When title of login page is Free CRM(F:/selenium/CucumberFramework/src/main/java/features/login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepdefinationTest.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdefinationTest.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdefinationTest.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdefinationTest.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"tom\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinationTest.testDemo()"
});
formatter.result({
  "duration": 12701686619,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinationTest.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 21778868,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[#1 Free CRM for Any Business: Online Customer Relationship Software]\u003e but was:\u003c[Free CRM in the cloud software boosts sales]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepdefination.LoginStepdefinationTest.title_of_login_page_is_free_CRM(LoginStepdefinationTest.java:28)\r\n\tat ✽.When title of login page is Free CRM(F:/selenium/CucumberFramework/src/main/java/features/login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test456",
      "offset": 23
    }
  ],
  "location": "LoginStepdefinationTest.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdefinationTest.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdefinationTest.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdefinationTest.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});