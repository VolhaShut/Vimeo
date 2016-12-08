/**
 * Created by olga on 7.12.16.
 */
const world = require('../../support/world');

module.exports.parseConst = function (constName) {
    for (let key in world.values){
        if (key==constName){
            return world.values[key];
        }
    }
};