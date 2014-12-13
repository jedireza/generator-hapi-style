var Lab = require('lab');
var Code = require('code');
var Hapi = require('hapi');
var Plugin = require('..');


var lab = exports.lab = Lab.script();


lab.experiment('Plugin Registration', function () {

    lab.test('it registers successfully', function (done) {

        var server = new Hapi.Server();
        server.register(Plugin, function (err) {

            Code.expect(err).to.not.exist();
            done();
        });
    });
});
