var Path = require('path');
var Generators = require('yeoman-generator');
var GithubUrlFromGit = require('github-url-from-git');
var GitConfig = require('git-config');


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

        this.pkg = Generators.file.readJSON(Path.join(__dirname, '../package.json'));
    },
    git: function () {

        var done = this.async();
        this.gitConfig = {};

        GitConfig(function (err, config) {

            if (err) {
                return done();
            }

            this.gitConfig = config;
            done();
        }.bind(this));
    },
    askFor: function () {

        var done = this.async();

        var prompts = [{
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
            name: 'keywords',
            message: 'Keywords (space separated)'
        }, {
            name: 'license',
            message: 'License',
            default: 'MIT'
        }];

        this.prompt(prompts, function (answers) {

            this.description = answers.description;
            this.author = answers.author;
            this.authorEmail = answers.authorEmail;
            this.gitRepo = answers.gitRepo;
            this.license = answers.license;
            this.keywords = JSON.stringify(answers.keywords.split(' '));
            this.year = new Date().getFullYear();

            done();
        }.bind(this));
    },
    github: function () {

        this.homepageUrl = GithubUrlFromGit(this.gitRepo);
        this.isGithub = Boolean(this.homepageUrl);

        if (this.isGithub) {
            this.bugsUrl = this.homepageUrl + '/issues';
            var matches = GithubUrlFromGit.re.exec(this.gitRepo);
            this.githubOwner = matches[2].split('/')[0];
        }
        else {
            this.homepageUrl = '';
            this.bugsUrl = '';
        }
    },
    app: function () {

        this.mkdir(this.pluginName);
        this.template('_package.json', Path.join(this.pluginName, 'package.json'));
        this.template('_README.md', Path.join(this.pluginName, 'README.md'));
        if (this.license.toUpperCase() === 'MIT') {
            this.template('_LICENSE', Path.join(this.pluginName, 'LICENSE'));
        }
        this.copy('-gitignore', Path.join(this.pluginName, '.gitignore'));
        this.copy('-travis.yml', Path.join(this.pluginName, '.travis.yml'));
        this.copy('index.js', Path.join(this.pluginName, 'index.js'));
        this.mkdir(Path.join(this.pluginName, 'test'));
        this.mkdir(Path.join(this.pluginName, 'test', 'artifacts'));
        this.copy('test/index.js', Path.join(this.pluginName, 'test', 'index.js'));
    }
});
