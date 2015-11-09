'use strict';

exports.register = function (server, options, next) {

    next();
};


exports.register.attributes = {
    pkg: require('./package.json')
};
