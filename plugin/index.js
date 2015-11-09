'use strict';

const Path = require('path');
const Generators = require('yeoman-generator');
const GithubUrlFromGit = require('github-url-from-git');
const GitConfig = require('git-config');
const Mkdirp = require('mkdirp');


module.exports = Generators.Base.extend({
    constructor: function () {

        Generators.Base.apply(this, arguments);

        this.argument('pluginName', {
            type: String,
            desc: 'In module format. Ex: `hapi-plot-device`',
            required: true
        });
    },
    init: function () {

        this.pkg = this.fs.readJSON(Path.join(__dirname, '../package.json'));
    },
    git: function () {

        const done = this.async();
        this.gitConfig = {};

        GitConfig((err, config) => {

            if (err) {
                return done();
            }

            this.gitConfig = config;
            done();
        });
    },
    askFor: function () {

        const done = this.async();

        const prompts = [{
            name: 'description',
            message: 'Description'
        }, {
            name: 'author',
            message: 'Author',
            default: this.gitConfig.user && this.gitConfig.user.name
        }, {
            name: 'authorEmail',
            message: 'Author email',
            default: this.gitConfig.user && this.gitConfig.user.email
        }, {
            name: 'gitRepo',
            message: 'Git repo'
        }, {
            name: 'license',
            message: 'License',
            default: 'MIT'
        }];

        this.prompt(prompts, (answers) => {

            this.description = answers.description;
            this.author = answers.author;
            this.authorEmail = answers.authorEmail;
            this.gitRepo = answers.gitRepo;
            this.license = answers.license;
            this.year = new Date().getFullYear();

            done();
        });
    },
    github: function () {

        this.homepageUrl = GithubUrlFromGit(this.gitRepo);
        this.isGithub = Boolean(this.homepageUrl);

        if (this.isGithub) {
            this.bugsUrl = this.homepageUrl + '/issues';
            const matches = GithubUrlFromGit.re.exec(this.gitRepo);
            this.githubOwner = matches[2].split('/')[0];
        }
        else {
            this.homepageUrl = '';
            this.bugsUrl = '';
        }
    },
    app: function () {

        Mkdirp.sync(this.pluginName);
        this.template('_package.json', Path.join(this.pluginName, 'package.json'));
        this.template('_README.md', Path.join(this.pluginName, 'README.md'));
        if (this.license.toUpperCase() === 'MIT') {
            this.template('_LICENSE', Path.join(this.pluginName, 'LICENSE'));
        }
        this.copy('-gitignore', Path.join(this.pluginName, '.gitignore'));
        this.copy('-travis.yml', Path.join(this.pluginName, '.travis.yml'));
        this.copy('index.js', Path.join(this.pluginName, 'index.js'));
        Mkdirp.sync(Path.join(this.pluginName, 'test'));
        Mkdirp.sync(Path.join(this.pluginName, 'test', 'artifacts'));
        this.copy('test/index.js', Path.join(this.pluginName, 'test', 'index.js'));
    }
});
