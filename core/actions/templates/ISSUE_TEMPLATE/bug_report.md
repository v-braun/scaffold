---
name: Bug report
about: Create a report to help us improve <%= name %>

---

**Problem Description:**

**Steps to reproduce:**

**Environment:**
<%if(locals.example_env_device) { -%>
 - Device: [e.g. <%= example_env_device %>]
<% } -%>
<%if(locals.example_env_os) { -%>
 - OS: [e.g. <%= example_env_os %>]
<% } -%>
 - Version of <%= name %>: [e.g. 2.0]