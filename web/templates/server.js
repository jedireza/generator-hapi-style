'use strict';

const Composer = require('./index');


Composer((err, server) => {

    if (err) {
        throw err;
    }

    server.start((error) => {

        if (error) {
            throw error;
        }

        console.log('Started the plot device on port ' + server.info.port);
    });
});
