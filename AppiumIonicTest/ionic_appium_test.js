"use strict";
require("./helpers/setup");

var wd = require("wd"),
_ = require('underscore'),
Q = require('q'),
serverConfigs = require('./helpers/appiumserver');
describe("Ionic Sample App - Appium Test", function() {
    this.timeout(300000);
    var allPassed = true;
    var driver;

  before(function() {
    var serverConfig = process.env.SAUCE ?
        serverConfigs.sauce : serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);
    var desired = _.clone(require("./helpers/caps").mycapabilities);
    desired.app = require("./helpers/apps").myTestApp;
    if (process.env.SAUCE) {
        desired.name = 'Automation Code';
        desired.tags = ['ionic_appium_test'];
  }
    return driver
        .init(desired);
});
after(function() {
  return driver
    .sleep(3000)
    .quit()
    .finally(function() {
      if (process.env.SAUCE) {
        return driver.sauceJobStatus(allPassed);
    }
    });
});
afterEach(function() {
    allPassed = allPassed && this.currentTest.state === 'passed';
});
// Test to navigate to side menu //
it("Should Tap Hamburger Menu", function() {
    return driver
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[1]").click();
    });
// Test to show login page //
it("Should Tap Login Side Menu", function() {
    return driver
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[3]").click();
    });
// Test to enter user name and password //
it("Should Enter User Name and Password", function() {
    return driver
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIATextField[1]").sendKeys("user")
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIASecureTextField[1]").sendKeys("password");
    });
// Test to tap on login and return to main screen //
it("Should Tap on Login Button", function() {
    return driver
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[3]").click();
    });
// Test to select playlist from menu //
it("Should Go to Playlist Menu", function() {
    return driver
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[1]").click()
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIALink[9]/UIAStaticText[1]").click();
    });
// Test to select option in main screen //
it("Should Tap on Dubstep Menu", function() {
    return driver
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIALink[3]/UIAStaticText[1]").click();
    });
// Test to select back button //
it("Should Tap on Back Menu", function() {
    return driver
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[1]").click()
    });
});