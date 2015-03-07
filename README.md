# generator-hapi-style

Yeoman generator for scaffolding hapi apps and plugins.

[![Build Status](https://travis-ci.org/jedireza/generator-hapi-style.svg?branch=master)](https://travis-ci.org/jedireza/generator-hapi-style)
[![Dependency Status](https://david-dm.org/jedireza/generator-hapi-style.svg?style=flat)](https://david-dm.org/jedireza/generator-hapi-style)
[![devDependency Status](https://david-dm.org/jedireza/generator-hapi-style/dev-status.svg?style=flat)](https://david-dm.org/jedireza/generator-hapi-style#info=devDependencies)


## Install

```bash
$ npm install -g yo
$ npm install -g generator-hapi-style
```


## Usage

### App Generator

```bash
$ yo hapi-style:app hapi-fan-club

# ? Description: Activate the plot device.
# ? Author: Svën Höek
# ? Author email: sven@farmcrew.email
# ? Git repo: git@github.com:sven/hapi-fan-club.git
# ? Keywords (space separated) hapi fan site
# ? License: MIT
#   create hapi-fan-club/server/api/index.js
#   create hapi-fan-club/server/web/index.js
#   create hapi-fan-club/server/web/index.jade
#   create hapi-fan-club/test/config.js
#   create hapi-fan-club/test/index.js
#   create hapi-fan-club/test/manifest.js
#   create hapi-fan-club/test/server/api/index.js
#   create hapi-fan-club/test/server/web/index.js
#   create hapi-fan-club/.editorconfig
#   create hapi-fan-club/.gitignore
#   create hapi-fan-club/.travis.yml
#   create hapi-fan-club/config.js
#   create hapi-fan-club/LICENSE
#   create hapi-fan-club/package.json
#   create hapi-fan-club/README.md
#   create hapi-fan-club/index.js
#   create hapi-fan-club/manifest.js
#   create hapi-fan-club/server.js
```

Congratulations, you're the proud owner of a brand new hapi app.

```bash
$ cd hapi-fan-club
$ npm install
$ npm test
$ npm start
```

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


## Keep it covered

:+1: All the generators include 100% test coverage. 


## License

MIT


## Don't forget

What you create with `generator-hapi-style` is more important than `generator-hapi-style`.
