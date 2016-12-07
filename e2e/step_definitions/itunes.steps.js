/**
 * Created by olga on 7.12.16.
 */
'use strict';
const expect=require('chai').expect;
const world = require('../support/world');

module.exports = function () {
    this.Then(/^I wait page loaded$/, () => {
        return  browser.wait(EC.visibilityOf(world.itunesPage.contentPage),ECTimeout);
    });

    this.Then(/^Last update should be "(.*)"$/, (date) => {
        return world.itunesPage.lastUpdate.getText()
            .then((text)=>{
                return expect(text).to.equal(date);
            });
    });

    this.Then(/^Version should be "(.*)"$/, (ver) => {
        return world.itunesPage.version.getText()
            .then((text)=>{
                return expect(text).to.equal(ver);
            });
    });

    this.Then(/^Size should be "(.*)"$/, (size) => {
        return world.itunesPage.size.getText()
            .then((text)=>{
                return expect(text.substr(6)).to.equal(size);
            });
    });

};
