# generator-hapi-style

Yeoman generator for scaffolding hapi stuff. Nothing fancy, just the basics.

[![Build Status](https://travis-ci.org/jedireza/generator-hapi-style.svg?branch=master)](https://travis-ci.org/jedireza/generator-hapi-style)
[![Dependency Status](https://david-dm.org/jedireza/generator-hapi-style.svg?style=flat)](https://david-dm.org/jedireza/generator-hapi-style)
[![devDependency Status](https://david-dm.org/jedireza/generator-hapi-style/dev-status.svg?style=flat)](https://david-dm.org/jedireza/generator-hapi-style#info=devDependencies)


## Install

```bash
$ npm install -g yo
$ npm install -g generator-hapi-style
```


## Usage

### Plugin Generator

```bash
$ yo hapi-style:plugin hapi-space-madness

# ? Description: Activate the plot device.
# ? Author: Stimpson J. Cat
# ? Author email: stimpy@farmcrew.email
# ? Git repo: git@github.com:stimpy/hapi-space-madness.git
# ? Keywords (space separated) hapi plot device
# ? License: MIT
#    create hapi-space-madness/package.json
#    create hapi-space-madness/README.md
#    create hapi-space-madness/LICENSE
#    create hapi-space-madness/.editorconfig
#    create hapi-space-madness/.jshintrc
#    create hapi-space-madness/.gitignore
#    create hapi-space-madness/.travis.yml
#    create hapi-space-madness/index.js
#    create hapi-space-madness/test/index.js
```

Congratulations, you're the proud owner of a brand new hapi plugin.

```bash
$ cd hapi-space-madness
$ npm install
$ npm test
```


## License

MIT


## Don't forget

What you create with `generator-hapi-style` is more important than `generator-hapi-style`.
