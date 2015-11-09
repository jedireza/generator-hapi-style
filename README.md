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
$ npm update --save
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
$ npm update --save
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
$ npm update --save
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
$ npm update --save
$ npm test
```


## Questions and contributing

Any issues or questions (no matter how basic), open an issue. Please take the
initiative to include basic debugging information like operating system
and relevant version details such as:

```bash
$ npm version

# { 'generator-hapi-style': '5.0.0',
#   npm: '2.14.7',
#   ares: '1.10.1-DEV',
#   http_parser: '2.5.0',
#   icu: '56.1',
#   modules: '46',
#   node: '4.2.2',
#   openssl: '1.0.2d',
#   uv: '1.7.5',
#   v8: '4.5.103.35',
#   zlib: '1.2.8' }
```

Contributions are welcome. Your code should:

 - include 100% test coverage
 - follow the [hapi.js coding conventions](http://hapijs.com/styleguide)

If you're changing something non-trivial, you may want to submit an issue
first.


## Keep it covered

:+1: All the generators include 100% test coverage. 


## License

MIT


## Don't forget

What you create with `generator-hapi-style` is more important than `generator-hapi-style`.
