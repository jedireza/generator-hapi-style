'use strict';

const Confidence = require('confidence');
const Config = require('./config');


const criteria = {
    env: process.env.NODE_ENV
};


const manifest = {
    $meta: 'This file defines the plot device.',
    server: {
        debug: {
            request: ['error']
        },
        connections: {
            routes: {
                security: true
            }
        }
    },
    connections: [{
        port: Config.get('/port/web'),
        labels: ['web']
    }],
    registrations: [
        {
            plugin: 'vision'
        },
        {
            plugin: {
                register: 'visionary',
                options: {
                    engines: { jade: 'jade' },
                    path: './server/web'
                }
            }
        },
        {
            plugin: {
                register: './server/api/index'
            },
            options: {
                routes: { prefix: '/api' }
            }
        },
        {
            plugin: './server/web/index'
        }
    ]
};


const store = new Confidence.Store(manifest);


exports.get = (key) => {

    return store.get(key, criteria);
};


exports.meta = (key) => {

    return store.meta(key, criteria);
};
