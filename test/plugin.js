'use strict';

const Lab = require('lab');
const Code = require('code');
const Path = require('path');
const Rimraf = require('rimraf');
const YeomanTest = require('yeoman-generator').test;
const YeomanAssert = require('yeoman-generator').assert;
const Proxyquire = require('proxyquire');


const lab = exports.lab = Lab.script();
const testDest = Path.join(__dirname, 'generators', 'tmp-plugin');
const pluginSrc = Path.join(__dirname, '..', 'plugin');
const pluginName = 'super-awesome-plugin';
const pluginDest = Path.join(__dirname, 'generators', 'tmp-plugin', pluginName);
const internals = { gitConfigErr: false };
const GeneratorPlugin = Proxyquire('../plugin', {
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


lab.experiment('Including git repo and git config', () => {

    lab.before((done) => {

        YeomanTest.run(pluginSrc)
            .inDir(testDest)
            .withArguments([pluginName])
            .withPrompts({
                description: 'Activate the plot device.',
                author: 'Stimpson J. Cat',
                authorEmail: 'stimpy@farmcrew.email',
                gitRepo: 'git@github.com:stimpy/super-awesome-plugin.git',
                keywords: 'hapi plugin',
                license: ''
            })
            .on('end', done);
    });

    lab.after((done) => {

        Rimraf(testDest, done);
    });

    lab.test('it generates files successfully', (done) => {

        YeomanAssert.file([
            Path.join(pluginDest, 'index.js'),
            Path.join(pluginDest, 'package.json'),
            Path.join(pluginDest, 'README.md'),
            Path.join(pluginDest, 'LICENSE')
        ]);

        done();
    });
});


lab.experiment('Lacking git repo, git config and license', () => {

    lab.before((done) => {

        internals.gitConfigErr = true;

        YeomanTest.run(pluginSrc)
            .inDir(testDest)
            .withArguments([pluginName])
            .withPrompts({
                description: 'Activate the plot device.',
                author: 'Stimpson J. Cat',
                authorEmail: 'stimpy@farmcrew.email',
                gitRepo: '',
                keywords: 'hapi plugin',
                license: 'ISC'
            })
            .on('end', done);
    });

    lab.after((done) => {

        Rimraf(testDest, done);
    });

    lab.test('it generates files successfully', (done) => {

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
