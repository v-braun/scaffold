# <%= name %>
> <%= description %>

By [v-braun - <%= web %>](https://<%= web %>).

[![](https://img.shields.io/github/license/<%= author %>/<%= name %>.svg?style=flat-square)](<%= repo %>/blob/master/LICENSE)
<%if(locals.shields) { -%>
<%= shields %>
<% } -%>

<p align="center">
<img width="70%" src="<%= banner %>" />
</p>

<%if(locals.preview) { -%>
<%= preview %>
<% } -%>

## Description


<%if(locals.installation) { -%>
## Installation
<%= installation %>
<% } -%>


<%if(locals.usage) { -%>
## Usage
<%= usage %>
<% } -%>

<%if(locals.configuration) { -%>
## Configuration
<%= configuration %>
<% } -%>


## Authors

![image](<%= gravatar %>)  
[v-braun](https://github.com/<%= author %>/)



## Contributing

Make sure to read these guides before getting started:
- [Contribution Guidelines](<%= repo %>/blob/master/CONTRIBUTING.md)
- [Code of Conduct](<%= repo %>/blob/master/CODE_OF_CONDUCT.md)

## License
**<%= name %>** is available under the MIT License. See [LICENSE](<%= repo %>/blob/master/LICENSE) for details.
