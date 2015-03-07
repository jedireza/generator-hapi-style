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

### App generator (api and web combo)

```bash
$ yo hapi-style:app hapi-fan-club
```

```bash
$ cd hapi-fan-club
$ npm install
$ npm test
$ npm start
```

### Api generator

```bash
$ yo hapi-style:api hapi-fan-serve
```

```bash
$ cd hapi-fan-serve
$ npm install
$ npm test
$ npm start
```

### Web generator

```bash
$ yo hapi-style:web hapi-fan-site
```

```bash
$ cd hapi-fan-site
$ npm install
$ npm test
$ npm start
```

### Plugin generator

```bash
$ yo hapi-style:plugin hapi-space-madness
```

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
