var Lab = require('lab');
var Code = require('code');
var Path = require('path');
var Rimraf = require('rimraf');
var YeomanTest = require('yeoman-generator').test;
var YeomanAssert = require('yeoman-generator').assert;
var Proxyquire = require('proxyquire');


var lab = exports.lab = Lab.script();
var testDest = Path.join(__dirname, 'generators', 'tmp-plugin');
var pluginSrc = Path.join(__dirname, '..', 'plugin');
var pluginName = 'super-awesome-plugin';
var pluginDest = Path.join(__dirname, 'generators', 'tmp-plugin', pluginName);
var internals = { gitConfigErr: false };
var GeneratorPlugin = Proxyquire('../plugin', {
    'git-config': function (callback) {

        if (internals.gitConfigErr) {
            callback(new Error('Stimpy you idiot.'));
        }
        else {
            callback(null, {
                user: {
                    name: 'Stimpson J. Cat',
                    email: 'stimpy@farmcrew.email'
                }
            });
        }
    }
});
Code.expect(GeneratorPlugin).to.exist();


lab.experiment('Including git repo and git config', function () {

    lab.before(function (done) {

        YeomanTest.run(pluginSrc)
            .inDir(testDest)
            .withArguments([ pluginName ])
            .withPrompt({
                description: 'Activate the plot device.',
                author: 'Stimpson J. Cat',
                authorEmail: 'stimpy@farmcrew.email',
                gitRepo: 'git@github.com:stimpy/super-awesome-plugin.git',
                keywords: 'hapi plugin',
                license: ''
            })
            .on('end', done);
    });

    lab.after(function (done) {

        Rimraf(testDest, done);
    });

    lab.test('it generates files successfully', function (done) {

        YeomanAssert.file([
            Path.join(pluginDest, 'index.js'),
            Path.join(pluginDest, 'package.json'),
            Path.join(pluginDest, 'README.md'),
            Path.join(pluginDest, 'LICENSE')
        ]);

        done();
    });
});


lab.experiment('Lacking git repo, git config and license', function () {

    lab.before(function (done) {

        internals.gitConfigErr = true;

        YeomanTest.run(pluginSrc)
            .inDir(testDest)
            .withArguments([ pluginName ])
            .withPrompt({
                description: 'Activate the plot device.',
                author: 'Stimpson J. Cat',
                authorEmail: 'stimpy@farmcrew.email',
                gitRepo: '',
                keywords: 'hapi plugin',
                license: 'ISC'
            })
            .on('end', done);
    });

    lab.after(function (done) {

        Rimraf(testDest, done);
    });

    lab.test('it generates files successfully', function (done) {

        YeomanAssert.file([
            Path.join(pluginDest, 'index.js'),
            Path.join(pluginDest, 'package.json'),
            Path.join(pluginDest, 'README.md')
        ]);

        YeomanAssert.noFile([
            Path.join(pluginDest, 'LICENSE')
        ]);

        done();
    });
});
