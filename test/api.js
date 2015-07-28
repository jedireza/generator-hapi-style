var Lab = require('lab');
var Code = require('code');
var Path = require('path');
var Rimraf = require('rimraf');
var YeomanTest = require('yeoman-generator').test;
var YeomanAssert = require('yeoman-generator').assert;
var Proxyquire = require('proxyquire');


var lab = exports.lab = Lab.script();
var testDest = Path.join(__dirname, 'generators', 'tmp-api');
var appSrc = Path.join(__dirname, '..', 'api');
var appName = 'super-awesome-api';
var appDest = Path.join(__dirname, 'generators', 'tmp-api', appName);
var internals = { gitConfigErr: false };
var GeneratorApp = Proxyquire('../api', {
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
Code.expect(GeneratorApp).to.exist();


lab.experiment('Including git repo and git config', function () {

    lab.before(function (done) {

        YeomanTest.run(appSrc)
            .inDir(testDest)
            .withArguments([appName])
            .withPrompts({
                description: 'Activate the plot device.',
                author: 'Stimpson J. Cat',
                authorEmail: 'stimpy@farmcrew.email',
                gitRepo: 'git@github.com:stimpy/super-awesome-app.git',
                keywords: 'hapi api',
                license: ''
            })
            .on('end', done);
    });

    lab.after(function (done) {

        Rimraf(testDest, done);
    });

    lab.test('it generates files successfully', function (done) {

        YeomanAssert.file([
            Path.join(appDest, 'index.js'),
            Path.join(appDest, 'package.json'),
            Path.join(appDest, 'README.md'),
            Path.join(appDest, 'LICENSE')
        ]);

        done();
    });
});


lab.experiment('Lacking git repo, git config and license', function () {

    lab.before(function (done) {

        internals.gitConfigErr = true;

        YeomanTest.run(appSrc)
            .inDir(testDest)
            .withArguments([appName])
            .withPrompts({
                description: 'Activate the plot device.',
                author: 'Stimpson J. Cat',
                authorEmail: 'stimpy@farmcrew.email',
                gitRepo: '',
                keywords: 'hapi api',
                license: 'ISC'
            })
            .on('end', done);
    });

    lab.after(function (done) {

        Rimraf(testDest, done);
    });

    lab.test('it generates files successfully', function (done) {

        YeomanAssert.file([
            Path.join(appDest, 'index.js'),
            Path.join(appDest, 'package.json'),
            Path.join(appDest, 'README.md')
        ]);

        YeomanAssert.noFile([
            Path.join(appDest, 'LICENSE')
        ]);

        done();
    });
});
