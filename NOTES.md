Please add any additional notes here…

First Branch - SETUP

- setup file structure:
  - did this straight away to keep code organised for the start and better dev experience
- setup express router:
  - I use this to clean up the index.ts, as well for maintainability as its easier to find what you need
- create custom error class:
  - I did this as I recently learn the advantages you get in consistency, as well as it being good dev experience to pass the status code directly in
  - I also included a check to make sure that the stack trace wasnt included in the error in 'production' environment for safety concerns. But I need to include the stack trace to help me debug issues, and if logging is implemented it will help the team.
