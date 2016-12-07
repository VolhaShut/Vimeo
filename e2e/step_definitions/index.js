/**
 * Created by Volha_Shut on 12/7/2016.
 */
'use strict';
const expect=require('chai').expect;
const world = require('../support/world');

module.exports = function () {

    this.Given(/^I am on Intro page$/, () => {
        return world.introPage.openPage();
    });

    this.Then(/^I click "(.*)" button$/, (name) => {
        return world.introPage.joinButton.click();
    });

    this.Then(/^"(.*)" form should be visible$/, (name) => {
        return browser.wait(EC.visibilityOf(world.joinForm.joinForm), ECTimeout);
    });

    this.Then(/^I enter first and last name$/, () => {
        return world.joinForm.flName.sendKeys('John John');
    });
    this.Then(/^I enter email address$/, () => {
        let now = new Date();
        return world.joinForm.email.sendKeys('test'+now.getTime()+'@gmail.com');
    });
    this.Then(/^I enter password$/, () => {
        return world.joinForm.password.sendKeys('12345qwerty');
    });
    this.Then(/^I click Join with email button/, () => {
        return world.joinForm.joinButton.click();
    });

    this.Then(/^I click Download button$/, () => {
        return world.homePage.downloadButton.click();
    });

    this.Then(/^Page title should be "(.*)"$/, (title) => {
       return browser.getTitle().then((text)=>{
           return expect(text).to.equal(title);
        });
    });



};