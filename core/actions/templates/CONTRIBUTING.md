# Contributing to <%= name %>

Thank you for taking the time to contribute **<%= name %>**! ❤️

## I want to report a problem or ask a question

<%if(locals.documentation_url) { -%>
- Check out the [documentation](<%= documentation_url %>).
<% } -%>
- Read [the README](<%= repo %>/blob/master/README.md).
- Search for existing [issues](<%= repo %>/issues).

If the above doesn't help, please [submit an issue](<%= repo %>/issues).

## I want to contribute to <%= name %>

### Checking out the repository

1. Click the “Fork” button in the upper right corner of repo
2. Clone your fork:
    - `git clone https://github.com/<YOUR_GITHUB_USERNAME>/<%= name %>.git`
3. Create a new branch to work on:
    - `git checkout -b <YOUR_BRANCH_NAME>`    
4. Commit your changes 
    - `git commit -am 'Add awesome feature'`
5. Push your changes
    - `git push origin <YOUR_BRANCH_NAME>`
6. Create a new Pull Request
