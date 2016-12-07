'use strict';

class Home {
    constructor() {
        this.url = 'https://vimeo.com/cameo';
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.menuBar = element(by.css('.topnav_menu_desktop_main'));

        this.desktop = element(by.css('#topnav_desktop'));
        this.phonePicture = element(by.css('.phone_picture.animated'));

        this.allElements = {
            'desktop': element(by.css('#topnav_desktop')),
            'phonePicture': element(by.css('.phone_picture.animated'))
        };

    }
}
module.exports = Home;
