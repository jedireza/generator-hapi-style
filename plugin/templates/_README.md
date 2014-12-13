# <%= pluginName %>

<%= description %><% if (isGithub) { %>

[![Dependency Status](https://david-dm.org/<%= githubOwner %>/<%= pluginName %>.svg)](https://david-dm.org/<%= githubOwner %>/<%= pluginName %>)
[![devDependency Status](https://david-dm.org/<%= githubOwner %>/<%= pluginName %>/dev-status.svg?theme=shields.io)](https://david-dm.org/<%= githubOwner %>/<%= pluginName %>#info=devDependencies)
[![Build Status](https://travis-ci.org/<%= githubOwner %>/<%= pluginName %>.svg?branch=master)](https://travis-ci.org/<%= githubOwner %>/<%= pluginName %>)<% } %>


## Install

```bash
$ npm install <%= pluginName %>
```


## Usage

```bash
$ echo "details coming soon"
```<% if (license) { %>


## License

<%= license %><% } %>
