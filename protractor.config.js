/**
 * Created by Volha_Shut on 12/7/2016.
 */
'use strict';
exports.config = {
    directConnect: true,
    // Base URL for application server
    baseUrl: 'https://vimeo.com/cameo',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'e2e/features/*.feature'
    ],
    onPrepare: function () {
        const globals = require('protractor');
        let browser = globals.browser;
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.driver.manage().window().maximize();
    },
    cucumberOpts: {
        format: ['pretty'],
        require: ['e2e/step_definitions/*.js', 'e2e/support/world.js'],
        tags: ['@important']
    }
};