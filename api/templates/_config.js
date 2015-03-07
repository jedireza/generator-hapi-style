var Confidence = require('confidence');


var criteria = {
    env: process.env.NODE_ENV
};


var config = {
    $meta: 'This file configures the plot device.',
    projectName: '<%= appName %>',
    port: {
        api: {
            $filter: 'env',
            test: 9090,
            $default: 8080
        }
    }
};


var store = new Confidence.Store(config);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
