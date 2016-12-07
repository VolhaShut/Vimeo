/**
 * Created by Volha_Shut on 12/7/2016.
 */
'use strict';
const world = require('../support/world');

module.exports = function () {
    let DEFAULT_STEP_TIMEOUT = 60 * 1000;
    this.setDefaultTimeout(DEFAULT_STEP_TIMEOUT);
    global.EC = protractor.ExpectedConditions;
    global.ECTimeout = 120 * 1000;

    this.Before({tags: ['@role(logged)']}, () => {
        return world.introPage.openPage()
            .then(() => {
                 world.introPage.loginButton.click();
                return browser.wait(EC.visibilityOf(world.loginForm.loginForm), ECTimeout);
            }).then(() => {
                return world.loginForm.email.sendKeys('testingcucumber@gmail.com');
            }).then(() => {
                return world.loginForm.password.sendKeys('12345qwerty');
            }).then(() => {
                return world.loginForm.loginButton.click();
            }).then(()=>{
                return browser.wait(EC.visibilityOf(world.userForm.userMenu), ECTimeout);
            });
    });

    this.After({tags: ['@role(logout)']}, () => {
        return world.introPage.openPage()
            .then(() => {
                return browser.actions().mouseMove(world.userForm.userMenu).perform()
            }).then(() => {
                return world.userForm.logout.click();
            }).then(() => {
                return browser.sleep(3000);
            });

    });

};