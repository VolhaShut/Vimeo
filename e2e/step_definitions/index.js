/**
 * Created by Volha_Shut on 12/7/2016.
 */
'use strict';
const expect=require('chai').expect;
const world = require('../support/world');
const parseValue=require('./support/parse.const');

module.exports = function () {

    this.Given(/^I am on Intro page$/, () => {
        return world.introPage.openPage();
    });

    this.Then(/^I click Join button$/, () => {
        return world.introPage.joinButton.click();
    });

    this.Then(/^Join form should be visible$/, () => {
        return browser.wait(EC.visibilityOf(world.joinForm.joinForm), ECTimeout);
    });

    this.Then(/^I enter "(.*)" to input$/, (key) => {
        let flName=parseValue.parseConst(key);
        return world.joinForm.flName.sendKeys(flName);
    });
    this.Then(/^I enter "(.*)" address$/, (key) => {
        let now = new Date();
        return world.joinForm.email.sendKeys('test'+now.getTime()+'@gmail.com');
    });
    this.Then(/^I enter "(.*)"$/, (key) => {
        let password=parseValue.parseConst(key);
        return world.joinForm.password.sendKeys(password);
    });
    this.Then(/^I click Join with email button/, () => {
        return world.joinForm.joinButton.click();
    });

    this.Then(/^I click Download button$/, () => {
        return world.homePage.downloadButton.click();
    });

    this.Then(/^Page title should be "(.*)"$/, (key) => {
       let title=parseValue.parseConst(key);
       return browser.getTitle().then((text)=>{
           return expect(text).to.equal(title);
        });
    });
    this.Then(/^I wait until page gives me access$/, () => {
        return browser.wait(EC.visibilityOf(world.introPage.waitForJoin),ECTimeout);
    });


};