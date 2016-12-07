/**
 * Created by Volha_Shut on 12/7/2016.
 */
'use strict';
const expect=require('chai').expect;
const world = require('../support/world');

module.exports = function () {


    this.Given(/^I am on Home page$/, () => {
        return world.homePage.openPage();
    });

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
        return world.joinForm.email.sendKeys('testingcucumber@gmail.com');
    });
    this.Then(/^I enter password$/, () => {
        return world.joinForm.password.sendKeys('12345qwerty');
    });
    this.Then(/^I click Join with email button/, () => {
        world.joinForm.joinButton.click();
        return browser.sleep(3000);
    });

    this.Then(/^'(.*)' should be visible$/, (elem) => {
        let elm=world.homePage.allElements;
        let found;
       for (let key in elm){
            if (key==elem){
                found=elm[key];
            }
       };
        return found.isPresent().then((isPresent) => {
            return expect(isPresent).to.equal(true);
        });
    });

    this.Then(/^I scroll down '(.*)' time\(s\)$/, (time) => {
        let counter=600*time;
         browser.executeScript('window.scrollBy(0,'+counter+')');
        browser.executeScript('return window.innerHeight').then((num)=>{
            console.log(num);
        });
        browser.executeScript("return document.querySelector('.phone_picture.animated').getBoundingClientRect()").then((size)=>{
            console.log(size);
        });
        return browser.sleep(3000);
    });

    this.Then(/^'(.*)' should be invisible$/, (elem) => {
        let elm=world.homePage.allElements;
        let found;
        for (let key in elm){
            if (key==elem){
                found=elm[key];
            }
        };

        console.log(m);
        return found.isEnabled().then((isPresent) => {
            return expect(isPresent).to.equal(false);
        });
    });

};