Please add any additional notes here…

First Branch - SETUP

- setup file structure:
  - did this straight away to keep code organised for the start and better dev experience
- setup express router:
  - I use this to clean up the index.ts, as well for maintainability as its easier to find what you need
- create custom error class:
  - I did this as I recently learn the advantages you get in consistency, as well as it being good dev experience to pass the status code directly in
  - I also included a check to make sure that the stack trace wasnt included in the error in 'production' environment for safety concerns. But I need to include the stack trace to help me debug issues, and if logging is implemented it will help the team.


second branch - get-all-cards-endpoint
- used TDD to build up endpoint, creating the data access layer to read the file, and the controller to handle logic to format that for presentation.
- I decided that if there was no cards, an empty array would be returned, as I think that if there if it is not broken then no error should be thrown. As well it will be easier for working on the frontend with a response like that rather than an error as you would only have to write code for one success scenario
- I used a hashmap to allow for a quick lookup to find the imageUrl, as through doing leetcode this is more performant than my other idea which was a Array.find method inside of a map, which in general a loop inside a loop is a bad idea when a data structure is available to use.
- I also unit tested my model functions in this case as It was a case where I could use unit testing to build functionality, and make sure its all working as it needs to.
- this branch I also implemented the global error handler to catch the errors thrown while reading files that may occur, as well as any freak errors such as network errors.

