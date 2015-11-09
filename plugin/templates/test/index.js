'use strict';

const Lab = require('lab');
const Code = require('code');
const Hapi = require('hapi');
const Plugin = require('..');


const lab = exports.lab = Lab.script();


lab.experiment('Plugin Registration', () => {

    lab.test('it registers successfully', (done) => {

        const server = new Hapi.Server();
        server.register(Plugin, (err) => {

            Code.expect(err).to.not.exist();
            done();
        });
    });
});
