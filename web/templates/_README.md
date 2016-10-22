# <%= appName %>

<%= description %><% if (isGithub) { %>

[![Dependency Status](https://david-dm.org/<%= githubOwner %>/<%= appName %>.svg)](https://david-dm.org/<%= githubOwner %>/<%= appName %>)
[![devDependency Status](https://david-dm.org/<%= githubOwner %>/<%= appName %>/dev-status.svg?theme=shields.io)](https://david-dm.org/<%= githubOwner %>/<%= appName %>?type=dev)
[![Build Status](https://travis-ci.org/<%= githubOwner %>/<%= appName %>.svg?branch=master)](https://travis-ci.org/<%= githubOwner %>/<%= appName %>)<% } %>


## Usage

```bash
$ echo "details coming soon"
```<% if (license) { %>


## License

<%= license %><% } %>
